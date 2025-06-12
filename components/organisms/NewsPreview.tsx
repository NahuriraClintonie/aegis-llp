// NewsPreview.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import * as styles from '@/styles/organisms/newsPreview.css'

const news = [
  {
    id: 1,
    title: 'AEGIS合同会社、主要テック企業との戦略的提携を発表',
    date: '2024-01-15',
    category: '提携',
    excerpt: '新たな連携により、会員企業のデジタルトランスフォーメーションを加速します。',
    image: '/partnership.jpg',
  },
  {
    id: 2,
    title: '四半期イノベーションサミットで会員企業の成果を紹介',
    date: '2024-01-10',
    category: 'イベント',
    excerpt: '年次イベントでは、画期的なプロジェクトと協業の成功事例が共有されました。',
    image: '/new member companies.jpg',
  },
  {
    id: 3,
    title: 'AEGIS合同会社、新たに3社の会員企業を迎えネットワークを拡大',
    date: '2024-01-05',
    category: '成長',
    excerpt: 'AI、サステナビリティ、デザイン分野での強化を目指します。',
    image: '/member projects.jpg',
  },
]

export default function NewsPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <h2 className={styles.latestHeading}>📢 AEGIS LATEST NEWS</h2>
          <p className={styles.latestText}>
            最新ニュースや注目のアナウンスメントを通じて、AEGISの成長と進展をご覧ください。
          </p>
        </div>

        <div className={styles.rightSection}>
          {news.map((item) => (
            <article key={item.id} className={styles.newsCard}>
            <div className={styles.cardContent}>
              <div className={styles.cardMeta}>
                <span className={styles.cardCategory}>{item.category}</span>
                <span className={styles.separator}>|</span>
                <time dateTime={item.date} className={styles.cardDate}>
                  {new Date(item.date).toLocaleDateString('ja-JP', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <p className={styles.cardExcerpt}>{item.excerpt}</p>
            </div>

            <Link
              href={`/news/${item.id}`}
              className={styles.arrowLink}
              aria-label="Read more"
            >
              <ArrowUpRight className={styles.arrowIcon} />
            </Link>
          </article>

          ))}
        </div>
      </div>
    </section>
  )
}
