import { style } from '@vanilla-extract/css';
import { screen } from '~/constants';
import { theme } from '~/theme.css';

export const container = style({
  display: 'flex',
  listStyleType: 'none',
});

export const paginationItem = style({
  color: theme.color.coffeeLight,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  fontSize: theme.fontSize.lg,
  width: '30px',
  height: '30px',
  margin: `0 ${theme.gap.small}`,
  ':hover': {
    backgroundColor: theme.color.secondary,
    cursor: 'pointer',
  },
  selectors: {
    '&.selected': {
      backgroundColor: theme.color.coffeeDark,
    },
  },
  '@media': {
    [`screen and (min-width: ${screen.sm})`]: {
      fontSize: theme.fontSize['2xl'],
      width: '40px',
      height: '40px',
    },
  },
});

export const dots = style({
  ':hover': {
    backgroundColor: 'transparent',
    cursor: 'default',
  },
});

export const disabled = style({
  pointerEvents: 'none',
  ':hover': {
    backgroundColor: 'transparent',
    cursor: 'default',
  },
});

export const arrow = style({
  selectors: {
    '&::before': {
      position: 'relative',
      /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
      content: '',
      /* By using an em scale, the arrows will size with the font */
      display: 'inline-block',
      width: '0.4em',
      height: '0.4em',
      borderRight: `0.12em solid ${theme.color.coffeeDark}`,
      borderTop: `0.12em solid ${theme.color.coffeeDark}`,
    },
    [`${disabled} &::before`]: {
      borderRight: `0.12em solid ${theme.color.coffeeDark}`,
      borderTop: `0.12em solid ${theme.color.coffeeDark}`,
    },
    [`${disabled} &::before`]: {
      backgroundColor: 'transparent',
      cursor: 'default',
    },
  },
});

export const arrowLeft = style([
  arrow,
  {
    transform: 'rotate(-135deg) translate(-50%)',
  },
]);

export const arrowRight = style([
  arrow,
  {
    transform: 'rotate(45deg)',
  },
]);
