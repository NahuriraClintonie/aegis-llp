"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Clock, Users, Send, Download } from "lucide-react"
import * as styles from "@/styles/pages/careers.css"

const jobOpenings = [
  {
    id: 1,
    title: "Senior Partnership Manager",
    location: "Tokyo, Japan",
    type: "Full-time",
    department: "Business Development",
    description:
      "Lead strategic partnerships and foster collaboration between member companies. Drive growth initiatives and manage key client relationships.",
    requirements: [
      "5+ years experience in partnership management or business development",
      "Strong communication skills in Japanese and English",
      "Experience in professional services or consulting",
      "MBA or equivalent business qualification preferred",
    ],
    responsibilities: [
      "Develop and maintain strategic partnerships",
      "Coordinate collaboration between member companies",
      "Identify new business opportunities",
      "Manage client relationships and ensure satisfaction",
    ],
    posted: "2024-01-10",
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    location: "Tokyo, Japan / Remote",
    type: "Full-time",
    department: "Marketing",
    description:
      "Drive digital marketing initiatives across member companies. Develop comprehensive marketing strategies and manage online presence.",
    requirements: [
      "3+ years experience in digital marketing",
      "Proficiency in marketing automation tools",
      "Strong analytical and data-driven mindset",
      "Experience with B2B marketing preferred",
    ],
    responsibilities: [
      "Develop and execute digital marketing campaigns",
      "Manage social media and content marketing",
      "Analyze marketing performance and ROI",
      "Coordinate marketing efforts across member companies",
    ],
    posted: "2024-01-08",
  },
  {
    id: 3,
    title: "Operations Coordinator",
    location: "Tokyo, Japan",
    type: "Full-time",
    department: "Operations",
    description:
      "Support daily operations and ensure smooth coordination between member companies. Manage administrative processes and improve operational efficiency.",
    requirements: [
      "2+ years experience in operations or administration",
      "Strong organizational and project management skills",
      "Proficiency in Microsoft Office and project management tools",
      "Detail-oriented with excellent communication skills",
    ],
    responsibilities: [
      "Coordinate operations between member companies",
      "Manage administrative processes and documentation",
      "Support project management and scheduling",
      "Maintain operational efficiency and quality standards",
    ],
    posted: "2024-01-05",
  },
  {
    id: 4,
    title: "Financial Analyst",
    location: "Tokyo, Japan",
    type: "Full-time",
    department: "Finance",
    description:
      "Provide financial analysis and support for LLP operations. Manage financial reporting and assist with strategic financial planning.",
    requirements: [
      "Bachelor's degree in Finance, Accounting, or related field",
      "2+ years experience in financial analysis",
      "Strong Excel and financial modeling skills",
      "CPA or similar certification preferred",
    ],
    responsibilities: [
      "Prepare financial reports and analysis",
      "Support budgeting and forecasting processes",
      "Monitor financial performance across member companies",
      "Assist with financial planning and strategy",
    ],
    posted: "2024-01-03",
  },
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
  })

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Thank you for your application. We will review it and get back to you soon!")
    setApplicationForm({
      name: "",
      email: "",
      phone: "",
      position: "",
      coverLetter: "",
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className={styles.sectionPadding}>
      {/* Hero Section */}
      {/* Hero Section */}
        <section className={` ${styles.bgWhite}`}>
        <div className={styles.containerCustom}>
            <div className={`${styles.textAlign} ${styles.maxWidth4xl} ${styles.mxAuto}`}>
            <h1 className={`${styles.h1Text} ${styles.h1MdText} ${styles.h1FontBold} ${styles.h1TextColor} ${styles.h1MarginBottom}`}>
                Join Our Team
            </h1>
            <p className={`${styles.pTextXl} ${styles.pTextColor} ${styles.pLeadingRelaxed} ${styles.pMarginBottom}`}>
                Be part of a dynamic partnership that values innovation, collaboration, and professional excellence.
                Discover opportunities to grow your career while making a meaningful impact.
            </p>
            <div className={`${styles.gridCols1} ${styles.mdGridCols3} ${styles.gap8} ${styles.marginTop12}`}>
                <div className={styles.divTextAlign}>
                <div className={`${styles.divInlineFlex} ${styles.divItemsCenter} ${styles.divJustifyCenter} ${styles.divW16} ${styles.divH16} ${styles.divBgSlate100} ${styles.divRoundedFull} ${styles.divMarginBottom4}`}>
                    <Users className={`${styles.iconH8W8} ${styles.iconTextSlate700}`} />
                </div>
                <h3 className={`${styles.h3TextLg} ${styles.h3FontSemibold} ${styles.h3TextColor} ${styles.h3MarginBottom2}`}>
                    Collaborative Culture
                </h3>
                <p className={`${styles.textSm} ${styles.textSlate600}`}>
                    Work alongside talented professionals from diverse member companies
                </p>
                </div>
                <div className={styles.divTextAlign}>
                <div className={`${styles.divInlineFlex} ${styles.divItemsCenter} ${styles.divJustifyCenter} ${styles.divW16} ${styles.divH16} ${styles.divBgSlate100} ${styles.divRoundedFull} ${styles.divMarginBottom4}`}>
                    <Clock className={`${styles.iconH8W8} ${styles.iconTextSlate700}`} />
                </div>
                <h3 className={`${styles.h3TextLg} ${styles.h3FontSemibold} ${styles.h3TextColor} ${styles.h3MarginBottom2}`}>
                    Work-Life Balance
                </h3>
                <p className={`${styles.textSm} ${styles.textSlate600}`}>
                    Flexible working arrangements and respect for personal time
                </p>
                </div>
                <div className={styles.divTextAlign}>
                <div className={`${styles.divInlineFlex} ${styles.divItemsCenter} ${styles.divJustifyCenter} ${styles.divW16} ${styles.divH16} ${styles.divBgSlate100} ${styles.divRoundedFull} ${styles.divMarginBottom4}`}>
                    <MapPin className={`${styles.iconH8W8} ${styles.iconTextSlate700}`} />
                </div>
                <h3 className={`${styles.h3TextLg} ${styles.h3FontSemibold} ${styles.h3TextColor} ${styles.h3MarginBottom2}`}>
                    Prime Location
                </h3>
                <p className={`${styles.textSm} ${styles.textSlate600}`}>
                    Modern office space in the heart of Tokyo with excellent connectivity
                </p>
                </div>
            </div>
            </div>
        </div>
        </section>

        {/* Job Openings */}
        <section className={`${styles.sectionPadding} ${styles.bgSlate50}`}>
        <div className={styles.containerCustom}>
            <div className={styles.textCenterMb12}>
            <h2 className={`${styles.h2Text3xl} ${styles.h2MdText4xl} ${styles.h2FontBold} ${styles.h2TextColor} ${styles.h2Mb6}`}>
                Current Openings
            </h2>
            <p className={`${styles.pTextLg} ${styles.pTextSlate600Mb}`}>
                Explore our current job opportunities and find the perfect role to advance your career.
            </p>
            </div>

            <div className={`${styles.gridCols1} ${styles.lgGridCols2} ${styles.gap8}`}>
            {jobOpenings.map((job) => (
                <div key={job.id} className={`${styles.jobCard} ${styles.jobCardHover}`}>
                <div className={`${styles.flex} ${styles.flexJustifyBetween} ${styles.itemsStartMb4}`}>
                    <div className={styles.flex11}>
                    <h3 className={`${styles.h3TextXl} ${styles.h3FontSemiboldMb2}`}>{job.title}</h3>
                    <div className={`${styles.flex} ${styles.flexItemsCenter} ${styles.textSm} ${styles.textSlate600Mb2}`}>
                        <MapPin className={`${styles.iconH4W4} ${styles.mr1}`} />
                        <span>{job.location}</span>
                        <span className={styles.mx2}>•</span>
                        <span>{job.type}</span>
                    </div>
                    <span className={`${styles.inlineBlock} ${styles.px3} ${styles.py1} ${styles.textXs} ${styles.fontMedium} ${styles.bgSlate100} ${styles.textSlate700} ${styles.roundedFull}`}>
                        {job.department}
                    </span>
                    </div>
                    <span className={`${styles.textXsTextSlate500}`}>
                    Posted {new Date(job.posted).toLocaleDateString()}
                    </span>
                </div>

                <p className={`${styles.pTextSlate600TextSm} ${styles.leadingRelaxedMb6}`}>
                    {job.description}
                </p>

                <div className={`${styles.flex} ${styles.flexCol} ${styles.smFlexRow} ${styles.gap3}`}>
                    <button
                    onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                    className={`${styles.btnSecondary} ${styles.flex1}`}
                    >
                    {selectedJob === job.id ? "Hide Details" : "View Details"}
                    </button>
                    <button
                    onClick={() => {
                        setApplicationForm((prev) => ({ ...prev, position: job.title }))
                        document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className={`${styles.btnPrimary} ${styles.flex1}`}
                    >
                    Apply Now
                    </button>
                </div>

                {/* Job Details */}
                {selectedJob === job.id && (
                    <div className={styles.jobDetailsSection}>
                    <div className={`${styles.gridCols1MdGridCols2} ${styles.gap6}`}>
                        <div>
                        <h4 className={`${styles.h4FontSemibold} ${styles.h4TextSlate900} ${styles.h4Mb3}`}>
                            Requirements
                        </h4>
                        <ul className={styles.spaceY2}>
                            {job.requirements.map((req, index) => (
                            <li key={index} className={`${styles.textSmTextSlate600} ${styles.flex} ${styles.flexItemsStart}`}>
                                <span className={`${styles.spanW1_5} ${styles.spanH1_5} ${styles.spanBgSlate400} ${styles.spanRoundedFull} ${styles.spanMt2} ${styles.spanMr3} ${styles.spanFlexShrink0}`}></span>
                                {req}
                            </li>
                            ))}
                        </ul>
                        </div>
                        <div>
                        <h4 className={`${styles.h4FontSemibold} ${styles.h4TextSlate900} ${styles.h4Mb3}`}>
                            Responsibilities
                        </h4>
                        <ul className={styles.spaceY2}>
                            {job.responsibilities.map((resp, index) => (
                            <li key={index} className={`${styles.textSmTextSlate600} ${styles.flex} ${styles.flexItemsStart}`}>
                                <span className={`${styles.spanW1_5} ${styles.spanH1_5} ${styles.spanBgSlate400} ${styles.spanRoundedFull} ${styles.spanMt2} ${styles.spanMr3} ${styles.spanFlexShrink0}`}></span>
                                {resp}
                            </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                    </div>
                )}
                </div>
            ))}
            </div>
        </div>
        </section>

      {/* Application Form */}
        <section id="application-form" className={styles.applicationFormBg}>
        <div className={styles.containerCustom}>
            <div className={styles.applicationFormMaxW2xl}>
            <div className={styles.applicationFormMxAuto}>
                <div className={styles.applicationFormTextCenterMb8}>
                <h2 className={styles.applicationFormH2}>Apply for a Position</h2>
                <p className={styles.applicationFormP}>
                    Ready to join our team? Submit your application and we'll get back to you soon.
                </p>
                </div>

                <div className={styles.applicationFormCard}>
                <form onSubmit={handleApplicationSubmit} className={styles.applicationFormSpaceY6}>
                    <div className={`${styles.applicationFormGridCols1} ${styles.applicationFormMdGridCols2} ${styles.applicationFormGap6}`}>
                    <div>
                        <label htmlFor="name" className={styles.applicationFormLabel}>
                        Full Name *
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={applicationForm.name}
                        onChange={handleInputChange}
                        className={styles.applicationFormInput}
                        placeholder="Your full name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className={styles.applicationFormLabel}>
                        Email Address *
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={applicationForm.email}
                        onChange={handleInputChange}
                        className={styles.applicationFormInput}
                        placeholder="your.email@example.com"
                        />
                    </div>
                    </div>

                    <div className={`${styles.applicationFormGridCols1} ${styles.applicationFormMdGridCols2} ${styles.applicationFormGap6}`}>
                    <div>
                        <label htmlFor="phone" className={styles.applicationFormLabel}>
                        Phone Number
                        </label>
                        <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={applicationForm.phone}
                        onChange={handleInputChange}
                        className={styles.applicationFormInput}
                        placeholder="+81-XX-XXXX-XXXX"
                        />
                    </div>

                    <div>
                        <label htmlFor="position" className={styles.applicationFormLabel}>
                        Position *
                        </label>
                        <select
                        id="position"
                        name="position"
                        required
                        value={applicationForm.position}
                        onChange={handleInputChange}
                        className={styles.applicationFormSelect}
                        >
                        <option value="">Select a position</option>
                        {jobOpenings.map((job) => (
                            <option key={job.id} value={job.title}>
                            {job.title}
                            </option>
                        ))}
                        </select>
                    </div>
                    </div>

                    <div>
                    <label htmlFor="coverLetter" className={styles.applicationFormLabel}>
                        Cover Letter *
                    </label>
                    <textarea
                        id="coverLetter"
                        name="coverLetter"
                        required
                        rows={6}
                        value={applicationForm.coverLetter}
                        onChange={handleInputChange}
                        className={styles.applicationFormTextArea}
                        placeholder="Tell us why you're interested in this position and what you can bring to our team..."
                    />
                    </div>

                    <div className={styles.applicationFormBtnContainer}>
                    <button type="submit" className={styles.btnPrimary}>
                        Submit Application
                        <Send className={`${styles.iconH8W8} ${styles.ml2}`} />
                    </button>
                    <button type="button" className={styles.btnSecondary}>
                        <Download className={`${styles.iconH8W8} ${styles.mr2}`} />
                        Upload Resume
                    </button>
                    </div>
                </form>

                <div className={styles.applicationFormNoteContainer}>
                    <p className={styles.applicationFormNoteText}>
                    <strong>Note:</strong> We are an equal opportunity employer committed to diversity and inclusion. All
                    qualified applicants will receive consideration regardless of race, gender, age, religion, sexual
                    orientation, or disability status.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

        {/* Company Culture */}
        <section className={`${styles.sectionPadding} ${styles.bgWhite}`}>
        <div className={styles.containerCustom}>
            <div className={`${styles.textCenterMb12}`}>
            <h2 className={`${styles.companyCultureH2} ${styles.h2MdText4xl} ${styles.h2FontBold} ${styles.h2TextColor} ${styles.h2Mb6}`}>
                Why Join AEGIS LLP?
            </h2>
            <p className={`${styles.companyCultureP} ${styles.pTextLg}`}>
                Discover what makes our workplace special and why our team members love being part of the AEGIS family.
            </p>
            </div>

            <div className={`${styles.companyCultureGrid} ${styles.gap6}`}>
            <div>
                <div className={styles.companyCultureCard}>
                <h3 className={`${styles.companyCultureCardH3} ${styles.h3FontSemibold} ${styles.h3TextColor} ${styles.h3MarginBottom2}`}>
                    Professional Development
                </h3>
                <p className={`${styles.companyCultureCardP} ${styles.leadingRelaxed}`}>
                    Continuous learning opportunities, mentorship programs, and support for professional certifications.
                </p>
                </div>
            </div>

            <div>
                <div className={styles.companyCultureCard}>
                <h3 className={`${styles.companyCultureCardH3} ${styles.h3FontSemibold} ${styles.h3TextColor} ${styles.h3MarginBottom2}`}>
                    Competitive Benefits
                </h3>
                <p className={`${styles.companyCultureCardP} ${styles.leadingRelaxed}`}>
                    Comprehensive health insurance, retirement plans, and performance-based bonuses.
                </p>
                </div>
            </div>

            <div>
                <div className={styles.companyCultureCard}>
                <h3 className={`${styles.companyCultureCardH3} ${styles.h3FontSemibold} ${styles.h3TextColor} ${styles.h3MarginBottom2}`}>
                    Innovation Focus
                </h3>
                <p className={`${styles.companyCultureCardP} ${styles.leadingRelaxed}`}>
                    Work on cutting-edge projects and contribute to innovative solutions across member companies.
                </p>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}