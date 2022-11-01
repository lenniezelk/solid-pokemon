import { style } from '@vanilla-extract/css';
import { theme } from '~/theme.css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.gap.small,
});

const paginationButtonBase = style({
  borderRadius: '70%',
  cursor: 'pointer',
  inset: 0,
  border: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '48px',
  height: '48px',
  fontWeight: 'bold',
  fontSize: '24px',
});

export const paginationButton = style([
  paginationButtonBase,
  { backgroundColor: theme.color.secondary, color: theme.color.coffeeDark },
]);

export const paginationButtonSelected = style([
  paginationButtonBase,
  { backgroundColor: theme.color.coffeeLight, color: theme.color.secondary },
]);
