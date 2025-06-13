// JapanHero.tsx
'use client';

import * as styles from '@/styles/organisms/JapanHero.css'

export default function JapanHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.logo}>AEGIS<span className={styles.vibes}> LLP</span></div>
        <p className={styles.visitText}>... CONNECT WITH US</p>
        <h1 className={styles.heroTitle}>EXCELLENCE</h1>
        <p className={styles.heroDescription}>
            At AEGIS LLP, we build powerful partnerships rooted in trust, innovation, and professionalism. Explore a network of exceptional companies transforming industries across the globe.
        </p>
        <button className={styles.learnBtn}>LEARN MORE</button>
        <div className={styles.socialIcons}>
            <a href="https://x.com/aegisllp" target="_blank" rel="noopener noreferrer" aria-label="X">
            <img src="/icons/x.svg" alt="X" className={styles.icon} />
            </a>
            <a href="https://facebook.com/aegisllp" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img src="/icons/facebook.svg" alt="Facebook" className={styles.icon} />
            </a>
            <a href="https://instagram.com/aegisllp" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src="/icons/instagram.svg" alt="Instagram" className={styles.icon} />
            </a>
            <a href="https://linkedin.com/company/aegisllp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className={styles.icon} />
            </a>
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
