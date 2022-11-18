import * as paginationStyles from './Pagination.css';
import { usePagination } from './usePagination';
import classNames from 'classnames';
import { Accessor, createEffect, createMemo } from 'solid-js';
import { FaSolidAngleLeft, FaSolidAngleRight } from 'solid-icons/fa';

interface PaginationProps {
  onPageChange: (page: number) => void;
  totalCount: Accessor<number>;
  siblingCount?: number;
  currentPage: Accessor<number>;
  pageSize: number;
}

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: PaginationProps) => {
  const paginationRange = createMemo(() => {
    const cp = currentPage();
    const tc = totalCount();

    return usePagination({
      currentPage: cp,
      totalCount: tc,
      siblingCount,
      pageSize,
    });
  });

  const onNext = () => onPageChange(currentPage() + 1);
  const onPrevious = () => onPageChange(currentPage() - 1);

  const lastPage = paginationRange()[paginationRange().length - 1];

  return (
    <ul class={paginationStyles.container}>
      {/* Left navigation arrow */}
      <li
        class={classNames(paginationStyles.paginationItem, {
          [paginationStyles.disabled]: currentPage() === 1,
        })}
        onClick={onPrevious}
      >
        <FaSolidAngleLeft />
      </li>
      {paginationRange().map((pageNumber) => {
        if (typeof pageNumber !== 'number') {
          return <li class={paginationStyles.dots}>&#8230;</li>;
        }
        return (
          <li
            class={classNames(paginationStyles.paginationItem, {
              selected: pageNumber === currentPage(),
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        class={classNames(paginationStyles.paginationItem, {
          [paginationStyles.disabled]: currentPage() === lastPage,
        })}
        onClick={onNext}
      >
        <FaSolidAngleRight />
      </li>
    </ul>
  );
};

export default Pagination;
