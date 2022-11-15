import { style } from '@vanilla-extract/css';
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
  padding: `0 ${theme.gap.medium}`,
  height: theme.gap.large,
  textAlign: 'center',
  margin: `auto ${theme.gap.small}`,
  color: theme.color.primary,
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  letterSpacing: '0.01071em',
  borderRadius: theme.gap.medium,
  lineHeight: 1.43,
  fontSize: theme.gap.medium,
  minWidth: theme.gap.large,
  selectors: {
    '&:hover': {
      backgroundColor: theme.color.secondary,
      cursor: 'pointer',
    },
  },
});

export const dotsButton = style({
  selectors: {
    [`${paginationItem}:hover > &`]: {
      backgroundColor: 'transparent',
      cursor: 'default',
    },
  },
});

export const disabled = style({
  pointerEvents: 'none',
  selectors: {
    '&:hover': {
      backgroundColor: 'transparent',
      cursor: 'default',
    },
  },
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
  transition: 'background-color 0.5s ease-out',
});

export const paginationButton = style([
  paginationButtonBase,
  {
    backgroundColor: theme.color.secondary,
    color: theme.color.coffeeDark,
    selectors: {
      '&:hover': {
        color: theme.color.secondary,
        backgroundColor: theme.color.coffeeDark,
      },
    },
  },
]);

export const paginationButtonSelected = style([
  paginationButtonBase,
  {
    backgroundColor: theme.color.coffeeLight,
    color: theme.color.secondary,
    selectors: {
      '&:hover': {
        color: theme.color.coffeeLight,
        backgroundColor: theme.color.secondary,
      },
    },
  },
]);
