// NewsPage.css.ts
import { style, styleVariants } from "@vanilla-extract/css"
import { vars } from '@/styles/tokens/contracts/index.css';

export const pageWrapper = style({
  minHeight: "100vh",
  backgroundColor: "white",
})

export const sectionPadding = style({
  padding: "4rem 0",
})

export const container = style({
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "0 1.5rem",
})

export const containerPadded = style({
  padding: "2rem 1.5rem",
  margin: "0 auto",
  maxWidth: "1280px",
})

export const heroSection = style({
  backgroundColor: vars.color.slate50,
  padding: "4rem 0",
})

export const heroContent = style({
  maxWidth: "896px",
  margin: "0 auto",
  textAlign: "center",
})

export const heroTitle = style({
  fontSize: "2.25rem",
  fontWeight: 700,
  color: vars.color.slate900,
  marginBottom: "1.5rem",
})

export const heroSubtitle = style({
  fontSize: "1.25rem",
  color: vars.color.slate600,
  lineHeight: 1.6,
})

export const featuredBadgeWrapper = style({
  marginBottom: "2rem",
})

export const featuredBadge = style({
  display: "inline-block",
  padding: "0.25rem 0.75rem",
  fontSize: "0.75rem",
  fontWeight: 500,
  backgroundColor: vars.color.slate900,
  color: "white",
  borderRadius: "9999px",
  marginBottom: "1rem",
})

export const featuredArticleWrapper = style({
  backgroundColor: vars.color.slate50,
  borderRadius: "1rem",
  padding: "3rem",
})

export const featuredArticleContent = style({
  maxWidth: "896px",
})

export const articleMeta = style({
  display: "flex",
  alignItems: "center",
  fontSize: "0.875rem",
  color: vars.color.slate500,
  marginBottom: "1rem",
})

export const dot = style({
  margin: "0 0.5rem",
})

export const icon = style({
  width: "1rem",
  height: "1rem",
  marginRight: "0.5rem",
})

export const iconMargin = style({
  width: "1rem",
  height: "1rem",
  marginLeft: "0.5rem",
})

export const featuredTitle = style({
  fontSize: "1.875rem",
  fontWeight: 700,
  color: vars.color.slate900,
  marginBottom: "1.5rem",
})

export const featuredExcerpt = style({
  fontSize: "1.125rem",
  color: vars.color.slate600,
  lineHeight: 1.7,
  marginBottom: "2rem",
})

export const btnPrimary = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "0.75rem 1.25rem",
  fontWeight: 500,
  backgroundColor: vars.color.slate900,
  color: "white",
  borderRadius: "0.5rem",
  textDecoration: "none",
})

export const filterSection = style({
  borderTop: `1px solid ${vars.color.slate300}`,
})

export const categoryFilterWrapper = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1rem",
})

export const categoryButton = style({
  padding: "0.5rem 1rem",
  borderRadius: "9999px",
  fontSize: "0.875rem",
  fontWeight: 500,
  backgroundColor: vars.color.slate100,
  color: vars.color.slate700,
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.slate300,
    },
    '&:focus': {
      outline: "none",
      boxShadow: `0 0 0 2px ${vars.color.slate900}`,
    },
  },
  transition: "background-color 0.2s ease-in-out",
})

export const gridWrapper = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "2rem",
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
})

export const articleCard = style({
  backgroundColor: "white",
  border: `1px solid ${vars.color.slate300}`,
  borderRadius: "0.75rem",
  padding: "1.5rem",
  transition: "border 0.3s ease",
  selectors: {
    '&:hover': {
      borderColor: vars.color.slate300,
    },
  },
})

export const articleHeader = style({
  marginBottom: "1rem",
})

export const categoryBadge = style({
  display: "inline-block",
  padding: "0.25rem 0.75rem",
  fontSize: "0.75rem",
  fontWeight: 500,
  backgroundColor: vars.color.slate100,
  color: vars.color.slate700,
  borderRadius: "9999px",
  marginBottom: "0.75rem",
})

export const articleTitle = style({
  fontSize: "1.125rem",
  fontWeight: 600,
  color: vars.color.slate900,
  marginBottom: "0.75rem",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
})

export const articleExcerpt = style({
  fontSize: "0.875rem",
  color: vars.color.slate600,
  lineHeight: 1.6,
  marginBottom: "1rem",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
})

export const articleFooter = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

export const readTime = style({
  fontSize: "0.75rem",
  color: vars.color.slate500,
})

export const readMoreLink = style({
  display: "inline-flex",
  alignItems: "center",
  fontSize: "0.875rem",
  fontWeight: 500,
  color: vars.color.slate900,
  textDecoration: "none",
  selectors: {
    '&:hover': {
      color: vars.color.slate600,
    },
  },
})

export const loadMoreWrapper = style({
  textAlign: "center",
  marginTop: "3rem",
})

export const btnSecondary = style({
  padding: "0.75rem 1.5rem",
  fontWeight: 500,
  backgroundColor: vars.color.slate100,
  color: vars.color.slate900,
  borderRadius: "0.5rem",
  border: "none",
  cursor: "pointer",
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.slate300,
    },
  },
})
