import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/tokens/contracts/index.css';

export const body = style({
  backgroundColor: vars.color.background,
  fontFamily: `${vars.font.body}, ${vars.font.heading}, sans-serif`,
})