// ContactPage.tsx
"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import Image from "next/image"
import * as styles from "@/styles/pages/contact.css"

const contactInfo = {
  email: "info@aegis-llp.com",
  phone: "+81-3-1234-5678",
  address: "Tokyo, Japan",
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setFormData({ name: "", email: "", company: "", message: "" })
    setIsSubmitting(false)
    alert("Thank you for your message. We will get back to you soon!")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.containerCustom}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Contact Us</h1>
            <p className={styles.heroText}>
              Get in touch with AEGIS LLP. We're here to answer your questions and explore potential collaboration opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionPadding}>
        <div className={styles.containerCustom}>
          <div className={styles.gridWrapper}>
            <div>
              <h2 className={styles.formTitle}>Send us a message</h2>
              <form onSubmit={handleSubmit} className={styles.formWrapper}>
                <div>
                  <label htmlFor="name" className={styles.label}>Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={styles.label}>Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className={styles.label}>Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Your company name (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className={styles.label}>Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    placeholder="Tell us about your inquiry or how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitButton}
                >
                  {isSubmitting ? (
                    <div className={styles.loader} />
                  ) : (
                    <>
                      Send Message
                      <Send className={styles.iconRight} />
                    </>
                  )}
                </button>
              </form>

              <div className={styles.noticeBox}>
                <p className={styles.noticeText}>
                  <strong>Privacy Notice:</strong> Your information will be handled in accordance with our privacy
                  policy. We will only use your contact details to respond to your inquiry.
                </p>
              </div>
            </div>

            <div>
              <h2 className={styles.formTitle}>Get in touch</h2>
              <div className={styles.contactInfoBox}>
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><Mail className={styles.infoIcon} /></div>
                  <div className={styles.infoText}><h3>Email</h3><p>{contactInfo.email}</p></div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><Phone className={styles.infoIcon} /></div>
                  <div className={styles.infoText}><h3>Phone</h3><p>{contactInfo.phone}</p></div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><MapPin className={styles.infoIcon} /></div>
                  <div className={styles.infoText}><h3>Location</h3><p>{contactInfo.address}</p></div>
                </div>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="AEGIS LLP Office"
                  width={500}
                  height={300}
                  className={styles.officeImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
