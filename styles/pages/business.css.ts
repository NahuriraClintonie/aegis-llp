import { style } from '@vanilla-extract/css';

export const pageWrapper = style({
  minHeight: '100vh',
  backgroundColor: '#ffffff',
});

export const heroSection = style({
  backgroundColor: '#f8fafc',
  padding: '4rem 1rem',
});

export const containerCustom = style({
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0 1rem',
});

export const heroContent = style({
  maxWidth: '64rem',
  margin: '0 auto',
  textAlign: 'center',
});

export const heroTitle = style({
  fontSize: '2.25rem',
  fontWeight: 'bold',
  color: '#0f172a',
  marginBottom: '1.5rem',
});

export const heroText = style({
  fontSize: '1.25rem',
  color: '#475569',
  lineHeight: 1.75,
});

export const sectionPadding = style({
  padding: '4rem 1rem',
});

export const categoryButtons = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '1rem',
  marginBottom: '3rem',
});

export const categoryButton = style({
  padding: '0.5rem 1rem',
  borderRadius: '9999px',
  fontSize: '0.875rem',
  fontWeight: 500,
  backgroundColor: '#f1f5f9',
  color: '#334155',
  transition: 'background-color 0.2s ease-in-out',
  selectors: {
    '&:hover': {
      backgroundColor: '#e2e8f0',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 0 2px #0f172a',
    },
  },
});

export const companyGrid = style({
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
});

export const companyCard = style({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  backgroundColor: '#ffffff',
  borderRadius: '1rem',
  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  selectors: {
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
    },
  },
});

export const cardImageWrapper = style({
  position: 'relative',
  width: '100%',
  height: '160px',
  overflow: 'hidden',
  borderTopLeftRadius: '1rem',
  borderTopRightRadius: '1rem',
});


export const cardImage = style({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

export const cardContent = style({
  padding: '1.25rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
});

export const categoryBadge = style({
  alignSelf: 'flex-start',
  padding: '0.3rem 0.75rem',
  fontSize: '0.75rem',
  fontWeight: 600,
  backgroundColor: '#f1f5f9',
  color: '#334155',
  borderRadius: '9999px',
});

export const companyName = style({
  fontSize: '1.125rem',
  fontWeight: 700,
  color: '#0f172a',
});

export const companySpecialty = style({
  color: '#475569',
  fontWeight: 500,
  fontSize: '0.875rem',
});

export const companyDescription = style({
  fontSize: '0.875rem',
  color: '#64748b',
  lineHeight: 1.5,
});

export const learnMore = style({
  marginTop: '0.5rem',
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '0.875rem',
  fontWeight: 500,
  color: '#2563eb',
  textDecoration: 'none',
  transition: 'color 0.2s ease-in-out',
  selectors: {
    '&:hover': {
      color: '#1d4ed8',
    },
  },
});

export const arrowIcon = style({
  height: '1rem',
  width: '1rem',
  marginLeft: '0.5rem',
});
