'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as styles from '@/styles/organisms/hero.css';

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundImage}></div>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>
            Professional Partnership
            <span className={styles.titleAccent}>Excellence</span>
          </h1>

          <p className={styles.description}>
            AEGIS Limited Liability Partnership connects innovation, trust, and collaboration across our network of
            exceptional member companies.
          </p>

          <div className={styles.actions}>
            <Link href="/companies" className="btn-primary">
              Explore Companies
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn About LLP
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
