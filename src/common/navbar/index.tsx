import { Link } from "react-router-dom";
import styles from "./index.module.css";

export const Index: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.body}>
        <Link to="/main" className={styles.link}>
          Главная
        </Link>
      </div>
    </div>
  );
};
