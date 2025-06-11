import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens/contracts/index.css';

export const footer = style({
  backgroundColor: vars.color.slate900,
  color: vars.color.white,
  width: '100%',
  bottom: 0,
  left: 0,
  right: 0,
  overflowX: 'hidden',
  zIndex: 100, 
});


export const container = style({
  maxWidth: '1250px',
  margin: '0 auto',
  padding: `0 ${vars.spacing.xs}`,
  paddingTop: vars.spacing['xl'],
  paddingBottom: vars.spacing['xl'],
  boxSizing: 'border-box',
});

export const grid = style({
  display: 'grid',
  gap: vars.spacing['3xl'],
  gridTemplateColumns: '1fr',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});


export const brand = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: vars.spacing.medium,
});

export const brandText = style({
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.bold,
});

export const subText = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.slate400,
  marginLeft: vars.spacing.small,
});

export const description = style({
  color: vars.color.slate400,
  marginBottom: vars.spacing.xl,
  maxWidth: 480,
});

export const contactList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.small,
});

export const contactItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.small,
  color: vars.color.slate400,
});

export const navSection = style({
  display: 'flex',
  flexDirection: 'column',
});

export const navTitle = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginBottom: vars.spacing.small,
});

export const navItem = style({
  color: vars.color.slate400,
  textDecoration: 'none',
  transition: 'color 0.2s ease-in-out',
  selectors: {
    '&:hover': {
      color: vars.color.white,
    },
  },
});

export const bottomBar = style({
  borderTop: `1px solid ${vars.color.slate800}`,
  marginTop: vars.spacing['3xl'],
  paddingTop: vars.spacing['2xl'],
});

export const bottomRow = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media': {
    'screen and (min-width: 768px)': {
      flexDirection: 'row',
    },
  },
});

export const copyright = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.slate400,
});

export const policyLinks = style({
  display: 'flex',
  gap: vars.spacing.xl,
});

export const policyItem = style([navItem, { fontSize: vars.fontSize.sm }]);
