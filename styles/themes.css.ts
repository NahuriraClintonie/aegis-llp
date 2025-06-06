import { createTheme } from '@vanilla-extract/css';
import { vars } from './tokens/vars.css';

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
  },
  spacing: {
    small: '0.5rem',
    medium: '0.75rem',
    large: '1rem',
  },
  font: {
    body: 'Noto Sans JP, sans-serif',
    heading: 'Noto Serif JP, serif',
  },
  radius: {
    md: '8px',
  },
  fontSize: {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
  },
});
