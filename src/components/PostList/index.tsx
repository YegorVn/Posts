import styles from "./index.module.css";
import { Post } from "..";
import { postListProps } from "../../types";

export const Index: React.FC<postListProps> = ({ items }) => {
  return (
    <div className={styles.posts}>
      {items?.map((item) => {
        return <Post data={item} key={item.id} />;
      })}
    </div>
  );
};
