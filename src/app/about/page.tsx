import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.aboutHero}>
        <div className="container">
          <h1 className={styles.title}>Our <span>Story</span></h1>
          <p className={styles.subtitle}>Bringing premium Apple technology to the Philippines since 2018.</p>
        </div>
      </section>

      <section className={`container ${styles.contentSection}`}>
        <div className={styles.grid}>
          <div className={styles.textBlock}>
            <h2>Who We Are</h2>
            <p>
              Diozaz Gadgets started as a small passion project in Greenhills, Metro Manila. 
              Our founder, a tech enthusiast, noticed how difficult it was to find reliable, 
              verified, and fairly priced iPhones in the pre-owned market.
            </p>
            <p>
              Today, we are one of the most trusted names in the industry, known for our 
              rigorous 32-point inspection process and our commitment to 100% genuine products.
            </p>
          </div>
          <div className={styles.imagePlaceholder}>
            {/* Visual representation of the store/team */}
            <div className={styles.visualCard}>
              <span>📍</span>
              <p>Located at Greenhills Mall, San Juan</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          <div className={styles.statItem}>
            <h3>15k+</h3>
            <p>Happy Customers</p>
          </div>
          <div className={styles.statItem}>
            <h3>100%</h3>
            <p>Genuine Stock</p>
          </div>
          <div className={styles.statItem}>
            <h3>24/7</h3>
            <p>Support Access</p>
          </div>
        </div>
      </section>

      <section className={`container ${styles.missionSection}`}>
        <h2>Our Mission</h2>
        <p>
          To empower Filipinos with high-end technology that enhances their daily lives, 
          bridging the gap between luxury and affordability without ever compromising on quality.
        </p>
      </section>
    </div>
  );
}
