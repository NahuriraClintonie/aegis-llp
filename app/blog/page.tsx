import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import * as styles from "@/styles/pages/blog.css"

export const metadata: Metadata = {
  title: "Blog & Updates - AEGIS LLP",
  description:
    "Insights, reflections, and updates from our team. Explore our thoughts on partnership, innovation, and industry trends.",
}

const blogCategories = ["All", "Insights", "Team", "Industry", "Innovation", "Culture"]

const blogPosts = [
  {
    id: 1,
    title: "The Future of Professional Partnerships in Japan",
    excerpt:
      "Exploring how Limited Liability Partnerships are reshaping the professional services landscape and creating new opportunities for collaboration.",
    author: "Hiroshi Tanaka",
    authorRole: "Managing Partner",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Insights",
    image: "/member projects.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Building Trust in Digital Transformation",
    excerpt:
      "How our member companies are helping clients navigate the complexities of digital transformation while maintaining the human element.",
    author: "Yuki Sato",
    authorRole: "Innovation Lead",
    date: "2024-01-08",
    readTime: "5 min read",
    category: "Innovation",
    image: "/avatar 4.png",
    featured: false,
  },
  {
    id: 3,
    title: "Team Spotlight: Design Studio Zen's Minimalist Approach",
    excerpt:
      "An inside look at how our design partners create impactful solutions through the principles of simplicity and purposeful design.",
    author: "Kenji Nakamura",
    authorRole: "Creative Director",
    date: "2024-01-05",
    readTime: "4 min read",
    category: "Team",
    image: "/avatar 2.png",
    featured: false,
  },
  {
    id: 4,
    title: "Sustainable Innovation: More Than Just a Trend",
    excerpt:
      "Why sustainability isn't just good for the planet—it's essential for long-term business success and partnership growth.",
    author: "Akiko Yamamoto",
    authorRole: "Sustainability Advisor",
    date: "2024-01-02",
    readTime: "6 min read",
    category: "Industry",
    image: "/avatar 1.png",
    featured: false,
  },
  {
    id: 5,
    title: "Cultivating a Culture of Collaboration",
    excerpt:
      "How we foster meaningful connections between member companies and create an environment where innovation thrives.",
    author: "Takeshi Ito",
    authorRole: "Partnership Manager",
    date: "2023-12-28",
    readTime: "5 min read",
    category: "Culture",
    image: "/Image17.jpeg",
    featured: false,
  },
  {
    id: 6,
    title: "Year-End Reflections: Lessons from 2023",
    excerpt: "Looking back at the challenges, successes, and valuable lessons learned throughout our journey in 2023.",
    author: "Hiroshi Tanaka",
    authorRole: "Managing Partner",
    date: "2023-12-25",
    readTime: "8 min read",
    category: "Insights",
    image: "/Image18.jpeg",
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.containerCustom}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Blog & Updates</h1>
            <p className={styles.heroText}>
              Insights, reflections, and updates from our team. Explore our thoughts on partnership, innovation, and
              industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className={styles.sectionPadding}>
          <div className={styles.containerCustom}>
            <span className={styles.featuredBadge}>Featured Post</span>
            <div className={styles.featuredGrid}>
              <div>
                <div className={styles.postMeta}>
                  <Calendar size={16} />
                  <time dateTime={featuredPost.date}>
                    {new Date(featuredPost.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>•</span>
                  <Clock size={16} />
                  {featuredPost.readTime}
                </div>

                <span className={styles.categoryBadge}>{featuredPost.category}</span>

                <h2 className={styles.postTitle}>{featuredPost.title}</h2>

                <p className={styles.postExcerpt}>{featuredPost.excerpt}</p>

                <div className={styles.authorBlock}>
                  <div className={styles.authorInfo}>
                    <div className={styles.avatar}></div>
                    <div className={styles.authorText}>
                      <p>{featuredPost.author}</p>
                      <p>{featuredPost.authorRole}</p>
                    </div>
                  </div>
                </div>

                <Link href={`/blog/${featuredPost.id}`} className={styles.readMore}>
                  Read Full Post <ArrowRight size={16} style={{ marginLeft: "0.25rem" }} />
                </Link>
              </div>

              <div className={styles.postImageWrapper}>
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={500}
                  height={300}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className={styles.sectionPadding}>
        <div className={styles.containerCustom}>
          <div className={styles.postGrid}>
            {regularPosts.map((post) => (
              <article key={post.id} className={styles.postCard}>
                <div className={styles.postImageWrapper}>
                  <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    <Calendar size={16} style={{ marginRight: "0.5rem" }} />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <span className={styles.categoryBadge}>{post.category}</span>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>

                  <div className={styles.authorBlock}>
                    <div className={styles.authorInfo}>
                      <div className={styles.avatar}></div>
                      <div className={styles.authorText}>
                        <p>{post.author}</p>
                        <p>{post.authorRole}</p>
                      </div>
                    </div>
                    <span className={styles.authorText}>{post.readTime}</span>
                  </div>

                  <Link href={`/blog/${post.id}`} className={styles.readMore}>
                    Read more <ArrowRight size={16} style={{ marginLeft: "0.25rem" }} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
