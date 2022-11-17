import { style } from '@vanilla-extract/css';
import { theme } from '~/theme.css';

export const pokeGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  '@media': {
    'screen and (min-width: 480px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});

export const paginationContainer = style({
  margin: `${theme.gap.xlarge} 0`,
  display: 'flex',
  justifyContent: 'center',
});
