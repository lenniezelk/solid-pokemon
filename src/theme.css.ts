import { createGlobalTheme } from '@vanilla-extract/css';

export const theme = createGlobalTheme(':root', {
  color: {
    primary: '#EED6D3',
    secondary: '#E8B4B8',
    coffeeLight: '#A49393',
    coffeeDark: '#67595E',
  },
  font: {
    body: 'helvetica, arial, sans-serif',
    header: 'montserrat, sans-serif',
  },
  gap: {
    none: '0',
    small: '8px',
    medium: '16px',
    large: '24px',
  },
});
