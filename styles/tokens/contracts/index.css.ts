import { createThemeContract } from '@vanilla-extract/css';
import { colorVars } from './color.css';
import { spacingVars } from './spacing.css';
import { fontVars } from './font.css';
import { fontSizeVars } from './fontSize.css';
import { fontWeightVars } from './fontWeight.css';
import { radiusVars } from './radius.css';
import { shadowVars } from './shadow.css';

export const vars = createThemeContract({
  color: colorVars,
  spacing: spacingVars,
  font: fontVars,
  fontSize: fontSizeVars,
  fontWeight: fontWeightVars,
  radius: radiusVars,
  shadow: shadowVars
});
