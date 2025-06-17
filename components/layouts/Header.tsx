'use client';

import Link from 'next/link';
import * as styles from '@/styles/layouts/header.css';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
  { label: 'News', href: '/news' },
];

export default function Header() {
  return (
    <header className={styles.headerRoot}>
      <div className={styles.logo}>AEGIS</div>
      <nav className={styles.navList}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={styles.navItem}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
