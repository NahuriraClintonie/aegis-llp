import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens/contracts/index.css';

const maroon = '#600000';
const lightGray = '#f4f4f4';

export const section = style({
  backgroundColor: 'rgba(212, 70, 74, 1)', // #d4464a with 60% opacity
  paddingTop: '1rem',
  paddingBottom: '4rem',
  margin: '0 3rem',
});


export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: `0 ${vars.spacing['2xl']}`,
});

export const headingBlock = style({
  textAlign: 'center',
  marginBottom: '3rem',
});

export const title = style({
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.semibold,
  color: maroon,
  marginBottom: '1.5rem',
});

export const description = style({
  fontSize: vars.fontSize.md,
  color: vars.color.slate600,
  maxWidth: '600px',
  margin: '0 auto',
  lineHeight: 1.8,
});

export const grid = style({
  display: 'grid',
  gap: vars.spacing.xl,
  gridTemplateColumns: '1fr',
  marginBottom: '3rem',
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
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
  backgroundColor: vars.color.white,
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  selectors: {
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
    },
  },
});

export const logoArea = style({
  position: 'relative',
  width: '100%',
  height: '180px',
  overflow: 'hidden',
});

export const gradientOverlay = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '0%',
  background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), white)',
  pointerEvents: 'none',
});

export const contentArea = style({
  padding: vars.spacing.large,
  textAlign: 'center',
  backgroundColor: vars.color.white,
});

export const name = style({
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.medium,
  color: '#000',
  marginBottom: vars.spacing.xs,
});

export const specialty = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.slate700,
});

export const buttonWrapper = style({
  textAlign: 'center',
});
