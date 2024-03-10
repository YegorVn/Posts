import { useParams } from "react-router-dom";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../../types";

export const Index = () => {
  const navigate = useNavigate();
  const id = useParams().id;
  const [post, setPost] = useState<post>();

  const fetchPost = async (id: string | undefined) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        { method: "GET" }
      );
      const data = await response.json();
      setPost(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPost(id);
  }, []);

  return (
    <div className={styles.post}>
      <h1 className={styles.title}>{post?.title}</h1>
      <div className={styles.body}>{post?.body}</div>
      <button onClick={() => navigate(-1)} className={styles.btn}>
        Назад
      </button>
    </div>
  );
};
