"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, MapPin, Send } from "lucide-react"
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((res) => setTimeout(res, 1000))
    alert("Thanks for contacting AEGIS LLP. We'll be in touch shortly!")
    setFormData({ name: "", email: "", company: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroHeading}>Contact Us</h1>
        <p className={styles.heroText}>
          Get in touch with AEGIS LLP. We're here to answer your questions and explore opportunities.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className={styles.section}>
        <div className={styles.formContainer}>
          {/* Form */}
          <div>
            <h2 className={styles.formTitle}>Send us a message</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              {[
                { id: "name", label: "Name", required: true },
                { id: "email", label: "Email", required: true, type: "email" },
                { id: "company", label: "Company", required: false },
              ].map(({ id, label, required, type = "text" }) => (
                <div key={id} className={styles.inputGroup}>
                  <label htmlFor={id} className={styles.label}>
                    {label} {required && "*"}
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    required={required}
                    value={(formData as any)[id]}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className={styles.label}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={6}
                />
              </div>

              <button type="submit" className={styles.button} disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : <>Send Message <Send size={16} style={{ marginLeft: "0.5rem" }} /></>}
              </button>

              <div className={styles.privacyNotice}>
                We value your privacy. Your contact information will only be used to respond to your message.
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className={styles.infoTitle}>Get in touch</h2>
            {[{
              icon: <Mail size={20} />,
              label: "Email",
              value: contactInfo.email,
            }, {
              icon: <Phone size={20} />,
              label: "Phone",
              value: contactInfo.phone,
            }, {
              icon: <MapPin size={20} />,
              label: "Address",
              value: contactInfo.address,
            }].map(({ icon, label, value }) => (
              <div key={label} className={styles.infoItem}>
                <div className={styles.infoIcon}>{icon}</div>
                <div>
                  <div className={styles.infoLabel}>{label}</div>
                  <div className={styles.infoText}>{value}</div>
                </div>
              </div>
            ))}

            <div className={styles.imageWrapper} style={{ marginTop: "2rem" }}>
              <Image
                src="/placeholder.svg?width=600&height=300"
                alt="Office Image"
                width={600}
                height={300}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
