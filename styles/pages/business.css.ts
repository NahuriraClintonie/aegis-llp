import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens/contracts/index.css';

// Wrapper for entire page
export const pageWrapper = style({
  minHeight: '100vh',
  backgroundColor: vars.color.white,
});

// Hero Section
export const heroSection = style({
  backgroundColor: vars.color.slate50,
  paddingTop: vars.spacing['4xl'],
  paddingBottom: vars.spacing['4xl'],
});

export const heroContainer = style({
  maxWidth: '64rem', // ~1024px
  margin: '0 auto',
  textAlign: 'center',
});

export const heroHeading = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.slate900,
  marginBottom: vars.spacing.large,
});

export const heroText = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.slate600,
  lineHeight: 1.75,
});

// Section (grid & filters)
export const section = style({
  paddingTop: vars.spacing['4xl'],
  paddingBottom: vars.spacing['4xl'],
});

export const container = style({
  maxWidth: '80rem', // ~1280px
  margin: '0 auto',
  paddingLeft: vars.spacing.large,
  paddingRight: vars.spacing.large,
});

// Category Filter Buttons
export const filterWrapper = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: vars.spacing.medium,
  marginBottom: vars.spacing['2xl'],
});

export const filterButton = style({
  padding: `${vars.spacing.small} ${vars.spacing.large}`,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.slate700,
  backgroundColor: vars.color.slate100,
  borderRadius: '9999px', // full rounded
  transition: 'background-color 0.2s ease',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.slate400,
    },
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${vars.color.focusRing}`,
    },
  },
});

// Companies Grid
export const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: vars.spacing['2xl'],
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
    },
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
});

// Company Card
export const card = style({
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  padding: vars.spacing['2xl'],
  boxShadow: vars.shadow.card,
  transition: 'border-color 0.3s ease, transform 0.3s ease',
  selectors: {
    '&:hover': {
      borderColor: vars.color.slate400,
    },
  },
});

export const logoWrapper = style({
  marginBottom: vars.spacing['2xl'],
});

export const categoryBadge = style({
  display: 'inline-block',
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.slate700,
  backgroundColor: vars.color.slate100,
  borderRadius: '9999px',
  padding: `${vars.spacing.xs} ${vars.spacing.medium}`,
  marginBottom: vars.spacing.medium,
});

export const companyName = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.slate900,
  marginBottom: vars.spacing.small,
});

export const specialty = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.slate600,
  marginBottom: vars.spacing.medium,
});

export const description = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.slate600,
  lineHeight: 1.75,
  marginBottom: vars.spacing['2xl'],
});

export const learnMoreLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.slate900,
  transition: 'color 0.2s ease, transform 0.2s ease',
  selectors: {
    '&:hover': {
      color: vars.color.slate600,
      transform: 'translateX(0.25rem)',
    },
  },
});

export const arrowIcon = style({
  width: '1rem',
  height: '1rem',
  marginLeft: vars.spacing.small,
});
