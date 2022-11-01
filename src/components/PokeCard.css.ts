import { style } from '@vanilla-extract/css';
import { theme } from '~/theme.css';

export const pokeCard = style({
  width: '100%',
  height: '300px',
  position: 'relative',
});

export const pokeCardImg = style({
  selectors: {
    [`${pokeCard} > &`]: {
      objectFit: 'contain',
    },
    [`${pokeCard}:hover > &`]: {
      transform: 'scale(1.1)',
    },
  },
  transition: 'transform 0.25s ease-out',
});

export const name = style({
  selectors: {
    [`${pokeCard} > &`]: {
      backgroundColor: theme.color.coffeeDark,
      padding: theme.gap.small,
      fontWeight: 'bold',
      textDecoration: 'none',
      position: 'absolute',
      bottom: theme.gap.small,
      left: theme.gap.medium,
      color: theme.color.secondary,
      textTransform: 'capitalize',
      fontSize: '1.2rem',
    },
  },
});
