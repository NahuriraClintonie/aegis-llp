// JapanHero.tsx
'use client';

import * as styles from '@/styles/organisms/JapanHero.css'
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function JapanHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        {/* <div className={styles.logo}>AEGIS<span className={styles.vibes}> LLP</span></div> */}
        <h1 className={styles.heroTitle}>プロフェッショナル</h1>
        <h1 className={styles.heroTitle}>パートナーシップ</h1>
        <h2 className={styles.heroTitle}>エクセレンス</h2>
        <p className={styles.heroDescription}>
            AEGIS LLPでは、信頼、イノベーション、そしてプロフェッショナリズムに根ざした強力なパートナーシップを築いています。世界中の産業を変革する卓越した企業のネットワークをご覧ください。
        </p>
        <button className={styles.learnBtn}>LEARN MORE</button>
        <div className={styles.socialIcons}>
            <a href="https://x.com/aegisllp" target="_blank" rel="noopener noreferrer" aria-label="X">
            <Twitter className={styles.icon} />
            </a>
            <a href="https://facebook.com/aegisllp" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className={styles.icon} />
            </a>
            <a href="https://instagram.com/aegisllp" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className={styles.icon} />
            </a>
            <a href="https://linkedin.com/company/aegisllp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className={styles.icon} />
            </a>
        </div>
        </div>

      <div className={styles.heroRight}>
        <div className={styles.backgroundImage}></div>

        <div className={styles.sun}>
            <span className={styles.sunText}>LLP</span>
        </div>
        </div>
    </section>
  );
}
