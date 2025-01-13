import { FC } from 'react';
import { getPagesArray } from '@/entities/pagination/pages-count';
import styles from './index.module.scss';
import clsx from 'clsx';

interface PaginationProps {
  page: number;
  totalPages: number;
  changePage: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({ page, totalPages, changePage }) => {
  const pagesArray = getPagesArray(totalPages);

  return (
    <div className={styles.paginationWrapper}>
      {pagesArray.map(p =>
        <button
          className={clsx(styles.button, {
            [styles.buttonActive]: page === p
          })}
          key={p}
          onClick={() => changePage(p)}
        >{p}</button>
      )}
    </div>
  );
};
