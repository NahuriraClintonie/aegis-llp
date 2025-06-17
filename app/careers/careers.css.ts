import { style } from "@vanilla-extract/css"

// Reusable styles (analogous to Tailwind's utilities or common components)
export const sectionPadding = style({
  paddingTop: "4rem", // Equivalent to py-16 (adjust if your section-padding has different values)
  paddingBottom: "4rem", // Equivalent to py-16
  "@media": {
    "screen and (min-width: 768px)": {
      paddingTop: "6rem", // md:py-24
      paddingBottom: "6rem", // md:py-24
    },
  },
})

export const containerCustom = style({
  maxWidth: "1280px", // Equivalent to max-w-7xl
  margin: "0 auto", // Equivalent to mx-auto
  paddingLeft: "1rem", // Equivalent to px-4
  paddingRight: "1rem", // Equivalent to px-4
  "@media": {
    "screen and (min-width: 640px)": {
      paddingLeft: "1.5rem", // sm:px-6
      paddingRight: "1.5rem", // sm:px-6
    },
    "screen and (min-width: 1024px)": {
      paddingLeft: "2rem", // lg:px-8
      paddingRight: "2rem", // lg:px-8
    },
  },
})

export const btnBase = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.75rem 1.5rem", // px-6 py-3
  fontSize: "1rem", // text-base
  fontWeight: "600", // font-semibold
  borderRadius: "0.5rem", // rounded-lg
  transition: "all 0.2s ease-in-out", // transition-all duration-300
  cursor: "pointer",
  border: "1px solid transparent", // Default transparent border
})

export const btnPrimary1 = style([
  btnBase,
  {
    backgroundColor: "#1a202c", // bg-slate-900
    color: "#ffffff", // text-white
    ":hover": {
      backgroundColor: "#2d3748", // hover:bg-slate-800
    },
    ":focus": {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      boxShadow: "0 0 0 2px #cbd5e0", // focus-ring-2 focus-ring-slate-300
    },
  },
])

export const btnSecondary1 = style([
  btnBase,
  {
    backgroundColor: "#ffffff", // bg-white
    color: "#2d3748", // text-slate-800
    border: "1px solid #cbd5e0", // border border-slate-300
    ":hover": {
      backgroundColor: "#edf2f7", // hover:bg-slate-50
      borderColor: "#a0aec0", // hover:border-slate-400
    },
    ":focus": {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      boxShadow: "0 0 0 2px #cbd5e0", // focus-ring-2 focus-ring-slate-300
    },
  },
])

export const cardShadow = style({
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // shadow-md
})

// General Layout & Backgrounds
export const minHeightScreen = style({
  minHeight: "100vh",
})

export const bgWhite = style({
  backgroundColor: "#ffffff",
})

export const bgSlate50 = style({
  backgroundColor: "#f8fafc",
})

export const bgSlate10 = style({
  backgroundColor: "#f1f5f9",
})

// Text Styles
export const textAlign = style({
  textAlign: "center",
})

export const textXs1 = style({
  fontSize: "0.75rem",
  lineHeight: "1rem",
})

export const textSm1 = style({
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
})

export const textLg = style({
  fontSize: "1.125rem",
  lineHeight: "1.75rem",
})

export const textXl = style({
  fontSize: "1.25rem",
  lineHeight: "1.75rem",
})

export const text3xl = style({
  fontSize: "1.875rem",
  lineHeight: "2.25rem",
})

export const text4xl = style({
  fontSize: "2.25rem",
  lineHeight: "2.5rem",
})

export const text5xl = style({
  fontSize: "3rem",
  lineHeight: "1",
})

export const fontBold = style({
  fontWeight: "700",
})

export const fontSemibold = style({
  fontWeight: "600",
})

export const fontMedium1 = style({
  fontWeight: "500",
})

export const leadingRelaxed = style({
  lineHeight: "1.625",
})

export const textColor = style({
  color: "#1e293b", // slate-900
})

export const textSlate900 = style({
  color: "#0f172a",
})

export const textSlate600 = style({
  color: "#475569",
})

export const textSlate7 = style({
  color: "#334155",
})

export const textSlate500 = style({
  color: "#64748b",
})

export const textSlate400 = style({
  color: "#94a3b8",
})

// Margins and Paddings
export const mxAuto = style({
  marginLeft: "auto",
  marginRight: "auto",
})

export const mb2 = style({
  marginBottom: "0.5rem",
})
export const mb3 = style({
  marginBottom: "0.75rem",
})
export const mb4 = style({
  marginBottom: "1rem",
})
export const mb6 = style({
  marginBottom: "1.5rem",
})
export const mb8 = style({
  marginBottom: "2rem",
})
export const mb12 = style({
  marginBottom: "3rem",
})

export const mr11 = style({
  marginRight: "0.25rem",
})
export const mr2 = style({
  marginRight: "0.5rem",
})
export const mr3 = style({
  marginRight: "0.75rem",
})

export const ml2 = style({
  marginLeft: "0.5rem",
})

export const mx22 = style({
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
})

export const px33 = style({
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
})

export const py11 = style({
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
})

export const pt6 = style({
  paddingTop: "1.5rem",
})

export const p4 = style({
  padding: "1rem",
})
export const p6 = style({
  padding: "1.5rem",
})
export const p8 = style({
  padding: "2rem",
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
  gap: "0.75rem",
})
export const gap4 = style({
  gap: "1rem",
})
export const gap66 = style({
  gap: "1.5rem",
})
export const gap8 = style({
  gap: "2rem",
})

export const gridCols11 = style({
  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
})

export const spaceY22 = style({
  selectors: {
    // This targets every direct child that is not the last child
    "& > *:not(:last-child)": {
      marginBottom: "0.5rem",
    },
  },
})

export const spaceY6 = style({
  selectors: {
    // This targets every direct child that is not the last child
    "& > *:not(:last-child)": {
      marginBottom: "1.5rem",
    },
  },
})

// Widths & Heights
export const w1_5 = style({
  width: "0.375rem",
})
export const h1_5 = style({
  height: "0.375rem",
})

export const w4 = style({
  width: "1rem",
})
export const h4 = style({
  height: "1rem",
})

export const w8 = style({
  width: "2rem",
})
export const h8 = style({
  height: "2rem",
})

export const w16 = style({
  width: "4rem",
})
export const h16 = style({
  height: "4rem",
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
  borderColor: "#e2e8f0",
})

export const borderSlate300 = style({
  borderColor: "#cbd5e1",
})

// Rounded Corners
export const roundedFull1 = style({
  borderRadius: "9999px",
})

export const roundedLg = style({
  borderRadius: "0.5rem",
})

export const roundedXl = style({
  borderRadius: "0.75rem",
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
      fontSize: '5xl', // md:text-5xl
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
  marginTop: "3rem",
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
      fontSize: '4xl', // md:text-4xl
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
  borderSlate200,
  roundedXl,
  p6,
  cardShadow,
  transitionAll,
])

export const jobCardHover = style({
  ":hover": {
    borderColor: "#a0aec0", // hover:border-slate-300
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
  marginTop: "1.5rem", // mt-6
  paddingTop: "1.5rem", // pt-6
  borderTop: "1px solid #e2e8f0", // border-t border-slate-200
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
  backgroundColor: "#94a3b8", // bg-slate-400
})
export const spanRoundedFull = roundedFull
export const spanMt2 = style({
  marginTop: "0.5rem",
})
export const spanMr3 = mr3
export const spanFlexShrink0 = flexShrink0

// Application Form Section Specific Styles
export const applicationFormBg = bgSlate50
export const applicationFormMaxW2xl = style({
  maxWidth: "42rem", // max-w-2xl
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
    fontSize: "0.875rem", // text-sm
    fontWeight: "500", // font-medium
    color: "#334155", // text-slate-700
    marginBottom: "0.5rem", // mb-2
  }),
])

export const applicationFormInput = style([
  wFull,
  px3,
  py1,
  border,
  borderSlate300,
  roundedLg,
  transitionColors,
  style({
    paddingTop: "0.75rem", // py-3
    paddingBottom: "0.75rem", // py-3
    paddingLeft: "1rem", // px-4
    paddingRight: "1rem", // px-4
    ":focus": {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      boxShadow: "0 0 0 2px #0f172a", // focus:ring-2 focus:ring-slate-900
      borderColor: "transparent", // focus:border-transparent
    },
  }),
])

export const applicationFormSelect = style([
  wFull,
  px3,
  py1,
  border,
  borderSlate300,
  roundedLg,
  transitionColors,
  style({
    paddingTop: "0.75rem", // py-3
    paddingBottom: "0.75rem", // py-3
    paddingLeft: "1rem", // px-4
    paddingRight: "1rem", // px-4
    ":focus": {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      boxShadow: "0 0 0 2px #0f172a", // focus:ring-2 focus:ring-slate-900
      borderColor: "transparent", // focus:border-transparent
    },
  }),
])

export const applicationFormTextArea = style([
  wFull,
  px3,
  py1,
  border,
  borderSlate300,
  roundedLg,
  transitionColors,
  resizeNone,
  style({
    paddingTop: "0.75rem", // py-3
    paddingBottom: "0.75rem", // py-3
    paddingLeft: "1rem", // px-4
    paddingRight: "1rem", // px-4
    ":focus": {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      boxShadow: "0 0 0 2px #0f172a", // focus:ring-2 focus:ring-slate-900
      borderColor: "transparent", // focus:border-transparent
    },
  }),
])

export const applicationFormBtnContainer = style([
  flex,
  gap4,
  style({
    "@media": {
      "screen and (min-width: 640px)": {
        flexDirection: "row", // sm:flex-row
      },
    },
  }),
])

export const applicationFormNoteContainer = style([
  style({
    marginTop: "1.5rem", // mt-6
    padding: "1rem", // p-4
    backgroundColor: "#f8fafc", // bg-slate-50
    borderRadius: "0.5rem", // rounded-lg
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
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))", // md:grid-cols-2
      },
      "screen and (min-width: 1024px)": {
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))", // lg:grid-cols-3
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