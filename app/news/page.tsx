// NewsPage.tsx
import { Calendar, Tag, ArrowRight } from "lucide-react"
import Link from "next/link"
import * as styles from "@/styles/pages/news.css"

const newsCategories = ["All", "Partnership", "Growth", "Event", "Press Release", "Achievement"]

export const metadata = {
  title: "News & Press - AEGIS LLP",
  description:
    "Stay updated with the latest news, press releases, and formal announcements from AEGIS LLP and our member companies.",
}

const newsArticles = [
  {
    id: 1,
    title: "AEGIS LLP Announces Strategic Partnership with Leading Tech Firms",
    date: "2024-01-15",
    category: "Partnership",
    excerpt:
      "New collaboration aims to accelerate digital transformation initiatives across member companies, bringing together expertise in AI, cloud computing, and sustainable technology solutions.",
    readTime: "3 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Quarterly Innovation Summit Showcases Member Company Achievements",
    date: "2024-01-10",
    category: "Event",
    excerpt:
      "Annual gathering highlights breakthrough projects and collaborative successes, featuring presentations from all six member companies and their latest innovations.",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 3,
    title: "AEGIS LLP Expands Network with Three New Member Companies",
    date: "2024-01-05",
    category: "Growth",
    excerpt:
      "Strategic additions strengthen our capabilities in AI, sustainability, and design, bringing our total member company count to nine specialized firms.",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Recognition for Excellence in Professional Partnership Structure",
    date: "2023-12-20",
    category: "Achievement",
    excerpt:
      "AEGIS LLP receives industry recognition for innovative approach to Limited Liability Partnership management and member company collaboration.",
    readTime: "2 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Annual Report 2023: Year of Collaborative Growth",
    date: "2023-12-15",
    category: "Press Release",
    excerpt:
      "Comprehensive review of achievements, financial performance, and strategic initiatives across all member companies throughout 2023.",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 6,
    title: "New Sustainability Initiative Launched Across Member Companies",
    date: "2023-12-01",
    category: "Partnership",
    excerpt:
      "Comprehensive environmental responsibility program implemented to reduce carbon footprint and promote sustainable business practices.",
    readTime: "6 min read",
    featured: false,
  },
]

export default function NewsPage() {
  const featuredArticle = newsArticles.find((article) => article.featured)
  const regularArticles = newsArticles.filter((article) => !article.featured)

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>News & Press</h1>
            <p className={styles.heroSubtitle}>
              Stay informed with the latest developments, announcements, and achievements from AEGIS LLP and our member companies.
            </p>
          </div>
        </div>
      </section>

      {featuredArticle && (
        <section className={styles.sectionPadding}>
          <div className={styles.container}>
            <div className={styles.featuredBadgeWrapper}>
              <span className={styles.featuredBadge}>Featured</span>
            </div>
            <div className={styles.featuredArticleWrapper}>
              <div className={styles.featuredArticleContent}>
                <div className={styles.articleMeta}>
                  <Calendar className={styles.icon} />
                  <time dateTime={featuredArticle.date}>
                    {new Date(featuredArticle.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className={styles.dot}>•</span>
                  <Tag className={styles.icon} />
                  <span>{featuredArticle.category}</span>
                  <span className={styles.dot}>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <h2 className={styles.featuredTitle}>{featuredArticle.title}</h2>
                <p className={styles.featuredExcerpt}>{featuredArticle.excerpt}</p>
                <Link href={`/news/${featuredArticle.id}`} className={styles.btnPrimary}>
                  Read Full Article
                  <ArrowRight className={styles.iconMargin} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className={styles.filterSection}>
        <div className={styles.containerPadded}>
          <div className={styles.categoryFilterWrapper}>
            {newsCategories.map((category) => (
              <button key={category} className={styles.categoryButton}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionPadding}>
        <div className={styles.container}>
          <div className={styles.gridWrapper}>
            {regularArticles.map((article) => (
              <article key={article.id} className={styles.articleCard}>
                <div className={styles.articleMeta}>
                  <Calendar className={styles.icon} />
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className={styles.articleHeader}>
                  <span className={styles.categoryBadge}>{article.category}</span>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                </div>
                <p className={styles.articleExcerpt}>{article.excerpt}</p>
                <div className={styles.articleFooter}>
                  <span className={styles.readTime}>{article.readTime}</span>
                  <Link href={`/news/${article.id}`} className={styles.readMoreLink}>
                    Read more
                    <ArrowRight className={styles.iconMargin} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.loadMoreWrapper}>
            <button className={styles.btnSecondary}>Load More Articles</button>
          </div>
        </div>
      </section>
    </div>
  )
} 