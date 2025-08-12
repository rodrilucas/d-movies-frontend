import { visiblePages } from "@/utils/visible-pages";
import styles from "./pagination.module.scss";

type PaginationProps = {
  totalPages: number;
  totalItems: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  totalPages,
  totalItems,
  pageSize,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const renderedVisiblePages = visiblePages(currentPage, totalPages).map(
    (item, index) =>
      item === "..." ? (
        <span key={`ellipsis-${index}`} className={styles.ellipsis}>
          ...
        </span>
      ) : (
        <button
          key={item}
          className={styles.button}
          onClick={() => onPageChange(item)}
          disabled={currentPage === item}
          aria-current={currentPage === item ? "page" : undefined}
        >
          {item}
        </button>
      )
  );

  return (
    <div className={styles.pagination}>
      <div className={`${styles.info}`}>
        <span className={styles.highlight}>Mostrando </span>
        <span className={styles.info_highlight}>
          {(Number(currentPage || 0) - 1) * Number(pageSize || 0)  + 1}
        </span>
        <span className={styles.highlight}>a </span>
        <span className={styles.info_highlight}>
          {Math.min(
            Number(currentPage || 0) * Number(pageSize || 0),
            Number(totalItems || 0)
          )}
        </span> 

        <span className={styles.highlight}> de </span>
        <span className={styles.info_highlight}>{totalItems}</span>
        <span className={styles.highlight}> itens</span>
      </div>
      <div className={styles.pages}>{renderedVisiblePages}</div>
    </div>
  );
}
