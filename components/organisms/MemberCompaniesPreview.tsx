'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as styles from '@/styles/organisms/memberCompaniesPreview.css';

const companies = [
  {
    id: 1,
    name: 'テックフロー・ソリューションズ',
    specialty: 'デジタルトランスフォーメーション & AI',
    logo: '/background 5.jpg',
  },
  {
    id: 2,
    name: 'デザインスタジオ禅',
    specialty: 'UX/UIデザイン & ブランディング',
    logo: '/background 6.jpg',
  },
  {
    id: 3,
    name: 'クアンタム・アナリティクス',
    specialty: 'データサイエンス & 分析',
    logo: '/new member companies.jpg',
  },
  {
    id: 4,
    name: 'グリーンエナジー株式会社',
    specialty: '持続可能なテクノロジー',
    logo: '/background 8.jpg',
  },
];

export default function MemberCompaniesPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingBlock}>
          <h2 className={styles.title}>加盟企業のご紹介</h2>
          <p className={styles.description}>
            各分野で革新的なソリューションを提供する、信頼できるパートナー企業をご覧ください。
          </p>
        </div>

        <div className={styles.grid}>
          {companies.map((company) => (
            <div key={company.id} className={styles.card}>
              <div className={styles.logoArea}>
                <Image
                  src={company.logo}
                  alt={`${company.name} image`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className={styles.gradientOverlay} />
              </div>
              <div className={styles.contentArea}>
                <h3 className={styles.name}>{company.name}</h3>
                <p className={styles.specialty}>{company.specialty}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.buttonWrapper}>
          <Link href="/companies" className="btn-primary">
            すべての企業を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
