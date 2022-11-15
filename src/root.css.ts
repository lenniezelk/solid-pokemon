import { globalStyle, style } from '@vanilla-extract/css';

import { theme } from './theme.css';

globalStyle(`*`, {
  boxSizing: `border-box`,
  margin: 0,
});

globalStyle(`html, body`, {
  height: `100%`,
  fontSize: `18px`,
});

globalStyle(`body`, {
  lineHeight: 1.5,
  WebkitFontSmoothing: `antialiased`,
});

globalStyle(`img, picture, video, canvas, svg`, {
  display: `block`,
  maxWidth: `100%`,
});

globalStyle(`input, button, textarea, select`, {
  font: `inherit`,
});

globalStyle(`p, h1, h2, h3, h4, h5, h6`, {
  overflowWrap: `break-word`,
});

globalStyle(`#root`, {
  isolation: `isolate`,
});

globalStyle('html, body', {
  fontFamily: theme.font.body,
  backgroundColor: theme.color.primary,
});

globalStyle('main', {
  marginTop: theme.gap.medium,
});

globalStyle('h1,h2,h3,h4,h5', {
  fontFamily: theme.font.header,
  fontWeight: 'bold',
  color: theme.color.coffeeDark,
});

globalStyle('h1', {
  fontSize: '2.5rem',
});

export const container = style({
  maxWidth: '900px',
  padding: `0 ${theme.gap.small}`,
  margin: `${theme.gap.large} auto 0`,
  '@media': {
    'screen and (min-width: 480px)': {
      padding: `0 ${theme.gap.large}`,
    },
  },
});

globalStyle('img', {
  width: '100%',
  height: '100%',
});

globalStyle('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

globalStyle('nav > a', {
  textDecoration: 'none',
});
