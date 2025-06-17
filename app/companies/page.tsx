import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import * as styles from "@/styles/pages/business.css"

export const metadata: Metadata = {
  title: "Member Companies - AEGIS LLP",
  description:
    "Explore our diverse network of member companies, each bringing unique expertise and innovative solutions.",
}

const companies = [
  {
    id: 1,
    name: "TechFlow Solutions",
    specialty: "Digital Transformation & AI",
    description: "Leading digital transformation initiatives with cutting-edge AI and automation solutions.",
    logo: "/placeholder.svg?height=80&width=200",
    category: "Technology",
  },
  {
    id: 2,
    name: "Design Studio Zen",
    specialty: "UX/UI Design & Branding",
    description: "Creating exceptional user experiences through minimalist design and strategic branding.",
    logo: "/placeholder.svg?height=80&width=200",
    category: "Design",
  },
  {
    id: 3,
    name: "Quantum Analytics",
    specialty: "Data Science & Analytics",
    description: "Transforming complex data into actionable insights for strategic decision-making.",
    logo: "/placeholder.svg?height=80&width=200",
    category: "Analytics",
  },
  {
    id: 4,
    name: "Green Energy Co.",
    specialty: "Sustainable Technology",
    description: "Pioneering sustainable energy solutions for a cleaner, more efficient future.",
    logo: "/placeholder.svg?height=80&width=200",
    category: "Sustainability",
  },
  {
    id: 5,
    name: "CloudSecure Systems",
    specialty: "Cybersecurity & Cloud",
    description: "Protecting digital assets with advanced cybersecurity and cloud infrastructure solutions.",
    logo: "/placeholder.svg?height=80&width=200",
    category: "Security",
  },
  {
    id: 6,
    name: "Innovation Labs",
    specialty: "R&D & Prototyping",
    description: "Accelerating innovation through rapid prototyping and research & development services.",
    logo: "/placeholder.svg?height=80&width=200",
    category: "Research",
  },
]

const categories = ["All", "Technology", "Design", "Analytics", "Sustainability", "Security", "Research"]

export default function CompaniesPage() {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.containerCustom}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Our Member Companies</h1>
            <p className={styles.heroText}>
              Discover the diverse expertise and innovative solutions offered by our carefully selected network of
              professional partner companies.
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
                <div className={styles.logoWrapper}>
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    width={200}
                    height={80}
                    className={styles.companyLogo}
                  />
                </div>

                <div className={styles.companyInfo}>
                  <span className={styles.categoryBadge}>{company.category}</span>
                  <h3 className={styles.companyName}>{company.name}</h3>
                  <p className={styles.companySpecialty}>{company.specialty}</p>
                </div>

                <p className={styles.companyDescription}>{company.description}</p>

                <Link href={`/companies/${company.id}`} className={styles.learnMore}>
                  Learn more
                  <ArrowRight className={styles.arrowIcon} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
