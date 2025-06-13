import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens/index.css';

export const section = style({
  position: 'relative',
  backgroundColor: vars.color.white,
  overflow: 'hidden',
});

export const backgroundImage = style({
  position: 'absolute',
  inset: 0,
  backgroundImage: 'url("/background 5.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  filter: 'brightness(0.1)',
  zIndex: 0,
});


export const container = style({
  position: 'relative',
  paddingTop: vars.spacing['5xl'],
  paddingBottom: vars.spacing['5xl'],
  zIndex: 1,
});

export const contentWrapper = style({
  maxWidth: '64rem', // Tailwind's max-w-4xl = 64rem
  margin: '0 auto',
  textAlign: 'center',
});

export const title = style({
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.slate900,
  marginBottom: vars.spacing.large,
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '3.75rem', // 6xl
    },
  },
});

export const titleAccent = style({
  display: 'block',
  color: vars.color.slate600,
});

export const description = style({
  fontSize: '1.25rem', // Tailwind's text-xl
  color: vars.color.slate600,
  marginBottom: vars.spacing['2xl'],
  lineHeight: 1.75,
  maxWidth: '42rem',
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const actions = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.medium,
  justifyContent: 'center',
  '@media': {
    'screen and (min-width: 640px)': {
      flexDirection: 'row',
    },
  },
});
