import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Shield, Users, Lightbulb, Target } from "lucide-react"
import * as styles from "@/styles/pages/about.css"

export const metadata: Metadata = {
  title: "About AEGIS LLP - Limited Liability Partnership Excellence",
  description:
    "Learn about AEGIS LLP, our partnership structure, philosophy, and the benefits of our Limited Liability Partnership model.",
}

const benefits = [
  {
    title: "Limited Liability Protection",
    description: "Partners enjoy protection from personal liability for business debts and obligations.",
    icon: Shield,
  },
  {
    title: "Flexible Management Structure",
    description: "Streamlined decision-making with reduced bureaucratic overhead.",
    icon: Target,
  },
  {
    title: "Tax Efficiency",
    description: "Pass-through taxation eliminates double taxation on partnership income.",
    icon: Lightbulb,
  },
  {
    title: "Professional Credibility",
    description: "Enhanced reputation and trust in professional service markets.",
    icon: Users,
  },
]

export default function AboutPage() {
  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.sectionAltBg}>
        <div className={styles.container}>
          <div className={styles.heroTextBox}>
            <h1 className={styles.heroTitle}>About AEGIS LLP</h1>
            <p className={styles.heroDescription}>
              Understanding our Limited Liability Partnership structure and the philosophy that drives our collaborative
              approach to business excellence.
            </p>
          </div>
        </div>
      </section>

      {/* What is LLP Section */}
      <section className={styles.sectionPadding}>
        <div className={styles.container}>
          <div className={styles.twoColGrid}>
            <div>
              <h2 className={styles.sectionHeading}>What is a Limited Liability Partnership?</h2>
              <p className={styles.paragraph}>
                A Limited Liability Partnership (LLP) is a business structure that combines the flexibility of a
                partnership with the liability protection of a corporation. This innovative structure allows
                professional service providers to collaborate while maintaining individual protection.
              </p>
              <p className={styles.paragraph}>
                In Japan, LLPs provide a framework for businesses to pool resources, share expertise, and pursue joint
                ventures while maintaining operational independence and limiting personal liability exposure.
              </p>
              <Link
                href="https://www.meti.go.jp/english/policy/economy/corporate/llp.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Learn more from METI
                <ExternalLink className={styles.linkIcon} />
              </Link>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                 src="/aegis group 6.jpeg"
                alt="LLP Structure Diagram"
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
            <h2 className={styles.sectionHeading}>LLP Benefits & Advantages</h2>
            <p className={styles.subText}>
              Discover why the Limited Liability Partnership structure is ideal for professional service collaborations.
            </p>
          </div>

          <div className={styles.gridTwoCols}>
            {benefits.map((benefit) => (
              <div key={benefit.title} className={styles.card}>
                <div className={styles.cardIconWrapper}>
                  <benefit.icon className={styles.cardIcon} />
                </div>
                <h3 className={styles.cardTitle}>{benefit.title}</h3>
                <p className={styles.cardText}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className={styles.sectionPadding}>
        <div className={styles.container}>
          <div className={styles.sectionCenterTextBox}>
            <h2 className={styles.sectionHeading}>Our Philosophy & Purpose</h2>
          </div>

          <div className={styles.gridThreeCols}>
            <div className={styles.cardCenter}>
              <div className={styles.iconCircle}>
                <Shield className={styles.cardIconLarge} />
              </div>
              <h3 className={styles.cardTitle}>Trust</h3>
              <p className={styles.cardText}>
                Building lasting relationships through transparency, reliability, and unwavering professional
                integrity.
              </p>
            </div>

            <div className={styles.cardCenter}>
              <div className={styles.iconCircle}>
                <Lightbulb className={styles.cardIconLarge} />
              </div>
              <h3 className={styles.cardTitle}>Innovation</h3>
              <p className={styles.cardText}>
                Embracing cutting-edge solutions and fostering creative problem-solving across all member companies.
              </p>
            </div>

            <div className={styles.cardCenter}>
              <div className={styles.iconCircle}>
                <Users className={styles.cardIconLarge} />
              </div>
              <h3 className={styles.cardTitle}>Collaboration</h3>
              <p className={styles.cardText}>
                Creating synergies between diverse expertise to achieve collective success and mutual growth.
              </p>
            </div>
          </div>

          <div className={styles.quoteBox}>
            <p className={styles.quoteText}>
              "AEGIS LLP was founded on the principle that professional excellence is amplified through strategic
              collaboration. Our partnership structure enables member companies to maintain their unique identities
              while benefiting from shared resources, collective expertise, and expanded market opportunities."
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
