import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens/contracts/index.css';

export const headerRoot = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  backgroundColor: vars.color.white,
  padding: `${vars.spacing.large} ${vars.spacing['5xl']}`,
  borderBottom: `2px solid ${vars.color.border}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  boxSizing: 'border-box',
});

export const logo = style({
  fontFamily: vars.font.heading,
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
});

export const navList = style({
  display: 'flex',
  gap: vars.spacing.large,
});

export const navItem = style({
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text,
  textDecoration: 'none',
  selectors: {
    '&:hover': {
      color: vars.color.primary,
    },
  },
});
