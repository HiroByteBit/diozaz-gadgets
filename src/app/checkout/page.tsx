"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import styles from "./checkout.module.css";
import Link from "next/link";

type ShippingOption = {
  id: string;
  name: string;
  price: number;
  time: string;
};

const shippingOptions: ShippingOption[] = [
  { id: "standard", name: "Standard Shipping", price: 0, time: "3-5 business days" },
  { id: "express", name: "Express Delivery", price: 250, time: "1-2 business days" },
  { id: "sameday", name: "Same Day Delivery (Metro Manila)", price: 500, time: "Same day before 6 PM" },
];

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);
  const [selectedShipping, setSelectedShipping] = useState<string>("standard");

  const shippingCost = shippingOptions.find(o => o.id === selectedShipping)?.price || 0;
  const finalTotal = totalPrice + shippingCost;

  const formatPrice = (price: number) => new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 0
  }).format(price);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className={`container ${styles.page} reveal`}>
        <div className={styles.successCard}>
          <span className={styles.successIcon}>✨</span>
          <h1>Order <span>Confirmed</span></h1>
          <p>Thank you for choosing Diozaz Gadgets. Your premium tech is on its way!</p>
          <div className={styles.orderNumber}>Order #DG-{Math.floor(100000 + Math.random() * 900000)}</div>
          <Link href="/" className="btn-primary"><span>Back to Home</span></Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className={`container ${styles.page}`}>
        <h1 className={styles.title}>Your Bag is <span>Empty</span></h1>
        <p className={styles.emptyText}>Looks like you haven't added anything to your collection yet.</p>
        <Link href="/products" className="btn-primary"><span>Go Shopping</span></Link>
      </div>
    );
  }

  return (
    <div className={`container ${styles.page}`}>
      <h1 className={`${styles.title} reveal`}>Complete Your <span>Purchase</span></h1>
      
      <div className={styles.checkoutGrid}>
        <form className={`${styles.checkoutForm} reveal stagger-1`} onSubmit={handleSubmit}>
          <section className={styles.formSection}>
            <h2>1. Shipping <span>Address</span></h2>
            <div className={styles.inputGrid}>
              <div className={styles.inputGroup}>
                <label>First Name</label>
                <input type="text" placeholder="John" required />
              </div>
              <div className={styles.inputGroup}>
                <label>Last Name</label>
                <input type="text" placeholder="Doe" required />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Phone Number</label>
              <input type="tel" placeholder="0917 XXX XXXX" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Full Delivery Address</label>
              <textarea placeholder="House No., Street, Brgy, City, Province" rows={3} required></textarea>
            </div>
          </section>

          <section className={styles.formSection}>
            <h2>2. Shipping <span>Options</span></h2>
            <div className={styles.shippingGrid}>
              {shippingOptions.map(option => (
                <label 
                  key={option.id} 
                  className={`${styles.shippingLabel} ${selectedShipping === option.id ? styles.activeOption : ''}`}
                >
                  <input 
                    type="radio" 
                    name="shipping" 
                    value={option.id}
                    checked={selectedShipping === option.id}
                    onChange={() => setSelectedShipping(option.id)}
                  />
                  <div className={styles.optionInfo}>
                    <span className={styles.optionName}>{option.name}</span>
                    <span className={styles.optionTime}>{option.time}</span>
                  </div>
                  <span className={styles.optionPrice}>
                    {option.price === 0 ? "FREE" : `₱${option.price.toLocaleString()}`}
                  </span>
                </label>
              ))}
            </div>
          </section>

          <section className={styles.formSection}>
            <h2>3. Payment <span>Method</span></h2>
            <div className={styles.paymentGrid}>
              {[
                { id: "cod", label: "Cash on Delivery", icon: "💵" },
                { id: "gcash", label: "GCash / E-Wallet", icon: "📱" },
                { id: "card", label: "Credit / Debit Card", icon: "💳" }
              ].map(pay => (
                <label key={pay.id} className={styles.paymentLabel}>
                  <input type="radio" name="payment" defaultChecked={pay.id === "cod"} />
                  <div className={styles.paymentCard}>
                    <span className={styles.payIcon}>{pay.icon}</span>
                    <span className={styles.payLabel}>{pay.label}</span>
                  </div>
                </label>
              ))}
            </div>
          </section>

          <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
            <span>Place Order Now • {formatPrice(finalTotal)}</span>
          </button>
        </form>

        <aside className={`${styles.summaryCard} reveal stagger-2`}>
          <div className={styles.summaryHeader}>
            <h2>Order Summary</h2>
            <Link href="/cart" className={styles.editLink}>Edit Bag</Link>
          </div>
          
          <div className={styles.summaryList}>
            {cart.map(item => (
              <div key={item.cartId} className={styles.summaryItem}>
                <div className={styles.summaryImg}>
                  <img src={item.image} alt="" />
                  <span className={styles.quantityBadge}>{item.quantity}</span>
                </div>
                <div className={styles.itemInfo}>
                  <h4>{item.name}</h4>
                  <p>{item.storage} • {item.color}</p>
                </div>
                <span className={styles.itemPrice}>
                  ₱{(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          <div className={styles.discountBox}>
            <input type="text" placeholder="Discount Code" />
            <button type="button">Apply</button>
          </div>

          <div className={styles.totalBlock}>
            <div className={styles.row}>
              <span>Subtotal</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className={styles.row}>
              <span>Shipping</span>
              <span>{shippingCost === 0 ? "FREE" : formatPrice(shippingCost)}</span>
            </div>
            <div className={styles.row}>
              <span>Tax (Included)</span>
              <span>{formatPrice(finalTotal * 0.12)}</span>
            </div>
            <div className={`${styles.row} ${styles.totalRow}`}>
              <span>Total</span>
              <span>{formatPrice(finalTotal)}</span>
            </div>
          </div>

          <div className={styles.trustBadge}>
             <p>🔒 Secure 256-bit SSL encrypted checkout</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
