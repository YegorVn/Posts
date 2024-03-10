import styles from "./index.module.css";
import { paginationProps } from "../../types";
import { useParams } from "react-router-dom";

export const Index: React.FC<paginationProps> = ({
  totalPages,
  className,
  handlePage,
}) => {
  const { page } = useParams<{ page?: string }>();
  const currentPage = page ? parseInt(page, 10) : 1;
  const handleArrowBtn = (dir: string) => {
    if (currentPage > 1 && dir === "prev") {
      handlePage(currentPage - 1);
    }
    if (currentPage < totalPages && dir === "next") {
      handlePage(currentPage + 1);
    }
  };

  return (
    <div className={`${styles.pagination} ${className}`}>
      <button
        className={styles.prev}
        onClick={() => handleArrowBtn("prev")}></button>
      {Array.from({ length: totalPages }, (_, i) => {
        return (
          <button
            className={`${styles.btn} ${
              currentPage === i + 1 ? styles.btn_active : ""
            }`}
            key={i}
            onClick={() => {
              handlePage(i + 1);
            }}>{`${i + 1}`}</button>
        );
      })}
      <button
        className={styles.next}
        onClick={() => handleArrowBtn("next")}></button>
    </div>
  );
};
