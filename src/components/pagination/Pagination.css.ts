import { style } from '@vanilla-extract/css';
import { screen } from '~/constants';
import { theme } from '~/theme.css';

// .pagination-container {
//     display: flex;
//     list-style-type: none;

//     .pagination-item {
//       padding: 0 12px;
//       height: 32px;
//       text-align: center;
//       margin: auto 4px;
//       color: rgba(0, 0, 0, 0.87);
//       display: flex;
//       box-sizing: border-box;
//       align-items: center;
//       letter-spacing: 0.01071em;
//       border-radius: 16px;
//       line-height: 1.43;
//       font-size: 13px;
//       min-width: 32px;

//       &.dots:hover {
//         background-color: transparent;
//         cursor: default;
//       }
//       &:hover {
//         background-color: rgba(0, 0, 0, 0.04);
//         cursor: pointer;
//       }

//       &.selected {
//         background-color: rgba(0, 0, 0, 0.08);
//       }

//       .arrow {
//         &::before {
//           position: relative;
//           /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
//           content: '';
//           /* By using an em scale, the arrows will size with the font */
//           display: inline-block;
//           width: 0.4em;
//           height: 0.4em;
//           border-right: 0.12em solid rgba(0, 0, 0, 0.87);
//           border-top: 0.12em solid rgba(0, 0, 0, 0.87);
//         }

//         &.left {
//           transform: rotate(-135deg) translate(-50%);
//         }

//         &.right {
//           transform: rotate(45deg);
//         }
//       }

//       &.disabled {
//         pointer-events: none;

//         .arrow::before {
//           border-right: 0.12em solid rgba(0, 0, 0, 0.43);
//           border-top: 0.12em solid rgba(0, 0, 0, 0.43);
//         }

//         &:hover {
//           background-color: transparent;
//           cursor: default;
//         }
//       }
//     }
//   }

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
