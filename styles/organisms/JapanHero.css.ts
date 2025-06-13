import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens/index.css';

export const hero = style({
  display: 'flex',
  background: '#d4464a',
  color: '#fff',
  fontFamily: 'Segoe UI, sans-serif',
  padding: '4rem 2rem',
  borderRadius: '10px',
  overflow: 'hidden',
  height: '90vh',
});

export const heroLeft = style({
  flex: 1,
  background: vars.color.gray50,
  color: '#000000',
  padding: '3rem',
  borderRadius: '10px 0 0 10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const logo = style({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  marginBottom: '1rem',
});

export const vibes = style({
  fontWeight: 'normal',
});

export const heroTitle = style({
  fontSize: '4rem',
  fontWeight: 'bold',
  margin: '1rem 0',
  fontFamily: 'Orbitron, sans-serif',
  letterSpacing: '1px',
});

export const heroDescription = style({
  fontSize: '0.9rem',
  lineHeight: 1.6,
  marginBottom: '1.5rem',
});

export const learnBtn = style({
  background: '#000',
  color: 'white',
  padding: '0.75rem 1.5rem',
  border: 'none',
  borderRadius: '50px',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginBottom: '2rem',
});

export const socialIcons = style({
  display: 'flex',
  gap: '1rem',
  marginTop: '1.5rem',
  color: '#000',
})


export const icon = style({
  width: '1.5rem',
  height: '1.5rem',
  transition: 'transform 0.2s ease-in-out',
  ':hover': {
    transform: 'scale(1.1)',
  },
});

// 🎌 Right section with new image background (fit perfectly)
export const heroRight = style({
  flex: 1,
  position: 'relative',
  borderRadius: '0 10px 10px 0',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// ⛰️ Background image strictly scoped to right section
export const backgroundImage = style({
  position: 'absolute',
  inset: 0,
  backgroundImage: 'url("/aegis group 3.jpeg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  zIndex: 0,
});

// ☀️ Sun with LLP inside
export const sun = style({
  position: 'absolute',
  top: '10%',
  left: '30%',
  width: '200px',
  height: '200px',
  background: '#b0272c',
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
  fontSize: '2.5rem',
  color: '#fff',
  fontWeight: 'bold',
  animation: `${pulse} 2.5s ease-in-out infinite alternate`,
});
