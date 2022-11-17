import { globalStyle, style } from '@vanilla-extract/css';
import { screen } from '~/constants';
import { theme } from '~/theme.css';

export const container = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  '@media': {
    [`screen and (min-width: ${screen.sm})`]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
});

export const label = style({
  color: theme.color.coffeeDark,
  fontWeight: 'bold',
  marginRight: theme.gap.medium,
  font: theme.font.header,
  textTransform: 'capitalize',
});

export const statsContainer = style({
  marginTop: theme.gap.medium,
});

export const statsItem = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  borderBottom: `1px solid ${theme.color.coffeeLight}`,
  padding: `${theme.gap.medium} 0`,
});

export const statsLabelContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export const stat = style({
  textTransform: 'capitalize',
});

globalStyle(`${statsContainer} h2`, {
  textAlign: 'center',
});
