import * as paginationStyles from './Pagination.css';
import PaginationButton from './PaginationButton';
import {
  FaSolidBackward,
  FaSolidCaretLeft,
  FaSolidCaretRight,
  FaSolidForward,
} from 'solid-icons/fa';

interface PaginationProps {
  totalCount: number;
  onPaginate: (offset: number) => void;
}

export default function Pagination({
  totalCount,
  onPaginate,
}: PaginationProps) {
  const onClick = () => console.log('Go to...');

  return (
    <div class={paginationStyles.container}>
      <PaginationButton onClick={onClick}>
        <FaSolidBackward size={24} />
      </PaginationButton>
      <PaginationButton onClick={onClick}>
        <FaSolidCaretLeft size={24} />
      </PaginationButton>
      <PaginationButton onClick={onClick}>1</PaginationButton>
      <PaginationButton onClick={onClick} current={true}>
        2
      </PaginationButton>
      <PaginationButton onClick={onClick}>3</PaginationButton>
      <PaginationButton onClick={onClick}>4</PaginationButton>
      <PaginationButton onClick={onClick}>
        <FaSolidCaretRight size={24} />
      </PaginationButton>
      <PaginationButton onClick={onClick}>
        <FaSolidForward size={24} />
      </PaginationButton>
    </div>
  );
}
