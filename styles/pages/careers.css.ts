import { style, globalStyle} from "@vanilla-extract/css"
import { vars } from '@/styles/tokens/contracts/index.css';

export const spaceY02 = style({}); // The class itself will be empty, it's just a marker
export const spaceY66 = style({});

// Reusable styles (analogous to Tailwind's utilities or common components)
export const sectionPadding = style({
  paddingTop: vars.spacing['4xl'], // Using theme spacing
  paddingBottom: vars.spacing['4xl'],
  "@media": {
    "screen and (min-width: 768px)": {
      paddingTop: vars.spacing['6xl'], // md:py-24
      paddingBottom: vars.spacing['6xl'],
    },
  },
})

export const containerCustom = style({
  maxWidth: "1280px", // Equivalent to max-w-7xl
  margin: "0 auto",
  paddingLeft: vars.spacing.large,
  paddingRight: vars.spacing.large,
  "@media": {
    "screen and (min-width: 640px)": {
      paddingLeft: vars.spacing.xl, // sm:px-6
      paddingRight: vars.spacing.xl,
    },
    "screen and (min-width: 1024px)": {
      paddingLeft: vars.spacing.xl, // lg:px-8
      paddingRight: vars.spacing.xl,
    },
  },
})

export const btnBase = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: `${vars.spacing.medium} ${vars.spacing.xl}`, // px-6 py-3
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.semibold,
  borderRadius: vars.radius.md,
  transition: "all 0.2s ease-in-out",
  cursor: "pointer",
  border: "1px solid transparent",
})

export const btnPrimary1 = style([
  btnBase,
  {
    backgroundColor: vars.color.primary, // Using theme primary color
    color: vars.color.white,
    ":hover": {
      backgroundColor: vars.color.secondary, // Using theme secondary color
    },
    ":focus": {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      boxShadow: `0 0 0 2px ${vars.color.slate300}`,
    },
  },
])

export const btnSecondary1 = style([
  btnBase,
  {
    backgroundColor: vars.color.white,
    color: vars.color.slate800,
    border: `1px solid ${vars.color.border}`,
    ":hover": {
      backgroundColor: vars.color.hover,
      borderColor: vars.color.slate400,
    },
    ":focus": {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      boxShadow: `0 0 0 2px ${vars.color.slate300}`,
    },
  },
])

export const cardShadow = style({
  boxShadow: vars.shadow.card, // Using theme shadow
})

// General Layout & Backgrounds
export const minHeightScreen = style({
  minHeight: "100vh",
})

export const bgWhite = style({
  backgroundColor: vars.color.white,
})

export const bgSlate50 = style({
  backgroundColor: vars.color.slate50,
})

export const bgSlate10 = style({
  backgroundColor: vars.color.slate100,
})

// Text Styles
export const textAlign = style({
  textAlign: "center",
})

export const textXs1 = style({
  fontSize: "0.75rem", // This size isn't in your theme, keeping as is
  lineHeight: "1rem",
})

export const textSm1 = style({
  fontSize: vars.fontSize.sm,
  lineHeight: "1.25rem",
})

export const textLg = style({
  fontSize: vars.fontSize.lg,
  lineHeight: "1.75rem",
})

export const textXl = style({
  fontSize: vars.fontSize.xl,
  lineHeight: "1.75rem",
})

export const text3xl = style({
  fontSize: vars.fontSize['3xl'],
  lineHeight: "2.25rem",
})

export const text4xl = style({
  fontSize: vars.fontSize['4xl'],
  lineHeight: "2.5rem",
})

export const text5xl = style({
  fontSize: "3rem", // This size isn't in your theme, keeping as is
  lineHeight: "1",
})

export const fontBold = style({
  fontWeight: vars.fontWeight.bold,
})

export const fontSemibold = style({
  fontWeight: vars.fontWeight.semibold,
})

export const fontMedium1 = style({
  fontWeight: vars.fontWeight.medium,
})

export const leadingRelaxed = style({
  lineHeight: "1.625",
})

export const textColor = style({
  color: vars.color.secondary,
})

export const textSlate900 = style({
  color: vars.color.slate900,
})

export const textSlate600 = style({
  color: vars.color.slate600,
})

export const textSlate7 = style({
  color: vars.color.slate700,
})

export const textSlate500 = style({
  color: vars.color.slate500,
})

export const textSlate400 = style({
  color: vars.color.slate400,
})

// Margins and Paddings
export const mxAuto = style({
  marginLeft: "auto",
  marginRight: "auto",
})

export const mb2 = style({
  marginBottom: vars.spacing.small,
})
export const mb3 = style({
  marginBottom: vars.spacing.medium,
})
export const mb4 = style({
  marginBottom: vars.spacing.large,
})
export const mb6 = style({
  marginBottom: vars.spacing.xl,
})
export const mb8 = style({
  marginBottom: vars.spacing['2xl'],
})
export const mb12 = style({
  marginBottom: vars.spacing['3xl'],
})

export const mr11 = style({
  marginRight: vars.spacing.xs,
})
export const mr2 = style({
  marginRight: vars.spacing.small,
})
export const mr3 = style({
  marginRight: vars.spacing.medium,
})

export const ml2 = style({
  marginLeft: vars.spacing.small,
})

export const mx22 = style({
  marginLeft: vars.spacing.small,
  marginRight: vars.spacing.small,
})

export const px33 = style({
  paddingLeft: vars.spacing.medium,
  paddingRight: vars.spacing.medium,
})

export const py11 = style({
  paddingTop: vars.spacing.xs,
  paddingBottom: vars.spacing.xs,
})

export const pt6 = style({
  paddingTop: vars.spacing.xl,
})

export const p4 = style({
  padding: vars.spacing.large,
})
export const p6 = style({
  padding: vars.spacing.xl,
})
export const p8 = style({
  padding: vars.spacing['2xl'],
})

// Flexbox & Grid
export const flex = style({
  display: "flex",
})

export const flexCol1 = style({
  flexDirection: "column",
})

export const itemsCenter = style({
  alignItems: "center",
})

export const itemsStart = style({
  alignItems: "flex-start",
})

export const justifyCenter = style({
  justifyContent: "center",
})

export const justifyBetween = style({
  justifyContent: "space-between",
})

export const flex11 = style({
  flex: "1 1 0%",
})

export const gap33 = style({
  gap: vars.spacing.medium,
})
export const gap4 = style({
  gap: vars.spacing.large,
})
export const gap66 = style({
  gap: vars.spacing.xl,
})
export const gap8 = style({
  gap: vars.spacing['2xl'],
})

export const gridCols11 = style({
  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
})

export const spaceY22 = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.small,
});

export const spaceY6 = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xl,
});

// Widths & Heights
export const w1_5 = style({
  width: "0.375rem",
})
export const h1_5 = style({
  height: "0.375rem",
})

export const w4 = style({
  width: vars.spacing.large,
})
export const h4 = style({
  height: vars.spacing.large,
})

export const w8 = style({
  width: vars.spacing['2xl'],
})
export const h8 = style({
  height: vars.spacing['2xl'],
})

export const w16 = style({
  width: vars.spacing['4xl'],
})
export const h16 = style({
  height: vars.spacing['4xl'],
})

export const wFull = style({
  width: "100%",
})

// Borders & Dividers
export const border = style({
  borderWidth: "1px",
})

export const borderT = style({
  borderTopWidth: "1px",
})

export const borderSlate200 = style({
  borderColor: "#e2e8f0", // This color isn't in your theme, you may want to add it
})

export const borderSlate300 = style({
  borderColor: vars.color.slate300,
})

// Rounded Corners
export const roundedFull1 = style({
  borderRadius: "9999px",
})

export const roundedLg = style({
  borderRadius: vars.radius.lg,
})

export const roundedXl = style({
  borderRadius: vars.radius.xl,
})

// Other Utilities
export const inlineBlock1 = style({
  display: "inline-block",
})

export const transitionColors = style({
  transitionProperty: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "200ms",
})

export const transitionAll = style({
  transitionProperty: "all",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "300ms",
})

export const flexShrink0 = style({
  flexShrink: 0,
})

export const resizeNone = style({
  resize: "none",
})

// Responsive Styles
export const maxWidth4xl = style({
  maxWidth: "56rem",
})

// Hero Section Specific Styles
export const h1Text = text4xl
export const h1MdText = style({
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "3rem", // md:text-5xl (keeping as is since not in theme)
    },
  },
})
export const h1FontBold = fontBold
export const h1TextColor = textSlate900
export const h1MarginBottom = mb6
export const pTextXl = textXl
export const pTextColor = textSlate600
export const pLeadingRelaxed = leadingRelaxed
export const pMarginBottom = mb8

export const gridCols1 = style({
  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
})
export const mdGridCols3 = style({
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    },
  },
})
export const marginTop12 = style({
  marginTop: vars.spacing['3xl'],
})

export const divTextAlign = textAlign
export const divInlineFlex = flex
export const divItemsCenter = itemsCenter
export const divJustifyCenter = justifyCenter
export const divW16 = w16
export const divH16 = h16
export const divBgSlate100 = bgSlate10
export const divRoundedFull = roundedFull1
export const divMarginBottom4 = mb4
export const iconH8W8 = w8
export const iconTextSlate700 = textSlate7
export const h3TextLg = textLg
export const h3FontSemibold = fontSemibold
export const h3TextColor = textSlate900
export const h3MarginBottom2 = mb2

// Job Openings Section Specific Styles
export const textCenterMb12 = style([
  textAlign,
  mb12,
])
export const h2Text3xl = text3xl
export const h2MdText4xl = style({
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: vars.fontSize['4xl'],
    },
  },
})
export const h2FontBold = fontBold
export const h2TextColor = textSlate900
export const h2Mb6 = mb6
export const pTextLg = textLg
export const pTextSlate600Mb = textSlate600

export const lgGridCols2 = style({
  "@media": {
    "screen and (min-width: 1024px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
  },
})

export const jobCard = style([
  bgWhite,
  border,
  borderSlate300, // Updated to use theme color
  roundedXl,
  p6,
  cardShadow,
  transitionAll,
])

export const jobCardHover = style({
  ":hover": {
    borderColor: vars.color.slate400,
  },
})

export const flexJustifyBetween = justifyBetween
export const itemsStartMb4 = style([
  itemsStart,
  mb4,
])
export const h3TextXl = textXl
export const h3FontSemiboldMb2 = style([
  fontSemibold,
  mb2,
  textSlate900,
])
export const flexItemsCenter = itemsCenter
export const textSm = textSm1
export const textSlate600Mb2 = style([
  textSlate600,
  mb2,
])
export const iconH4W4 = h4
export const mr1 = mr11
export const mx2 = mx22
export const inlineBlock = inlineBlock1
export const px3 = px33
export const py1 = py11
export const textXs = textXs1
export const fontMedium = fontMedium1
export const bgSlate100 = bgSlate10
export const textSlate700 = textSlate7
export const roundedFull = roundedFull1
export const textXsTextSlate500 = style([
  textXs,
  textSlate500,
])
export const pTextSlate600TextSm = style([
  textSlate600,
  textSm,
])
export const leadingRelaxedMb6 = style([
  leadingRelaxed,
  mb6,
])

export const flexCol = flexCol1
export const smFlexRow = style({
  "@media": {
    "screen and (min-width: 640px)": {
      flexDirection: "row",
    },
  },
})
export const gap3 = gap33
export const btnSecondary = btnSecondary1
export const flex1 = flex11
export const btnPrimary = btnPrimary1

export const jobDetailsSection = style({
  marginTop: vars.spacing.xl,
  paddingTop: vars.spacing.xl,
  borderTop: `1px solid ${vars.color.slate300}`, // Updated to use theme color
})
export const gridCols1MdGridCols2 = style({
  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
  },
})
export const gap6 = gap66
export const h4FontSemibold = fontSemibold
export const h4TextSlate900 = textSlate900
export const h4Mb3 = mb3
export const spaceY2 = spaceY22
export const textSmTextSlate600 = style([
  textSm,
  textSlate600,
])
export const flexItemsStart = itemsStart
export const spanW1_5 = w1_5
export const spanH1_5 = h1_5
export const spanBgSlate400 = style({
  backgroundColor: vars.color.slate400,
})
export const spanRoundedFull = roundedFull
export const spanMt2 = style({
  marginTop: vars.spacing.small,
})
export const spanMr3 = mr3
export const spanFlexShrink0 = flexShrink0

// Application Form Section Specific Styles
export const applicationFormBg = bgSlate50
export const applicationFormMaxW2xl = style({
  maxWidth: "42rem",
})
export const applicationFormMxAuto = mxAuto
export const applicationFormTextCenterMb8 = style([
  textAlign,
  mb8,
])
export const applicationFormH2 = style([
  text3xl,
  fontBold,
  textSlate900,
  mb4,
])
export const applicationFormP = textSlate600

export const applicationFormCard = style([
  bgWhite,
  roundedXl,
  p8,
  cardShadow,
])

export const applicationFormSpaceY6 = spaceY6

export const applicationFormGridCols1 = gridCols1
export const applicationFormMdGridCols2 = style({
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
  },
})
export const applicationFormGap6 = gap6

export const applicationFormLabel = style([
  style({
    display: "block",
    fontSize: vars.fontSize.sm,
    fontWeight: vars.fontWeight.medium,
    color: vars.color.slate700,
    marginBottom: vars.spacing.small,
  }),
])

export const applicationFormInput = style([
  wFull,
  border,
  borderSlate300,
  roundedLg,
  transitionColors,
  style({
    paddingTop: vars.spacing.medium,
    paddingBottom: vars.spacing.medium,
    paddingLeft: vars.spacing.large,
    paddingRight: vars.spacing.large,
    ":focus": {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      boxShadow: `0 0 0 2px ${vars.color.focusRing}`,
      borderColor: "transparent",
    },
  }),
])

export const applicationFormSelect = style([
  wFull,
  border,
  borderSlate300,
  roundedLg,
  transitionColors,
  style({
    paddingTop: vars.spacing.medium,
    paddingBottom: vars.spacing.medium,
    paddingLeft: vars.spacing.large,
    paddingRight: vars.spacing.large,
    ":focus": {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      boxShadow: `0 0 0 2px ${vars.color.focusRing}`,
      borderColor: "transparent",
    },
  }),
])

export const applicationFormTextArea = style([
  wFull,
  border,
  borderSlate300,
  roundedLg,
  transitionColors,
  resizeNone,
  style({
    paddingTop: vars.spacing.medium,
    paddingBottom: vars.spacing.medium,
    paddingLeft: vars.spacing.large,
    paddingRight: vars.spacing.large,
    ":focus": {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      boxShadow: `0 0 0 2px ${vars.color.focusRing}`,
      borderColor: "transparent",
    },
  }),
])

export const applicationFormBtnContainer = style([
  flex,
  gap4,
  style({
    "@media": {
      "screen and (min-width: 640px)": {
        flexDirection: "row",
      },
    },
  }),
])

export const applicationFormNoteContainer = style([
  style({
    marginTop: vars.spacing.xl,
    padding: vars.spacing.large,
    backgroundColor: vars.color.slate50,
    borderRadius: vars.radius.md,
  }),
])

export const applicationFormNoteText = style([
  textSm,
  textSlate600,
])

// Company Culture Section Specific Styles
export const companyCultureH2 = h2Text3xl
export const companyCultureP = pTextSlate600Mb
export const companyCultureGrid = style([
  gridCols1,
  {
    "@media": {
      "screen and (min-width: 768px)": {
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      },
      "screen and (min-width: 1024px)": {
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      },
    },
  },
])

export const companyCultureCard = style([
  bgSlate50,
  p6,
  roundedXl,
  mb4,
])

export const companyCultureCardH3 = h3TextLg
export const companyCultureCardP = pTextSlate600TextSm