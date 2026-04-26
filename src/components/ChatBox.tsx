"use client";

import { useState } from 'react';
import styles from './ChatBox.module.css';

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.chatContainer}>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.adminInfo}>
              <div className={styles.avatar}>🌸</div>
              <div>
                <h4>Diozaz Support</h4>
                <p>We typically reply in 5m</p>
              </div>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className={styles.chatBody}>
            <div className={styles.emptyState}>
              <p>Hi there! 👋</p>
              <p>How can we help you today?</p>
            </div>
          </div>
          <div className={styles.chatFooter}>
            <input type="text" placeholder="Type a message..." disabled />
            <button className={styles.sendBtn} disabled>🚀</button>
          </div>
        </div>
      )}
      <button 
        className={`${styles.chatToggle} ${isOpen ? styles.hidden : ''}`} 
        onClick={() => setIsOpen(true)}
      >
        <span>💬</span>
      </button>
    </div>
  );
}
