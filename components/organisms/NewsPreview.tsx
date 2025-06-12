'use client'

import Link from 'next/link'
import { Calendar } from 'lucide-react'
import * as styles from '@/styles/organisms/newsPreview.css'

const news = [
  {
    id: 1,
    title: 'AEGIS合同会社、主要テック企業との戦略的提携を発表',
    date: '2024-01-15',
    category: '提携',
    excerpt: '新たな連携により、会員企業のデジタルトランスフォーメーションを加速します。',
  },
  {
    id: 2,
    title: '四半期イノベーションサミットで会員企業の成果を紹介',
    date: '2024-01-10',
    category: 'イベント',
    excerpt: '年次イベントでは、画期的なプロジェクトと協業の成功事例が共有されました。',
  },
  {
    id: 3,
    title: 'AEGIS合同会社、新たに3社の会員企業を迎えネットワークを拡大',
    date: '2024-01-05',
    category: '成長',
    excerpt: 'AI、サステナビリティ、デザイン分野での強化を目指します。',
  },
]

export default function NewsPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.heading}>📢 最新のお知らせ</h2>
            <p className={styles.subheading}>
              AEGISからの最新情報や活動内容をチェックしましょう。
            </p>
          </div>
          <Link href="/news" className={styles.buttonDesktop}>
            <span className={styles.readMore}>すべてのお知らせを見る</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {news.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.meta}>
                <span role="img" aria-label="icon">🎌</span>
                <Calendar className={styles.icon} />
                <time dateTime={item.date}>
                  {new Date(item.date).toLocaleDateString('ja-JP', {
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
                続きを読む →
              </Link>
            </article>
          ))}
        </div>

        <div className={styles.buttonMobile}>
          <Link href="/news">
            <span className={styles.readMore}>すべてのお知らせを見る</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
