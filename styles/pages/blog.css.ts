// blog.css.ts
import { style, globalStyle } from '@vanilla-extract/css'
import { vars } from '@/styles/tokens/contracts/index.css';

export const pageWrapper = style({
  minHeight: '100vh',
  backgroundColor: '#ffffff',
})

export const heroSection = style({
  backgroundColor: vars.color.slate50,
  padding: '4rem 0',
})

export const containerCustom = style({
  width: '100%',
  maxWidth: '1200px',
  padding: '0 1.5rem',
  margin: '0 auto',
})

export const heroContent = style({
  textAlign: 'center',
  maxWidth: '768px',
  margin: '0 auto',
})

export const heroTitle = style({
  fontSize: '2.25rem',
  fontWeight: 700,
  color: vars.color.slate900,
  marginBottom: '1.5rem',
})

export const heroText = style({
  fontSize: '1.25rem',
  color: vars.color.slate600,
  lineHeight: 1.75,
})

export const sectionPadding = style({
  padding: '4rem 0',
})

export const featuredBadge = style({
  display: 'inline-block',
  padding: '0.25rem 0.75rem',
  fontSize: '0.75rem',
  fontWeight: 500,
  backgroundColor: vars.color.slate900,
  color: '#ffffff',
  borderRadius: '9999px',
  marginBottom: '1rem',
})

export const categoryBadge = style({
  display: 'inline-block',
  padding: '0.25rem 0.75rem',
  fontSize: '0.75rem',
  fontWeight: 500,
  backgroundColor: vars.color.slate100,
  color: vars.color.slate700,
  borderRadius: '9999px',
  marginBottom: '1rem',
})

export const postGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '2rem',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
})

export const postCard = style({
  backgroundColor: '#fff',
  border: `1px solid ${vars.color.slate300}`,
  borderRadius: '0.75rem',
  overflow: 'hidden',
  transition: 'border-color 0.3s ease',
  selectors: {
    '&:hover': {
      borderColor: vars.color.slate300,
    },
  },
})

export const postImageWrapper = style({
  position: 'relative',
  maxWidth: '550px',
  margin: '0 auto',
  borderRadius: '0.75rem',
  overflow: 'hidden',
})

export const postContent = style({
  padding: '1.5rem',
})

export const postMeta = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: '0.875rem',
  color: vars.color.slate500,
  marginBottom: '0.75rem',
})

export const postTitle = style({
  fontSize: '1.125rem',
  fontWeight: 600,
  color: vars.color.slate900,
  marginBottom: '0.75rem',
})

export const postExcerpt = style({
  fontSize: '0.875rem',
  color: vars.color.slate600,
  lineHeight: 1.6,
  marginBottom: '1rem',
})

export const authorBlock = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '1rem',
})

export const authorInfo = style({
  display: 'flex',
  alignItems: 'center',
})

export const avatar = style({
  width: '2rem',
  height: '2rem',
  backgroundColor: vars.color.slate300,
  borderRadius: '9999px',
  marginRight: '0.5rem',
})

export const authorText = style({
  fontSize: '0.75rem',
  color: vars.color.slate600,
})

export const readMore = style({
  fontSize: '0.875rem',
  fontWeight: 500,
  color: vars.color.slate900,
  display: 'inline-flex',
  alignItems: 'center',
  transition: 'color 0.2s ease',
  selectors: {
    '&:hover': {
      color: vars.color.slate600,
    },
  },
})

export const featuredGrid = style({
  display: 'grid',
  gap: '3rem',
  gridTemplateColumns: '1fr',
  alignItems: 'center',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
})
