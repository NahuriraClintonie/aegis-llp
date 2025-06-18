import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens/contracts/index.css';

export const pageWrapper = style({
  minHeight: '100vh',
  backgroundColor: vars.color.brandRed,
});

export const heroSection = style({
  backgroundColor: vars.color.slate300,
  padding: `${vars.spacing['4xl']} ${vars.spacing.large}`,
});

export const containerCustom = style({
  maxWidth: '1280px',
  margin: '0 auto',
  padding: `0 ${vars.spacing.large}`,
});

export const heroContent = style({
  maxWidth: '64rem',
  margin: '0 auto',
  textAlign: 'center',
});

export const heroTitle = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.slate900,
  marginBottom: vars.spacing['2xl'],
});

export const heroText = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.slate600,
  lineHeight: 1.75,
});

export const sectionPadding = style({
  padding: `${vars.spacing['4xl']} ${vars.spacing.large}`,
});

export const categoryButtons = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: vars.spacing.large,
  marginBottom: vars.spacing['3xl'],
});

export const categoryButton = style({
  padding: `${vars.spacing.small} ${vars.spacing.large}`,
  borderRadius: '9999px',
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  backgroundColor: vars.color.slate100,
  color: vars.color.slate800,
  transition: 'background-color 0.2s ease-in-out',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.slate300,
    },
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${vars.color.focusRing}`,
    },
  },
});

export const companyGrid = style({
  display: 'grid',
  gap: vars.spacing['2xl'],
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
});

export const companyCard = style({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  backgroundColor: vars.color.white,
  borderRadius: vars.radius.xl,
  boxShadow: vars.shadow.card,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  selectors: {
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
    },
  },
});

export const cardImageWrapper = style({
  position: 'relative',
  width: '100%',
  height: '160px',
  overflow: 'hidden',
  borderTopLeftRadius: vars.radius.xl,
  borderTopRightRadius: vars.radius.xl,
});

export const cardImage = style({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

export const cardContent = style({
  padding: vars.spacing.xl,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.medium,
});

export const categoryBadge = style({
  alignSelf: 'flex-start',
  padding: `${vars.spacing.xs} ${vars.spacing.large}`,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  backgroundColor: vars.color.slate100,
  color: vars.color.slate800,
  borderRadius: '9999px',
});

export const companyName = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.slate900,
});

export const companySpecialty = style({
  color: vars.color.slate600,
  fontWeight: vars.fontWeight.medium,
  fontSize: vars.fontSize.sm,
});

export const companyDescription = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.slate500,
  lineHeight: 1.5,
});

export const learnMore = style({
  marginTop: vars.spacing.small,
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: '#2563eb', // Not in theme
  textDecoration: 'none',
  transition: 'color 0.2s ease-in-out',
  selectors: {
    '&:hover': {
      color: '#1d4ed8', // Not in theme
    },
  },
});

export const arrowIcon = style({
  height: '1rem',
  width: '1rem',
  marginLeft: vars.spacing.small,
});
