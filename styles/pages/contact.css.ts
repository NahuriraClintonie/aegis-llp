// contact.css.ts
import { style, styleVariants, globalStyle } from '@vanilla-extract/css'
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

export const gridWrapper = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '3rem',

  '@media': {
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
})

export const formTitle = style({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: vars.color.slate900,
  marginBottom: '1.5rem',
})

export const formWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const label = style({
  display: 'block',
  fontSize: '0.875rem',
  fontWeight: 500,
  color: vars.color.slate700,
  marginBottom: '0.5rem',
})

export const input = style({
  width: '100%',
  padding: '0.75rem 1rem',
  border: `1px solid ${vars.color.slate300}`,
  borderRadius: '0.5rem',
  transition: 'all 0.2s ease-in-out',
  selectors: {
    '&:focus': {
      borderColor: 'transparent',
      outline: 'none',
      boxShadow: `0 0 0 2px ${vars.color.slate900}`,
    },
  },
})

export const textarea = style([input, {
  resize: 'none',
}])

export const submitButton = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: vars.color.slate900,
  color: '#fff',
  padding: '0.75rem 1.25rem',
  borderRadius: '0.5rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'opacity 0.3s ease',

  selectors: {
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
})

export const iconRight = style({
  marginLeft: '0.5rem',
  width: '1rem',
  height: '1rem',
})

export const loader = style({
  width: '1.25rem',
  height: '1.25rem',
  borderBottom: '2px solid #fff',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
})

export const noticeBox = style({
  marginTop: '2rem',
  padding: '1rem',
  backgroundColor: vars.color.slate50,
  borderRadius: '0.5rem',
})

export const noticeText = style({
  fontSize: '0.875rem',
  color: vars.color.slate600,
})

export const contactInfoBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginBottom: '2rem',
})

export const infoItem = style({
  display: 'flex',
  alignItems: 'flex-start',
})

export const iconBox = style({
  flexShrink: 0,
  width: '3rem',
  height: '3rem',
  backgroundColor: vars.color.slate100,
  borderRadius: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const infoIcon = style({
  width: '1.5rem',
  height: '1.5rem',
  color: vars.color.slate700,
})

export const infoText = style({
  marginLeft: '1rem',
})

export const imageWrapper = style({
  borderRadius: '0.75rem',
  overflow: 'hidden',
})

export const officeImage = style({
  width: '100%',
  height: '16rem',
  objectFit: 'cover',
})

// Styles for elements inside .infoText
globalStyle(`${infoText} h3`, {
  fontSize: '1.125rem',
  fontWeight: 600,
  color: vars.color.slate900,
  marginBottom: '0.25rem',
})

globalStyle(`${infoText} p`, {
  color: vars.color.slate600,
})