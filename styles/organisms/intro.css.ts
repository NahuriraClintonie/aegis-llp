import { style } from '@vanilla-extract/css';

export const section = style({
  // backgroundColor: '#fff',
  backgroundColor: 'rgba(252, 248, 248, 0.8)',
  paddingTop: '3rem',
  paddingBottom: '3rem',
  paddingLeft: '4rem',
  paddingRight: '4rem',
  marginLeft: '3rem',
  marginRight: '3rem',
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
  position: 'relative',
  backgroundColor: 'gray10',
  padding: '2.5rem',
  borderRadius: '1.5rem',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid #eee',
  overflow: 'hidden',
  minHeight: '100px',
});

export const cardContent = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',
  position: 'relative',
  height: '100%',
});

export const textSection = style({
  flex: '1 1 60%',
  zIndex: 1,
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
  lineHeight: 1.5,
});

export const imageWrapper = style({
  flexShrink: 0,
  position: 'relative',
  width: '120px',
  height: '120px',
  zIndex: 0,
});

export const image = style({
  position: 'absolute',
  right: '-20px',
  top: '-20px',
  width: '120px',
  height: '120px',
  objectFit: 'cover',
  borderRadius: '9999px',
  border: '3px solid #800000',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
});
