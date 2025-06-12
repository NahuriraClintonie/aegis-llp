import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens/contracts/index.css';

export const section = style({
  background: vars.color.slate300,
  padding: '2rem 1rem',
});

export const container = style({
  maxWidth: '72rem',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.medium,
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
});

export const heading = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
  marginBottom: '0.5rem',
});

export const subheading = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.secondary,
});

export const buttonDesktop = style({
  display: 'none',
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'inline-block',
    },
  },
});

export const buttonMobile = style({
  display: 'block',
  textAlign: 'center',
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none',
    },
  },
});

export const grid = style({
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: '1fr',
});

export const card = style({
  background: vars.color.white,
  borderRadius: vars.radius.md,
  boxShadow: vars.shadow.card,
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
  '@media': {
    'screen and (max-width: 767px)': {
      flexDirection: 'column',
    },
  },
});

export const imageWrapper = style({
  flexShrink: 0,
  width: '200px',
  height: '100%',
  position: 'relative',
  '@media': {
    'screen and (max-width: 767px)': {
      width: '100%',
      height: '200px',
    },
  },
});

export const content = style({
  padding: vars.spacing.large,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '1rem',
});

export const meta = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: vars.color.text,
  fontSize: vars.fontSize.sm,
  flexWrap: 'wrap',
});

export const icon = style({
  width: '1rem',
  height: '1rem',
});

export const category = style({
  backgroundColor: vars.color.background,
  color: vars.color.text,
  padding: '0.1rem 0.5rem',
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
});

export const title = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text,
});

export const excerpt = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text,
});

export const readMore = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.primary,
  textDecoration: 'none',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});
