"use client";

import styles from "./contact.module.css";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.contactPage}>
      <section className={styles.contactHero}>
        <div className="container">
          <h1 className={styles.title}>Get in <span>Touch</span></h1>
          <p className={styles.subtitle}>Have questions? We're here to help you find your next device.</p>
        </div>
      </section>

      <section className={`container ${styles.contactContent}`}>
        <div className={styles.grid}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <h3>📍 Location</h3>
              <p>Greenhills Shopping Center, San Juan, Metro Manila, Philippines</p>
            </div>
            <div className={styles.infoItem}>
              <h3>📞 Phone</h3>
              <p>+63 917 123 4567</p>
            </div>
            <div className={styles.infoItem}>
              <h3>📧 Email</h3>
              <p>hello@diozazgadgets.ph</p>
            </div>
            <div className={styles.infoItem}>
              <h3>🕒 Hours</h3>
              <p>Mon - Sun: 10:00 AM - 8:00 PM</p>
            </div>
          </div>

          <div className={styles.formWrapper}>
            {submitted ? (
              <div className={styles.successMessage}>
                <h2>Message Sent! ✨</h2>
                <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>Send another</button>
              </div>
            ) : (
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Subject</label>
                  <select>
                    <option>Product Inquiry</option>
                    <option>Order Status</option>
                    <option>Warranty Claim</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Message</label>
                  <textarea placeholder="Tell us what you're looking for..." rows={5} required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>Do you offer warranty?</h3>
              <p>Yes! All brand new items come with a 1-year Apple warranty. Pre-owned units have a 7-day replacement and 3-month shop warranty.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Is COD available?</h3>
              <p>We offer Cash on Delivery (COD) for Metro Manila and selected areas in Greater Manila.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I trade in my old iPhone?</h3>
              <p>Yes, we accept trade-ins! Visit our physical store for appraisal.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
