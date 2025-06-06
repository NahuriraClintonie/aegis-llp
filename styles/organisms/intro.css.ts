// styles/organisms/intro.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens/index.css';

export const section = style({
  backgroundColor: vars.color.slate50,
  paddingTop: vars.spacing['5xl'],
  paddingBottom: vars.spacing['5xl'],
});

export const header = style({
  maxWidth: '48rem', // Tailwind's max-w-3xl
  margin: '0 auto',
  textAlign: 'center',
  marginBottom: vars.spacing['4xl'],
});

export const title = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.slate900,
  marginBottom: vars.spacing.large,
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: vars.fontSize['2xl'],
    },
  },
});

export const subtitle = style({
  fontSize: '1.125rem', // text-lg
  color: vars.color.slate600,
  lineHeight: 1.75,
});

export const grid = style({
  display: 'grid',
  gap: vars.spacing['3xl'],
  gridTemplateColumns: '1fr',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});

export const card = style({
  backgroundColor: vars.color.white,
  padding: vars.spacing['3xl'],
  borderRadius: vars.radius.xl,
  textAlign: 'center',
  boxShadow: vars.shadow.card,
});

export const iconWrapper = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '4rem',
  height: '4rem',
  backgroundColor: vars.color.slate100,
  borderRadius: '9999px',
  marginBottom: vars.spacing['2xl'],
});

export const icon = style({
  width: '2rem',
  height: '2rem',
  color: vars.color.slate700,
});

export const cardTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.slate900,
  marginBottom: vars.spacing.large,
});

export const cardText = style({
  color: vars.color.slate600,
  lineHeight: 1.75,
});
