import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../tokens/vars.css';

export const button = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vars.radius.md,
    fontWeight: 500,
    fontFamily: vars.font.body,
    transition: 'all 0.2s ease-in-out',
    outline: 'none',
    selectors: {
      '&:disabled': {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.color.primary,
        color: vars.color.white,
        selectors: {
          '&:hover': { backgroundColor: vars.color.secondary },
          '&:focus': { boxShadow: `0 0 0 2px ${vars.color.focusRing}` },
        },
      },
      secondary: {
        backgroundColor: vars.color.white,
        color: vars.color.text,
        border: `1px solid ${vars.color.border}`,
        selectors: {
          '&:hover': { backgroundColor: vars.color.hover },
          '&:focus': { boxShadow: `0 0 0 2px ${vars.color.focusRing}` },
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: vars.color.text,
        border: `1px solid ${vars.color.border}`,
        selectors: {
          '&:hover': { backgroundColor: vars.color.hover },
          '&:focus': { boxShadow: `0 0 0 2px ${vars.color.focusRing}` },
        },
      },
    },
    size: {
      sm: {
        padding: `${vars.spacing.small} ${vars.spacing.medium}`,
        fontSize: vars.fontSize.sm,
      },
      md: {
        padding: `${vars.spacing.medium} ${vars.spacing.large}`,
        fontSize: vars.fontSize.md,
      },
      lg: {
        padding: `${vars.spacing.large} calc(${vars.spacing.large} * 2)`,
        fontSize: vars.fontSize.lg,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
