import { createTheme } from '@vanilla-extract/css';
import { vars } from '../contracts';

export const defaultTheme = createTheme(vars, {
  color: {
    background: '#ffffff',
    text: '#1a1a1a',
    primary: '#0f172a',
    secondary: '#1e293b',
    white: '#ffffff',
    border: '#cbd5e1',
    hover: '#f8fafc',
    focusRing: '#0f172a',
    slate900: '#0f172a',
    slate800: '#1e293b',
    slate400: '#94a3b8',
  },
  spacing: {
    small: '0.5rem',
    medium: '0.75rem',
    large: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '4xl': '2.5rem',
    '5xl': '3rem',
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
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  radius: {
    md: '8px',
  },
});
