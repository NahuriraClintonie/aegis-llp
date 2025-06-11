import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import * as styles from '@/styles/layouts/footer.css';

const navigation = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Companies', href: '/companies' },
    { name: 'Projects', href: '/projects' },
    { name: 'Careers', href: '/careers' },
  ],
  resources: [
    { name: 'News', href: '/news' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
  <div className={styles.container}>
    <div className={styles.grid}>
      <div className="lg:col-span-3">
        <div className={styles.brand}>
          <span className={styles.brandText}>AEGIS</span>
          <span className={styles.subText}>LLP</span>
        </div>
        <p className={styles.description}>
          Professional Limited Liability Partnership connecting innovation,
          trust, and collaboration across member companies.
        </p>
        <div className={styles.contactList}>
          <div className={styles.contactItem}>
            <Mail size={16} />
            <span>info@aegis-llp.com</span>
          </div>
          <div className={styles.contactItem}>
            <Phone size={16} />
            <span>+81-3-1234-5678</span>
          </div>
          <div className={styles.contactItem}>
            <MapPin size={16} />
            <span>Tokyo, Japan</span>
          </div>
        </div>
      </div>

      <div className={styles.navSection}>
        <h3 className={styles.navTitle}>Company</h3>
        <ul>
          {navigation.company.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className={styles.navItem}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.navSection}>
        <h3 className={styles.navTitle}>Resources</h3>
        <ul>
          {navigation.resources.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className={styles.navItem}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className={styles.bottomBar}>
      <div className={styles.bottomRow}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} AEGIS LLP. All rights reserved.
        </p>
        <div className={styles.policyLinks}>
          <Link href="/privacy" className={styles.policyItem}>
            Privacy Policy
          </Link>
          <Link href="/terms" className={styles.policyItem}>
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}
