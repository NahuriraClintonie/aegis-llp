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
  },
  spacing: {
    small: null,
    medium: null,
    large: null,
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
  },
});
