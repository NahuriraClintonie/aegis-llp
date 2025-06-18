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
  backgroundColor: '#ffffff',
  border: '1px solid #e2e8f0',
  borderRadius: '0.75rem',
  padding: '1.5rem',
  transition: 'all 0.3s ease-in-out',
  selectors: {
    '&:hover': {
      borderColor: '#cbd5e1',
    },
  },
});

export const logoWrapper = style({
  marginBottom: '1.5rem',
});

export const companyLogo = style({
  height: '3rem',
  width: 'auto',
  objectFit: 'contain',
});

export const companyInfo = style({
  marginBottom: '1rem',
});

export const categoryBadge = style({
  display: 'inline-block',
  padding: '0.25rem 0.75rem',
  fontSize: '0.75rem',
  fontWeight: 500,
  backgroundColor: '#f1f5f9',
  color: '#334155',
  borderRadius: '9999px',
  marginBottom: '0.75rem',
});

export const companyName = style({
  fontSize: '1.25rem',
  fontWeight: 600,
  color: '#0f172a',
  marginBottom: '0.5rem',
});

export const companySpecialty = style({
  color: '#475569',
  fontWeight: 500,
  fontSize: '0.875rem',
  marginBottom: '0.75rem',
});

export const companyDescription = style({
  fontSize: '0.875rem',
  color: '#475569',
  lineHeight: 1.6,
  marginBottom: '1.5rem',
});

export const learnMore = style({
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '0.875rem',
  fontWeight: 500,
  color: '#0f172a',
  transition: 'color 0.2s ease-in-out, transform 0.2s ease-in-out',
  selectors: {
    '&:hover': {
      color: '#475569',
    },
  },
});

export const arrowIcon = style({
  height: '1rem',
  width: '1rem',
  marginLeft: '0.5rem',
});
