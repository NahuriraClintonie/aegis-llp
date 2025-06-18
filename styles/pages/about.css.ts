import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens/contracts/index.css';

// Layout containers
export const pageContainer = style({
  background: '#f9f9f9',
  color: '#1a1a1a',
  fontFamily: vars.font.body,
});

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: `${vars.spacing.large} ${vars.spacing.medium}`,
});

// Sections
export const sectionAltBg = style({
  background: '#f4f4f4',
  padding: `${vars.spacing['3xl']} 0`,
});

export const sectionPadding = style({
  padding: `${vars.spacing['3xl']} 0`,
});

export const sectionCenterTextBox = style({
  textAlign: 'center',
  marginBottom: vars.spacing['2xl'],
});

export const sectionHeading = style({
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.bold,
  fontFamily: vars.font.heading,
  color: '#1a1a1a',
  marginBottom: vars.spacing.medium,
});

export const subText = style({
  fontSize: vars.fontSize.md,
  color: '#555',
});

// Hero Section
export const heroTextBox = style({
  textAlign: 'center',
  padding: `${vars.spacing['2xl']} 0`,
});

export const heroTitle = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.bold,
  fontFamily: vars.font.heading,
  color: '#1a1a1a',
});

export const heroDescription = style({
  fontSize: vars.fontSize.lg,
  color: '#666',
  marginTop: vars.spacing.medium,
  maxWidth: '768px',
  marginInline: 'auto',
});

// Grid layouts
export const twoColGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: vars.spacing['2xl'],
  alignItems: 'center',
});

export const gridTwoCols = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: vars.spacing['2xl'],
  marginTop: vars.spacing['2xl'],
});

export const gridThreeCols = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.spacing['2xl'],
  marginTop: vars.spacing['2xl'],
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

// Image wrapper
export const imageWrapper = style({
  display: 'flex',
  justifyContent: 'center',
});

export const image = style({
  borderRadius: vars.radius.md,
  boxShadow: vars.shadow.card,
});

// Paragraph & Links
export const paragraph = style({
  fontSize: vars.fontSize.md,
  color: '#444',
  lineHeight: 1.6,
  marginBottom: vars.spacing.medium,
});

export const link = style({
  color: '#d4464a',
  fontWeight: vars.fontWeight.medium,
  textDecoration: 'underline',
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
  marginTop: vars.spacing.small,
});

export const linkIcon = style({
  width: '1rem',
  height: '1rem',
});

// Card styles
export const card = style({
  background: '#fff',
  border: `1px solid #e0e0e0`,
  borderRadius: '1rem',
  padding: vars.spacing.large,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.2s ease',
  selectors: {
    '&:hover': {
      transform: 'translateY(-4px)',
    },
  },
});

export const cardIconWrapper = style({
  background: '#ffe9ea',
  padding: vars.spacing.small,
  borderRadius: '50%',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: vars.spacing.small,
});

export const cardIcon = style({
  color: '#d4464a',
  width: '1.5rem',
  height: '1.5rem',
});

export const cardIconLarge = style({
  width: '2.5rem',
  height: '2.5rem',
  color: '#d4464a',
});

export const cardTitle = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  marginTop: vars.spacing.small,
  color: '#1a1a1a',
});

export const cardText = style({
  fontSize: vars.fontSize.md,
  color: '#555',
  marginTop: vars.spacing.xs,
});

// Centered card
export const cardCenter = style({
  textAlign: 'center',
  background: '#fff',
  border: `1px solid #e0e0e0`,
  padding: vars.spacing.large,
  borderRadius: vars.radius.lg,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.04)',
});

// Quote section
export const quoteBox = style({
  background: '#f0f0f0',
  padding: vars.spacing['2xl'],
  borderRadius: vars.radius.xl,
  marginTop: vars.spacing['2xl'],
});

export const quoteText = style({
  fontStyle: 'italic',
  fontSize: vars.fontSize.lg,
  color: '#666',
  lineHeight: 1.75,
  textAlign: 'center',
});

export const iconCircle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
  backgroundColor: '#ffe9ea',
  color: '#d4464a',
  marginBottom: vars.spacing.medium,
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
});
