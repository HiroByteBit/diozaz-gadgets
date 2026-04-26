import Image from "next/image";
import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";

export default function Home() {
  const flashSaleProducts = products.filter(p => p.isFlashSale);
  const featured = products.filter(p => ["IP16-PRO", "MAC-M3-PRO-14", "WATCH-ULTRA-2", "AIRPODS-MAX"].includes(p.id));

  return (
    <div className={`${styles.main} bg-pattern`}>
      {/* Editorial Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={`${styles.heroText} reveal`}>
            <div className={styles.badge}>Diozaz Signature Series</div>
            <h1 className={styles.heroTitle}>
              Elegance in <br /> <span>Technology.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Curating the world’s finest Apple ecosystem. <br />
              Authorized precision. Unrivaled luxury.
            </p>
            <div className={styles.heroActions}>
              <Link href="/products" className="btn-primary">
                <span>Shop the Collection</span>
              </Link>
              <Link href="/about" className={styles.btnGhost}>
                The Diozaz Story
              </Link>
            </div>
          </div>
          <div className={`${styles.heroImageWell} reveal stagger-1`}>
             <div className={styles.imageCard}>
                {/* Floating Apple Watch or similar visual feel */}
                <span className={styles.floatingEmoji}>⌚</span>
                <div className={styles.priceTag}>Starting at ₱24,990</div>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className={styles.trustBar}>
        <div className={`${styles.trustInner} container`}>
          <span>AUTHENTICITY GUARANTEED</span>
          <div className={styles.dot}></div>
          <span>SAME-DAY DELIVERY</span>
          <div className={styles.dot}></div>
          <span>1-YEAR WARRANTY</span>
          <div className={styles.dot}></div>
          <span>CERTIFIED PRE-OWNED</span>
        </div>
      </section>

      {/* Bento Category Grid */}
      <section className={`${styles.bentoSection} container`}>
        <div className={styles.bentoGrid}>
          <Link href="/products" className={`${styles.bentoItem} ${styles.itemLarge} reveal`}>
            <div className={styles.bentoContent}>
              <h3>iPhone 16</h3>
              <p>The future of intelligence.</p>
              <span>Explore 📱</span>
            </div>
          </Link>
          <Link href="/products" className={`${styles.bentoItem} ${styles.itemSmall} reveal stagger-1`}>
            <div className={styles.bentoContent}>
              <h3>iPad</h3>
              <span>View 📟</span>
            </div>
          </Link>
          <Link href="/products" className={`${styles.bentoItem} ${styles.itemSmall} reveal stagger-2`}>
            <div className={styles.bentoContent}>
              <h3>Audio</h3>
              <span>Listen 🎧</span>
            </div>
          </Link>
          <Link href="/products" className={`${styles.bentoItem} ${styles.itemMedium} reveal stagger-3`}>
            <div className={styles.bentoContent}>
              <h3>MacBook</h3>
              <p>Work at the speed of thought.</p>
              <span>Discover 💻</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Product Highlight - Flash Sale */}
      {flashSaleProducts.length > 0 && (
        <section className={styles.flashSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className="reveal">Limited <span>Opportunities</span></h2>
              <Link href="/products" className={styles.textLink}>See all deals →</Link>
            </div>
            <div className={styles.productGrid}>
              {flashSaleProducts.slice(0, 3).map((p, i) => (
                <div key={p.id} className="reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Clean Feature Grid */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featureRow}>
            <div className={`${styles.featureCol} reveal`}>
              <div className={styles.fNum}>01</div>
              <h4>Elite Inspection</h4>
              <p>Every device passes a strict 32-point diagnostic check before it reaches your hands.</p>
            </div>
            <div className={`${styles.featureCol} reveal stagger-1`}>
              <div className={styles.fNum}>02</div>
              <h4>VIP White-Glove</h4>
              <p>Our couriers are trained to assist with your initial setup right at your doorstep.</p>
            </div>
            <div className={`${styles.featureCol} reveal stagger-2`}>
              <div className={styles.fNum}>03</div>
              <h4>Direct Support</h4>
              <p>Dedicated account managers for our frequent shoppers and corporate partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Newsletter */}
      <section className={`${styles.newsletter} container`}>
        <div className={`${styles.newsBox} reveal`}>
          <div className={styles.newsText}>
            <h2>Join the <span>Inner Circle</span></h2>
            <p>Subscribers receive priority notifications for rare stock arrivals.</p>
          </div>
          <div className={styles.newsAction}>
            <input type="email" placeholder="Email Address" />
            <button className="btn-primary"><span>Join</span></button>
          </div>
        </div>
      </section>
    </div>
  );
}
