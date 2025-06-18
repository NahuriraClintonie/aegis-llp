import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import * as styles from "@/styles/pages/business.css"

export const metadata: Metadata = {
  title: "加盟企業 - AEGIS LLP",
  description: "多様な専門性と革新的なソリューションを持つ、私たちの加盟企業ネットワークをご覧ください。",
}

const companies = [
  {
    id: 1,
    name: "TechFlow Solutions",
    specialty: "デジタルトランスフォーメーション & AI",
    description: "最先端のAIと自動化ソリューションでデジタルトランスフォーメーションをリードします。",
    logo: "/techflow.jpg",
    category: "テクノロジー",
  },
  {
    id: 2,
    name: "Design Studio Zen",
    specialty: "UX/UIデザイン & ブランディング",
    description: "ミニマルなデザインと戦略的なブランディングで優れたユーザー体験を創出します。",
    logo: "/design studio.jpg",
    category: "デザイン",
  },
  {
    id: 3,
    name: "Quantum Analytics",
    specialty: "データサイエンス & 分析",
    description: "複雑なデータを戦略的意思決定のための実用的な洞察へと変換します。",
    logo: "/quantum analytics.jpg",
    category: "アナリティクス",
  },
  {
    id: 4,
    name: "Green Energy Co.",
    specialty: "サステナブルテクノロジー",
    description: "よりクリーンで効率的な未来のために持続可能なエネルギーソリューションを開拓しています。",
    logo: "/green energy.jpg",
    category: "サステナビリティ",
  },
  {
    id: 5,
    name: "CloudSecure Systems",
    specialty: "サイバーセキュリティ & クラウド",
    description: "高度なサイバーセキュリティとクラウドインフラでデジタル資産を保護します。",
    logo: "/cloud secure.jpg",
    category: "セキュリティ",
  },
  {
    id: 6,
    name: "Innovation Labs",
    specialty: "研究開発 & プロトタイピング",
    description: "迅速なプロトタイピングと研究開発サービスでイノベーションを加速します。",
    logo: "/innovation labs.jpg",
    category: "リサーチ",
  },
];

const categories = ["すべて", "テクノロジー", "デザイン", "アナリティクス", "サステナビリティ", "セキュリティ", "リサーチ"];

export default function CompaniesPage() {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.containerCustom}>
          <div className={styles.heroContent}>
           <h1 className={styles.heroTitle}>加盟企業のご紹介</h1>
              <p className={styles.heroText}>
                当社が厳選したパートナー企業ネットワークが提供する、多様な専門性と革新的なソリューションをご覧ください。
              </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionPadding}>
        <div className={styles.containerCustom}>
          <div className={styles.categoryButtons}>
            {categories.map((category) => (
              <button key={category} className={styles.categoryButton}>
                {category}
              </button>
            ))}
          </div>

          <div className={styles.companyGrid}>
            {companies.map((company) => (
              <div key={company.id} className={styles.companyCard}>
                <div className={styles.cardImageWrapper}>
                  <Image
                    src={company.logo || "/aegis group 5.jpeg"}
                    alt={`${company.name} logo`}
                    fill
                    className={styles.cardImage}
                  />
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.categoryBadge}>{company.category}</span>
                  <h3 className={styles.companyName}>{company.name}</h3>
                  <p className={styles.companySpecialty}>{company.specialty}</p>
                  <p className={styles.companyDescription}>{company.description}</p>
                  <Link href={`/companies/${company.id}`} className={styles.learnMore}>
                    詳しく見る
                    <ArrowRight className={styles.arrowIcon} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
