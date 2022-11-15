import { JSXElement } from 'solid-js';
import * as paginationStyles from './Pagination.css';

interface PaginationButtonProps {
  onClick: VoidFunction;
  children: JSXElement;
  current?: boolean;
  title: string;
}

export default function PaginationButton({
  children,
  onClick,
  current,
  title,
}: PaginationButtonProps) {
  return (
    <button
      disabled={current}
      onclick={onClick}
      class={
        current
          ? paginationStyles.paginationButtonSelected
          : paginationStyles.paginationButton
      }
      title={title}
    >
      {children}
    </button>
  );
}
