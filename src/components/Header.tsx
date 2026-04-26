"use client";

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';
import { products } from '@/data/products';

export default function Header() {
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredSearch = searchQuery.length > 1 
    ? products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const categories = [
    { name: "iPhone", icon: "📱" },
    { name: "MacBook", icon: "💻" },
    { name: "iPad", icon: "📟" },
    { name: "Watch", icon: "⌚" },
    { name: "AirPods", icon: "🎧" }
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContent}`}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>DIOZAZ<span>.</span></span>
          </Link>
        </div>

        <nav className={styles.nav}>
          <div className={styles.navGroup}>
            <Link href="/products" className={styles.navLink}>Shop</Link>
            <div className={styles.dropdown}>
              <div className={styles.dropdownInner}>
                {categories.map(cat => (
                  <Link key={cat.name} href={`/products?category=${cat.name}`} className={styles.dropdownItem}>
                    <span className={styles.dropIcon}>{cat.icon}</span>
                    <div className={styles.dropText}>
                      <span className={styles.dropName}>{cat.name}</span>
                      <span className={styles.dropSub}>Explore the series</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/about" className={styles.navLink}>Story</Link>
          <Link href="/contact" className={styles.navLink}>Support</Link>
        </nav>

        <div className={styles.actions}>
          <div className={styles.searchWrapper}>
            <button className={styles.iconBtn} onClick={() => setShowSearch(!showSearch)}>🔍</button>
            {showSearch && (
              <div className={styles.searchDropdown}>
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                {filteredSearch.length > 0 && (
                  <div className={styles.searchResults}>
                    {filteredSearch.map(p => (
                      <Link key={p.id} href="/products" onClick={() => setShowSearch(false)}>
                        <img src={p.image} alt="" />
                        <span>{p.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          
          <Link href="/wishlist" className={styles.iconBtn}>
            ❤️ <span className={styles.badge}>{wishlist.length}</span>
          </Link>

          <Link href="/cart" className={styles.cartBtn}>
            🛒 <span>{mounted ? totalItems : 0}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
