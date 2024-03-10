import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { Pagination, PostList } from "../../components";
import { post } from "../../types";
import { useNavigate, useParams } from "react-router-dom";

export const Index: React.FC = () => {
  const navigate = useNavigate();
  const { page } = useParams<{ page?: string }>();
  const currentPage = page ? parseInt(page, 10) : 1;
  const [posts, setPosts] = useState<Array<post>>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const postsPerPage = 10;

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postsPerPage}`,
        { method: "GET" }
      );
      const data = await response.json();
      const total = response.headers.get("x-total-count");
      setPosts(data);
      setTotalPages(Math.ceil(total ? parseInt(total, 10) / postsPerPage : 0));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePage = (page: number) => {
    navigate(`/main/${page}`);
  };

  if (!posts.length) {
    <>Loading...</>;
  }

  return (
    <>
      <PostList items={posts} />
      <Pagination
        totalPages={totalPages}
        handlePage={handlePage}
        className={styles.pagination}
      />
    </>
  );
};
