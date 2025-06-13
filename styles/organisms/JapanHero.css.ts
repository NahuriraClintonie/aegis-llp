// JapanHero.css.ts (Vanilla Extract CSS)
import { style } from '@vanilla-extract/css';

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
  background: '#fff',
  color: '#b0272c',
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

export const visitText = style({
  fontSize: '1rem',
  margin: '0.5rem 0',
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
  background: '#b0272c',
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
  fontSize: '1.2rem',
  color: '#b0272c',
});

export const heroRight = style({
  flex: 1,
  position: 'relative',
  background: 'linear-gradient(135deg, #ffe5b4, #ffd1b2)',
  borderRadius: '0 10px 10px 0',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const sun = style({
  position: 'absolute',
  top: '10%',
  left: '30%',
  width: '200px',
  height: '200px',
  background: '#b0272c',
  borderRadius: '50%',
  zIndex: 1,
});

export const mountain = style({
  position: 'absolute',
  bottom: 0,
  left: '20%',
  width: '300px',
  height: '150px',
  background: '#7f73a1',
  clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)',
  zIndex: 2,
});

export const gate = style({
  position: 'absolute',
  bottom: 0,
  left: '40%',
  width: '100px',
  height: '100px',
  background: 'red',
  borderBottom: '10px solid black',
  zIndex: 3,
  transform: 'translateY(20%)',
});

export const blossoms = style({
  position: 'absolute',
  right: '10%',
  top: '30%',
  fontSize: '2rem',
  zIndex: 4,
});
