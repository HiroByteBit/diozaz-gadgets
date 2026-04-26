"use client";

import styles from "./cart.module.css";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  const formattedTotal = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 0
  }).format(totalPrice);

  if (cart.length === 0) {
    return (
      <div className={`container ${styles.page}`}>
        <h1 className={styles.title}>Your Cart</h1>
        <div className={styles.emptyCart}>
          <p>Your cart is empty. 🌸</p>
          <Link href="/products" className="btn-primary">Start Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`container ${styles.page}`}>
      <h1 className={styles.title}>Your Cart</h1>
      
      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {cart.map(item => (
            <div key={item.cartId} className={styles.cartItem}>
              <div className={styles.itemImage}>
                <img src={item.image} alt={item.name} />
              </div>
              <div className={styles.itemDetails}>
                <h3>{item.name}</h3>
                <p className={styles.itemSpecs}>{item.storage} • {item.color}</p>
                <p className={styles.itemPrice}>
                  {new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 }).format(item.price)}
                </p>
              </div>
              <div className={styles.itemActions}>
                <div className={styles.quantityControl}>
                  <button onClick={() => updateQuantity(item.cartId, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.cartId, item.quantity + 1)}>+</button>
                </div>
                <button 
                  className={styles.removeBtn} 
                  onClick={() => removeFromCart(item.cartId)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.cartSummary}>
          <h2>Summary</h2>
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>{formattedTotal}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Delivery</span>
            <span className={styles.free}>FREE</span>
          </div>
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>{formattedTotal}</span>
          </div>
          <Link href="/checkout" className={`btn-primary ${styles.checkoutBtn}`}>
            <span>Proceed to Checkout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
