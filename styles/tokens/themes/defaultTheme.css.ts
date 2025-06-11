import { createTheme } from '@vanilla-extract/css';
import { vars } from '../contracts/index.css';

export const defaultTheme = createTheme(vars, {
  color: {
    background: 'blue',
    text: '#1a1a1a',
    primary: '#0f172a',
    secondary: '#1e293b',
    white: '#ffffff',
    border: '#cbd5e1',
    hover: '#f8fafc',
    focusRing: '#0f172a',
    slate900: '#0f172a',
    slate800: '#1e293b',
    slate700: '#1e293b',
    slate600: '#475569',
    slate500: '#64748b',
    slate400: '#94a3b8',
    slate300:'#cbd5e1',
    slate100: '#f1f5f9',
    slate50: '#f8fafc',
    gray50: '#f8fafc', 
  },
  spacing: {
    xs: '0.25rem',
    small: '0.5rem',
    medium: '0.75rem',
    large: '1rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '5rem',
    '5xl': '6rem',
  },
  font: {
    body: 'Noto Sans JP, sans-serif',
    heading: 'Noto Serif JP, serif',
  },
  fontSize: {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  radius: {
    md: '8px',
    lg: '12px',
    xl: '1rem',
  },
  shadow: {
    card: '0 4px 14px rgba(0, 0, 0, 0.05)',
  },
});
