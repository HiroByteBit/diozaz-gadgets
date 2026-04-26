"use client";

import styles from './ProductCard.module.css';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useState, useEffect } from 'react';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [selectedColor, setSelectedColor] = useState(product.variants.colors[0]?.name || "");
  const [selectedStorage, setSelectedStorage] = useState(product.variants.storages[0]?.size || "");
  const [added, setAdded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (!product.isFlashSale || !product.saleEndTime) return;
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const end = new Date(product.saleEndTime!).getTime();
      const diff = end - now;
      if (diff < 0) {
        setTimeLeft("EXPIRED");
        clearInterval(timer);
        return;
      }
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft(`${h}h ${m}m ${s}s`);
    }, 1000);
    return () => clearInterval(timer);
  }, [product]);

  const storageExtra = product.variants.storages.find(s => s.size === selectedStorage)?.extraPrice || 0;
  const currentPrice = product.basePrice + storageExtra;
  const formattedPrice = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 }).format(currentPrice);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.stockCount <= 0) return;
    
    addToCart(product, selectedColor, selectedStorage);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const toggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div 
      className={`${styles.productCard} ${isExpanded ? styles.expanded : ''} ${product.isFlashSale ? styles.flashSale : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={styles.imageWrapper}>
        <div className={styles.topBadges}>
          <span className={styles.categoryBadge}>{product.category}</span>
          {product.isFlashSale && <span className={styles.flashBadge}>⚡ FLASH SALE</span>}
        </div>
        
        <button 
          className={`${styles.wishlistBtn} ${isInWishlist(product.id) ? styles.activeWishlist : ''}`}
          onClick={toggleWishlist}
        >
          {isInWishlist(product.id) ? '❤️' : '🤍'}
        </button>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image} alt={product.name} className={styles.image} />
        
        {product.isFlashSale && (
          <div className={styles.countdown}>
            <span>Ends in:</span> {timeLeft}
          </div>
        )}
      </div>

      <div className={styles.details}>
        <div className={styles.meta}>
          <div className={styles.rating}>
            ⭐ <span>{product.rating}</span> <small>({product.reviews})</small>
          </div>
          <span className={`${styles.stock} ${product.stockCount <= 5 ? styles.lowStock : ''}`}>
            {product.stockCount > 0 ? `${product.stockCount} Units Left` : 'OUT OF STOCK'}
          </span>
        </div>

        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.price}>{formattedPrice}</p>

        {isExpanded && (
          <div className={styles.variantSelectors} onClick={(e) => e.stopPropagation()}>
            <div className={styles.selectorGroup}>
              <p className={styles.label}>Selected Color: <span>{selectedColor}</span></p>
              <div className={styles.colorOptions}>
                {product.variants.colors.map(color => (
                  <button
                    key={color.name}
                    className={`${styles.colorBtn} ${selectedColor === color.name ? styles.activeColor : ''}`}
                    style={{ backgroundColor: color.code }}
                    onClick={() => setSelectedColor(color.name)}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            {product.variants.storages.length > 0 && product.variants.storages[0].size !== "Standard" && (
              <div className={styles.selectorGroup}>
                <p className={styles.label}>Choose Storage:</p>
                <div className={styles.storageOptions}>
                  {product.variants.storages.map(storage => (
                    <button
                      key={storage.size}
                      className={`${styles.storageBtn} ${selectedStorage === storage.size ? styles.activeStorage : ''}`}
                      onClick={() => setSelectedStorage(storage.size)}
                    >
                      {storage.size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.descriptionBox}>
               <p className={styles.description}>{product.description}</p>
               <ul className={styles.specs}>
                 {product.fullSpecs.map((spec, i) => <li key={i}>• {spec}</li>)}
               </ul>
            </div>
          </div>
        )}

        <div className={styles.cardActions}>
          <button 
            onClick={handleAddToCart}
            className={`${styles.addBtn} ${added ? styles.added : ''} ${product.stockCount <= 0 ? styles.disabled : ''}`}
            disabled={added || product.stockCount <= 0}
          >
            {product.stockCount <= 0 ? 'OUT OF STOCK' : added ? 'ADDED TO BAG ✓' : 'ADD TO BAG'}
          </button>
        </div>
      </div>
    </div>
  );
}
