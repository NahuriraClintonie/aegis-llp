import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/tokens/contracts/index.css';

export const body = style({
  backgroundColor: vars.color.background,
  fontFamily: `${vars.font.body}, ${vars.font.heading}, sans-serif`,
})

export const homeBackground = style({
  backgroundImage: 'url("/background 4.jpg")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  minHeight: "100vh", 
  width: "100%",
})