import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens/index.css';

export const hero = style({
  display: 'flex',
  background: '#d4464a', // Not in vars, keep as is
  color: vars.color.white,
  fontFamily: vars.font.body,
  padding: `${vars.spacing['4xl']} ${vars.spacing.large}`,
  borderRadius: vars.radius.lg,
  overflow: 'hidden',
  height: '90vh',
});

export const heroLeft = style({
  flex: 1,
  background: vars.color.gray50,
  color: vars.color.text,
  padding: vars.spacing['3xl'],
  borderRadius: `${vars.radius.lg} 0 0 ${vars.radius.lg}`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const logo = style({
  fontWeight: vars.fontWeight.bold,
  fontSize: vars.fontSize['2xl'],
  marginBottom: vars.spacing.large,
});

export const vibes = style({
  fontWeight: vars.fontWeight.normal,
});

export const heroTitle = style({
  fontSize: '4rem', // Custom size, not in vars
  fontWeight: vars.fontWeight.bold,
  margin: `0.3rem 0`,
  fontFamily: 'Orbitron, sans-serif', // Custom font, preserve
  letterSpacing: '1px',
});

export const heroDescription = style({
  fontSize: vars.fontSize.sm,
  lineHeight: 1.6,
  marginBottom: vars.spacing['2xl'],
});

export const learnBtn = style({
  background: vars.color.primary,
  color: vars.color.white,
  padding: `${vars.spacing.medium} ${vars.spacing['2xl']}`,
  border: 'none',
  borderRadius: '50px',
  fontWeight: vars.fontWeight.bold,
  cursor: 'pointer',
  marginBottom: vars.spacing['3xl'],
});

export const socialIcons = style({
  display: 'flex',
  gap: vars.spacing.large,
  marginTop: vars.spacing['2xl'],
  color: vars.color.text,
});

export const icon = style({
  width: '1.5rem',
  height: '1.5rem',
  transition: 'transform 0.2s ease-in-out',
  ':hover': {
    transform: 'scale(1.1)',
  },
});

export const heroRight = style({
  flex: 1,
  position: 'relative',
  borderRadius: `0 ${vars.radius.lg} ${vars.radius.lg} 0`,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const backgroundImage = style({
  position: 'absolute',
  inset: 0,
  backgroundImage: 'url("/aegis group 3.jpeg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  zIndex: 0,
});

export const sun = style({
  position: 'absolute',
  top: '10%',
  left: '30%',
  width: '200px',
  height: '200px',
  background: '#b0272c', // Sun red color not in vars
  borderRadius: '50%',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const pulse = keyframes({
  '0%': { transform: 'scale(0.95)', opacity: 0.7 },
  '100%': { transform: 'scale(1.05)', opacity: 1 },
});

export const sunText = style({
  fontSize: '2.5rem', // Custom size
  color: vars.color.white,
  fontWeight: vars.fontWeight.bold,
  animation: `${pulse} 2.5s ease-in-out infinite alternate`,
});
