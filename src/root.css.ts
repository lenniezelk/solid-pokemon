import { globalStyle, style } from '@vanilla-extract/css';

import { theme } from './theme.css';

globalStyle('html, body', {
  margin: 0,
  fontFamily: theme.font.body,
  backgroundColor: theme.color.primary,
});

globalStyle('main', {
  marginTop: theme.gap.medium,
});

globalStyle('h1,h2,h3,h4,h5', {
  fontFamily: theme.font.header,
  fontWeight: 'bold',
  margin: 0,
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
