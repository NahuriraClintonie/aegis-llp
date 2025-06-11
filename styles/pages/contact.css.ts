import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/tokens/contracts/index.css';

export const wrapper = style({
  minHeight: '100vh',
  backgroundColor: vars.color.white,
})

export const heroSection = style({
  backgroundColor: vars.color.slate50,
  padding: `${vars.spacing.xl} 0`,
  textAlign: 'center',
})

export const heroHeading = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.slate900,
  marginBottom: vars.spacing.large,
})

export const heroText = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.slate600,
  lineHeight: 1.7,
})

export const section = style({
  padding: `${vars.spacing.xl} 0`,
})

export const formContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: vars.spacing.xl,

  '@media': {
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: '1fr 1fr',
    },
  },
})

export const formTitle = style({
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.slate900,
  marginBottom: vars.spacing.large,
})

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.large,
})

export const inputGroup = style({})

export const label = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.slate700,
  marginBottom: vars.spacing.xs,
  display: 'block',
})

export const input = style({
  width: '100%',
  padding: `${vars.spacing.medium} ${vars.spacing.large}`,
  border: `1px solid ${vars.color.slate300}`,
  borderRadius: vars.radius.lg,
  transition: 'border-color 0.2s, box-shadow 0.2s',
  ':focus': {
    outline: 'none',
    borderColor: 'transparent',
    boxShadow: `0 0 0 2px ${vars.color.slate900}`,
  },
})

export const textarea = style([input, {
  resize: 'none',
}])

export const button = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${vars.spacing.medium} ${vars.spacing.large}`,
  backgroundColor: vars.color.primary,
  color: vars.color.white,
  fontWeight: vars.fontWeight.medium,
  borderRadius: vars.radius.lg,
  transition: 'opacity 0.2s',

  selectors: {
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
})

export const privacyNotice = style({
  marginTop: vars.spacing.xl,
  padding: vars.spacing.large,
  backgroundColor: vars.color.slate50,
  borderRadius: vars.radius.lg,
  fontSize: vars.fontSize.sm,
  color: vars.color.slate600,
})

export const infoTitle = style([formTitle])

export const infoItem = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.spacing.medium,
})

export const infoIcon = style({
  flexShrink: 0,
  width: '3rem',
  height: '3rem',
  backgroundColor: vars.color.slate100,
  borderRadius: vars.radius.lg,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const infoLabel = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.slate900,
})

export const infoText = style({
  color: vars.color.slate600,
})

export const imageWrapper = style({
  overflow: 'hidden',
  borderRadius: vars.radius.xl,
})
