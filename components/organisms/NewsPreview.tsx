'use client'

import Link from 'next/link'
import { Calendar } from 'lucide-react'
import * as styles from '@/styles/organisms/newsPreview.css'

const news = [
  {
    id: 1,
    title: 'AEGIS LLP Announces Strategic Partnership with Leading Tech Firms',
    date: '2024-01-15',
    category: 'Partnership',
    excerpt: 'New collaboration aims to accelerate digital transformation initiatives across member companies.',
  },
  {
    id: 2,
    title: 'Quarterly Innovation Summit Showcases Member Company Achievements',
    date: '2024-01-10',
    category: 'Event',
    excerpt: 'Annual gathering highlights breakthrough projects and collaborative successes.',
  },
  {
    id: 3,
    title: 'AEGIS LLP Expands Network with Three New Member Companies',
    date: '2024-01-05',
    category: 'Growth',
    excerpt: 'Strategic additions strengthen our capabilities in AI, sustainability, and design.',
  },
]

export default function NewsPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.heading}>Latest News</h2>
            <p className={styles.subheading}>
              Stay updated with our latest developments and achievements.
            </p>
          </div>
          <Link href="/news" className={styles.buttonDesktop}>
            <span className="btn-secondary">View All News</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {news.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.meta}>
                <Calendar className={styles.icon} />
                <time dateTime={item.date}>
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span style={{ margin: '0 0.5rem' }}>•</span>
                <span className={styles.category}>{item.category}</span>
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.excerpt}>{item.excerpt}</p>
              <Link href={`/news/${item.id}`} className={styles.readMore}>
                Read more →
              </Link>
            </article>
          ))}
        </div>

        <div className={styles.buttonMobile}>
          <Link href="/news">
            <span className="btn-secondary">View All News</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
