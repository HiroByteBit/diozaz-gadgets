"use client";

import styles from "./wishlist.module.css";
import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlist } = useWishlist();
  
  const wishlistProducts = products.filter(p => wishlist.some(item => item.productId === p.id));

  if (wishlistProducts.length === 0) {
    return (
      <div className={`container ${styles.page}`}>
        <h1 className={styles.title}>My <span>Wishlist</span></h1>
        <div className={styles.empty}>
          <p>Your wishlist is empty. 🤍</p>
          <Link href="/products" className="btn-primary">Explore Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`container ${styles.page}`}>
      <h1 className={styles.title}>My <span>Wishlist</span></h1>
      <div className={styles.grid}>
        {wishlistProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
