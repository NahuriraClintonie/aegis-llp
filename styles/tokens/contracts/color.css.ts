// styles/tokens/colors.css.ts
import { createGlobalTheme } from '@vanilla-extract/css';

export const colorVars = createGlobalTheme(':root', {
  background: '#ffffff',
  text: '#000000',
  primary: '#2563eb',
  secondary: '#1e40af',
  white: '#ffffff',
  border: '#e5e7eb',
  hover: '#f3f4f6',
  focusRing: '#3b82f6',
  slate900: '#0f172a',
  slate800: '#1e293b',
  slate700: '#334155',
  slate600: '#475569',
  slate500: '#64748b',
  slate400: '#94a3b8',
  slate300: '',
  slate100: '#f1f5f9',
  slate50: '#f8fafc',
  gray50: '#f9fafb',
  gray900: '#111827',
});
