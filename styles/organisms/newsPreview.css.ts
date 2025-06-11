import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens/contracts/index.css';

export const section = style({
  backgroundColor: vars.color.slate50,
  paddingTop: vars.spacing['4xl'],
  paddingBottom: vars.spacing['4xl'],
});

export const container = style({
  maxWidth: '1280px',
  margin: '0 auto',
  padding: `0 ${vars.spacing.large}`,
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.spacing['3xl'],
  flexWrap: 'wrap',
  gap: vars.spacing.large,
});

export const heading = style({
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.slate900,
  marginBottom: vars.spacing.medium,
});

export const subheading = style({
  fontSize: vars.fontSize.lg,
  color: vars.color.slate600,
});

export const buttonDesktop = style({
  display: 'none',
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'inline-flex',
    },
  },
});

export const buttonMobile = style({
  textAlign: 'center',
  marginTop: vars.spacing['2xl'],
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none',
    },
  },
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: vars.spacing['2xl'],
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});

export const card = style({
  backgroundColor: vars.color.white,
  padding: vars.spacing['2xl'],
  borderRadius: vars.radius.xl,
  boxShadow: vars.shadow.card,
});

export const meta = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: vars.fontSize.sm,
  color: vars.color.slate500,
  marginBottom: vars.spacing.medium,
});

export const icon = style({
  height: '16px',
  width: '16px',
  marginRight: vars.spacing.xs,
});

export const category = style({
  backgroundColor: vars.color.slate100,
  padding: `${vars.spacing.xs} ${vars.spacing.small}`,
  borderRadius: vars.radius.xl,
  fontSize: '0.75rem',
  marginLeft: vars.spacing.small,
});

export const title = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.slate900,
  marginBottom: vars.spacing.small,
  lineClamp: 2,
});

export const excerpt = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.slate600,
  lineHeight: 1.6,
  marginBottom: vars.spacing.medium,
});

export const readMore = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.slate900,
  fontWeight: vars.fontWeight.medium,
  transition: 'color 0.2s',
  selectors: {
    '&:hover': {
      color: vars.color.slate600,
    },
  },
});
