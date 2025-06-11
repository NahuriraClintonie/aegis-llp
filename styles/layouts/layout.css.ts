import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/tokens/contracts/index.css';

export const body = style({
  minHeight: '100vh',
  backgroundColor: vars.color.background,
  fontFamily: `${vars.font.body}, ${vars.font.heading}, sans-serif`,
})