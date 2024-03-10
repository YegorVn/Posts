import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { postProps } from "../../types";

export const Index: React.FC<postProps> = ({ data }) => {
  if (!data) {
    return <>Loading...</>;
  }

  return (
    <div className={styles.post}>
      <h2 className={styles.title}>{data.title}</h2>
      <div className={styles.body}>{data.body}</div>
      <Link to={`/post/${data.id}`} className={styles.link}>
        Читать далее
      </Link>
    </div>
  );
};
