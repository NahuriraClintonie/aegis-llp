import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens/contracts/index.css';

export const headerRoot = style({
  backgroundColor: vars.color.white,
  padding: `${vars.spacing.medium} ${vars.spacing.large}`,
  borderBottom: `1px solid ${vars.color.border}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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
