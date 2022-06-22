import { pxToRem, responsiveFontSizes } from '../utils/getFontValue';
import BG_Regular_woff2 from './../../public/fonts/univers_bq_regular-webfont.woff2';

// ----------------------------------------------------------------------
const FONT_PRIMARY = ' Univers BQ Regular,Open Sans, Roboto, Arial, sans-serif'; // Google Font

// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font
        
console.log('BG_Regular_woff2:',BG_Regular_woff2)
export const BG_Regular = {
  fontFamily: 'univers_bqregular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,

  src: `
    local('Univers'),
    local('Univers-Regular'),
    url(${BG_Regular_woff2}) format('woff2')
  `,

};

const typography = {
  /*
  fontFamily: ['BG_Regular, Univers,Open Sans, Arial,sans-serif'].join(','),
  */
 fontFamily: ['BG_Regular, Univers,Open Sans, Arial,sans-serif'].join(','),
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,

  h1: {
    fontWeight: 400,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    letterSpacing: 2,
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 400,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 400,
    lineHeight: 55 / 35,
    fontSize: pxToRem(28),
    ...responsiveFontSizes({ sm: 30, md: 32, lg: 35 }),
  },
  h4: {
    fontWeight: 400,
    lineHeight: 52 / 44,
    fontSize: pxToRem(38),
    ...responsiveFontSizes({ sm: 40, md: 42, lg: 44 }),
  },
  h5: {
    fontWeight: 400,
    lineHeight: 40 / 37,
    fontSize: pxToRem(28),
    ...responsiveFontSizes({ sm: 30, md: 33, lg: 37 }),
  },
  h6: {
    fontWeight: 400,
    lineHeight: 23 / 20,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 20 }),
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
  },
  subtitle2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    fontWeight: 400,
    lineHeight: 30 / 25,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 22, md: 22, lg: 25 }),
  },
  body2: {
    fontWeight: 400,
    lineHeight: 23 / 20,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 20 }),
  },
  caption: {
    lineHeight: 28 / 24,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 22, lg: 24 }),
  },
  overline: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 400,
    lineHeight: 28 / 24,
    fontSize: pxToRem(20),
    textTransform: 'capitalize',
    ...responsiveFontSizes({ sm: 22, md: 24, lg: 28 }),

  },
} as const;

export default typography;
