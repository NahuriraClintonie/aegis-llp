// newsPreview.css.ts
import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/tokens/contracts/index.css'

// Main Section
export const section = style({
  position: 'relative',
  margin: '0rem 3rem',
  padding: '3rem 1rem',
  overflow: 'hidden',
  zIndex: 0,

  // Clip background strictly to this section
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'url("/background 7.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      filter: 'brightness(0.5)', // dim it slightly
      zIndex: -1,
    },
  },
})


// FLEX CONTAINER with fixed column layout
export const container = style({
  maxWidth: '72rem',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '2rem',

  // Stack vertically on small screens
  '@media': {
    'screen and (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
})

// LEFT SECTION: 40%
export const leftSection = style({
  flex: '0 0 40%',
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  color: vars.color.white,
  padding: '2rem',
  borderRadius: vars.radius.md,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',

  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
})

export const latestHeading = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  marginBottom: '1rem',
  color: vars.color.white,
})

export const latestText = style({
  fontSize: vars.fontSize.sm,
  lineHeight: '1.6',
  color: vars.color.white,
})

// Right Section
export const rightSection = style({
  width: '60%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
})

// News Card
export const newsCard = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',
  backgroundColor: vars.color.slate100,
  padding: '1rem',
  borderRadius: '0.5rem',
  color: vars.color.text,
})

export const cardContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  flex: 1,
})

// Category and Date
export const cardMeta = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text,
})

export const cardCategory = style({
  color: vars.color.primary,
  fontWeight: vars.fontWeight.bold,
})

export const separator = style({
  color: vars.color.text,
})

export const cardDate = style({
  color: vars.color.secondary,
})

// Excerpt + Arrow wrapper
export const cardExcerptWrapper = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.5rem',
})

// Excerpt text
export const cardExcerpt = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text,
  lineHeight: '1.5',
  flex: 1,
})

export const arrowIcon = style({
  width: '1.25rem',
  height: '1.25rem',
  color: vars.color.primary,
})


// Invisible clickable area
export const arrowLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  flexShrink: 0,
  paddingLeft: '0.5rem',
  transition: 'transform 0.2s ease-in-out',
  selectors: {
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
})

