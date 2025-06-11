import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens/contracts';

export const section = style({
  backgroundColor: vars.color.white,
  paddingTop: vars.spacing['4xl'],
  paddingBottom: vars.spacing['4xl'],
});

export const container = style({
  maxWidth: '1280px',
  margin: '0 auto',
  padding: `0 ${vars.spacing.large}`,
});

export const headingBlock = style({
  textAlign: 'center',
  marginBottom: vars.spacing['4xl'],
});

export const title = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.slate900,
  marginBottom: vars.spacing.large,
});

export const description = style({
  fontSize: vars.fontSize.lg,
  color: vars.color.slate600,
  maxWidth: '640px',
  margin: '0 auto',
});

export const grid = style({
  display: 'grid',
  gap: vars.spacing.xl,
  gridTemplateColumns: '1fr',
  marginBottom: vars.spacing['3xl'],
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
});

export const card = style({
  backgroundColor: vars.color.slate50,
  padding: vars.spacing.xl,
  borderRadius: vars.radius.xl,
  boxShadow: vars.shadow.card,
  textAlign: 'center',
  transition: 'background-color 0.3s ease',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.white,
    },
  },
});

export const logo = style({
  marginBottom: vars.spacing.medium,
  height: '48px',
  width: 'auto',
  objectFit: 'contain',
});

export const name = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.slate900,
  marginBottom: vars.spacing.small,
});

export const specialty = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.slate600,
});

export const buttonWrapper = style({
  textAlign: 'center',
});
