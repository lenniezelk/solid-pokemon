import * as paginationStyles from './Pagination.css';
import PaginationButton from './PaginationButton';
import {
  FaSolidBackward,
  FaSolidCaretLeft,
  FaSolidCaretRight,
  FaSolidForward,
} from 'solid-icons/fa';
import { createSignal } from 'solid-js';
import { RowsPerPage } from '~/constants';

const paginationSlots = 3;

const totalPages = (resultsCount: number): number => {
  if (resultsCount === 0) return 0;
  let pages = Math.floor(resultsCount / RowsPerPage);
  if (resultsCount % RowsPerPage !== 0) {
    pages += 1;
  }
  return pages;
};

const offsetFromPage = (page: number, totalPages: number): number =>
  page * RowsPerPage - RowsPerPage;

interface PaginationProps {
  totalCount: number;
  onPaginate: (offset: number) => void;
}

export default function Pagination({
  totalCount,
  onPaginate,
}: PaginationProps) {
  const numberOfPages = totalPages(totalCount);
  console.log('Number of pages: ', numberOfPages);
  if (numberOfPages === 0) return null;
  const onClick = () => console.log('Go to...');
  const [page, setPage] = createSignal(1);

  return (
    <div class={paginationStyles.container}>
      <PaginationButton onClick={() => onPaginate(0)} title="First Page">
        <FaSolidBackward size={24} />
      </PaginationButton>
      <PaginationButton onClick={onClick} title="Previous Page">
        <FaSolidCaretLeft size={24} />
      </PaginationButton>
      <PaginationButton onClick={onClick} title="Page 1">
        1
      </PaginationButton>
      <PaginationButton onClick={onClick} current={true} title="Page 2">
        2
      </PaginationButton>
      <PaginationButton onClick={onClick} title="Page 3">
        3
      </PaginationButton>
      <PaginationButton onClick={onClick} title="Next Page">
        <FaSolidCaretRight size={24} />
      </PaginationButton>
      <PaginationButton onClick={onClick} title="Last Page">
        <FaSolidForward size={24} />
      </PaginationButton>
    </div>
  );
}
