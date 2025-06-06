'use client';

import { Shield, Users, Lightbulb } from 'lucide-react';
import * as styles from '@/styles/organisms/intro.css';

const values = [
  {
    name: 'Trust',
    description: 'Built on transparency, reliability, and professional integrity in every partnership.',
    icon: Shield,
  },
  {
    name: 'Collaboration',
    description: 'Fostering synergies between member companies to achieve collective success.',
    icon: Users,
  },
  {
    name: 'Innovation',
    description: 'Driving forward-thinking solutions and embracing technological advancement.',
    icon: Lightbulb,
  },
];

export default function IntroSection() {
  return (
    <section className={styles.section}>
      <div className="container-custom">
        <div className={styles.header}>
          <h2 className={styles.title}>Our Partnership Philosophy</h2>
          <p className={styles.subtitle}>
            AEGIS LLP represents a new paradigm in professional partnerships, combining the flexibility of limited
            liability with the collaborative strength of our diverse member companies.
          </p>
        </div>

        <div className={styles.grid}>
          {values.map((value) => (
            <div key={value.name} className={styles.card}>
              <div className={styles.iconWrapper}>
                <value.icon className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>{value.name}</h3>
              <p className={styles.cardText}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
