import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Shield, Users, Lightbulb, Target } from "lucide-react"
import * as styles from "@/styles/pages/about.css"

export const metadata: Metadata = {
  title: "AEGIS LLPについて - 有限責任事業組合の卓越性",
  description:
    "AEGIS LLP、当社のパートナーシップ構造、理念、有限責任事業組合モデルの利点について学びましょう。",
}

const benefits = [
  {
    title: "有限責任の保護",
    description: "パートナーは、事業の負債や義務に対する個人責任から保護されます。",
    avatar: "/avatar 1.png",
  },
  {
    title: "柔軟な経営構造",
    description: "官僚的な手続きを減らし、意思決定を簡素化します。",
    avatar: "/avatar 2.png",
  },
  {
    title: "税制上の効率性",
    description: "パススルー課税により、パートナーシップ収入の二重課税を回避します。",
    avatar: "/avatar 3.png",
  },
  {
    title: "専門的な信頼性",
    description: "専門サービス市場において信頼と評判を向上させます。",
    avatar: "/avatar 4.png",
  },
];


export default function AboutPage() {
  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.sectionAltBg}>
        <div className={styles.container}>
          <div className={styles.heroTextBox}>
            <h1 className={styles.heroTitle}>AEGIS LLPについて</h1>
            <p className={styles.heroDescription}>
              当社の有限責任事業組合構造と、ビジネスの卓越性を目指す協調的な理念についてご紹介します。
            </p>
          </div>
        </div>
      </section>

      {/* What is LLP Section */}
      <section className={styles.sectionPadding}>
        <div className={styles.container}>
          <div className={styles.twoColGrid}>
            <div>
              <h2 className={styles.sectionHeading}>有限責任事業組合（LLP）とは？</h2>
              <p className={styles.paragraph}>
                有限責任事業組合（LLP）は、パートナーシップの柔軟性と法人の責任保護を組み合わせたビジネス構造です。
                この革新的な仕組みにより、専門サービス提供者が個人の保護を保ちながら協力できます。
              </p>
              <p className={styles.paragraph}>
                日本では、LLPは、資源の共有、専門知識の活用、共同事業の推進を可能にしつつ、個々の運営の独立性と責任の制限を実現する枠組みを提供します。
              </p>
              <Link
                href="https://www.meti.go.jp/english/policy/economy/corporate/llp.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                経産省（METI）の詳細を見る
                <ExternalLink className={styles.linkIcon} />
              </Link>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/aegis group 6.jpeg"
                alt="LLP構造図"
                width={600}
                height={500}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      {/* LLP Benefits */}
      <section className={styles.sectionAltBg}>
        <div className={styles.container}>
          <div className={styles.sectionCenterTextBox}>
            <h2 className={styles.sectionHeading}>LLPの利点とメリット</h2>
            <p className={styles.subText}>
              専門サービスでの協働に最適な構造である理由をご覧ください。
            </p>
          </div>

          <div className={styles.gridTwoCols}>
            {benefits.map((benefit) => (
              <div key={benefit.title} className={styles.cardWithAvatar}>
                <div className={styles.avatarWrapper}>
                  <img src={`${benefit.avatar}`} alt={benefit.title} className={styles.avatarImage} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{benefit.title}</h3>
                  <p className={styles.cardText}>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className={styles.sectionPadding}>
        <div className={styles.container}>
          <div className={styles.sectionCenterTextBox}>
            <h2 className={styles.sectionHeading}>私たちの理念と目的</h2>
          </div>

          <div className={styles.gridThreeCols}>
            <div className={styles.cardCenter}>
              <div className={styles.iconCircle}>
                <Shield className={styles.cardIconLarge} />
              </div>
              <h3 className={styles.cardTitle}>信頼</h3>
              <p className={styles.cardText}>
                透明性、信頼性、そして揺るぎない専門的誠実さによって、永続的な関係を築きます。
              </p>
            </div>

            <div className={styles.cardCenter}>
              <div className={styles.iconCircle}>
                <Lightbulb className={styles.cardIconLarge} />
              </div>
              <h3 className={styles.cardTitle}>革新</h3>
              <p className={styles.cardText}>
                最先端のソリューションを取り入れ、すべての加盟企業で創造的な問題解決を推進します。
              </p>
            </div>

            <div className={styles.cardCenter}>
              <div className={styles.iconCircle}>
                <Users className={styles.cardIconLarge} />
              </div>
              <h3 className={styles.cardTitle}>協力</h3>
              <p className={styles.cardText}>
                多様な専門性を結集し、共同の成功と相互成長を実現します。
              </p>
            </div>
          </div>

          <div className={styles.quoteBox}>
            <p className={styles.quoteText}>
              「AEGIS LLPは、戦略的な協働によって専門性が高められるという原則に基づいて設立されました。
              私たちのパートナーシップ構造により、加盟企業は独自性を維持しながら、リソースの共有、専門知識の結集、
              市場機会の拡大という恩恵を享受できます。」
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
