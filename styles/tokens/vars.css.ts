import { createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    background: null,
    text: null,
    primary: null,
    secondary: null,
    white: null,
    border: null,
    hover: null,
    focusRing: null,
    slate900: null,
    slate800: null,
    slate400: null,
  },
  spacing: {
    small: null,
    medium: null,
    large: null,
    xl: null,
    '2xl': null,
    '4xl': null,
    '5xl': null,
  },
  font: {
    body: null,
    heading: null,
  },
  radius: {
    md: null,
  },
  fontSize: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
    '2xl': null,
  },
  fontWeight: {
    normal: null,
    medium: null,
    semibold: null,
    bold: null,
  },
});
