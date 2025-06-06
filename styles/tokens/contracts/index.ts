import { createThemeContract } from '@vanilla-extract/css';
import { colorVars } from './color';
import { spacingVars } from './spacing';
import { fontVars } from './font';
import { fontSizeVars } from './fontSize';
import { fontWeightVars } from './fontWeight';
import { radiusVars } from './radius';

export const vars = createThemeContract({
  color: colorVars,
  spacing: spacingVars,
  font: fontVars,
  fontSize: fontSizeVars,
  fontWeight: fontWeightVars,
  radius: radiusVars,
});
