import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.info}>
          <h3>Diozaz Gadgets</h3>
          <p>Stall Y-09, Aquarium Area, 2nd Floor</p>
          <p>Greenhills Shopping Center, San Juan City, MNL</p>
          <p>Contact: 09166346801 / 09278707776</p>
        </div>
        <div className={styles.notice}>
          <p><strong>🚨 Reminder:</strong> This is the ONLY official Diozaz Gadgets page. Do not transact with fake accounts.</p>
        </div>
      </div>
    </footer>
  );
}
