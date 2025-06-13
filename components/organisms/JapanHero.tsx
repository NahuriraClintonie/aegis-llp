// JapanHero.tsx
'use client';

import * as styles from '@/styles/organisms/JapanHero.css'

export default function JapanHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.logo}>JAP<span className={styles.vibes}>-VIBES</span></div>
        <p className={styles.visitText}>... VISIT</p>
        <h1 className={styles.heroTitle}>JAPAN</h1>
        <p className={styles.heroDescription}>
          Spend your magical day only in Japan because lot of things can be happen in this beautiful country. Get your trip advisor by the most experienced trip guide only on japvibes.com. Get your tickets now!
        </p>
        <button className={styles.learnBtn}>LEARN MORE</button>
        <div className={styles.socialIcons}>
          <span>🌐</span>
          <span>🐦</span>
          <span>📸</span>
        </div>
      </div>

      <div className={styles.heroRight}>
        <div className={styles.sun}></div>
        <div className={styles.mountain}></div>
        <div className={styles.gate}></div>
        <div className={styles.blossoms}>🌸🌸🌸</div>
      </div>
    </section>
  );
}
