import { style } from '@vanilla-extract/css';

export const section = style({
  backgroundColor: '#fff',
  paddingTop: '6rem',
  paddingBottom: '6rem',
  paddingLeft: '2rem',
  paddingRight: '2rem',
});

export const header = style({
  maxWidth: '40rem',
  margin: '0 auto',
  textAlign: 'center',
  marginBottom: '4rem',
});

export const title = style({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#1a1a1a',
  marginBottom: '1.5rem',
});

export const subtitle = style({
  fontSize: '1.125rem',
  color: '#333',
  lineHeight: 1.8,
});

export const grid = style({
  display: 'grid',
  gap: '3rem',
  gridTemplateColumns: '1fr',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});

export const card = style({
  backgroundColor: '#fff',
  padding: '2.5rem',
  borderRadius: '1.5rem',
  textAlign: 'center',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid #eee',
  transition: 'transform 0.2s ease',
  ':hover': {
    transform: 'translateY(-5px)',
  },
});

export const imageWrapper = style({
  marginBottom: '2rem',
  display: 'flex',
  justifyContent: 'center',
});

export const image = style({
  width: '80px',
  height: '80px',
  objectFit: 'cover',
  borderRadius: '9999px',
  border: '2px solid #800000',
});

export const cardTitle = style({
  fontSize: '1.25rem',
  fontWeight: '600',
  color: '#800000',
  marginBottom: '1rem',
});

export const cardText = style({
  color: '#444',
  fontSize: '1rem',
  lineHeight: 1.7,
});
