import { JSXElement } from 'solid-js';
import * as paginationStyles from './Pagination.css';

interface PaginationButtonProps {
  onClick: VoidFunction;
  children: JSXElement;
  current?: boolean;
}

export default function PaginationButton({
  children,
  onClick,
  current,
}: PaginationButtonProps) {
  return (
    <button
      onclick={onClick}
      class={
        current
          ? paginationStyles.paginationButtonSelected
          : paginationStyles.paginationButton
      }
    >
      {children}
    </button>
  );
}
