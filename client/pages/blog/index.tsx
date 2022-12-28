import useIntersectionObserver from "helpers/hooks/useIntersectionObserver";
import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import ArticleCardHorizontal from "../../components/article_card/horizontal";
import BackButton from "../../components/back_button";
import { IArticle } from "../../models/article";
import ArticleService from "../../services/article";
import {
  Heading, Text
} from "@chakra-ui/react";

import styles from "./styles.module.scss";

const ListBlog: NextPage = () => {

  const [articles, setArticles] = useState<IArticle[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isNextPage, setIsNextPage] = useState<boolean>(true);
  const [total, setTotal] = useState<number>(0);

  const loadmoreRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(loadmoreRef, {});
  const isVisible = !!entry?.isIntersecting;

  const limit = 10;

  useEffect(() => {
    getAllArticles();
  }, [page]);

  useEffect(() => {
    if (isVisible) {
      setPage(prev => prev + 1);
    }
  }, [isVisible]);

  const getAllArticles = async () => {
    const data = await ArticleService.getAllArticles({ page, limit });
    const docs: IArticle[] = data.docs;
    const totalArticle: number = data.total;

    if (total === 0) {
      setTotal(totalArticle);
    }
    setArticles(prev => [...prev, ...docs]);

    if (total >= page * limit) {
      setIsNextPage(false);
    }
  }

  return <div className={styles.container}>
    <div className={styles.leftBlock}>
      <BackButton backLink="/" label="" />
      <Heading size="lg" className={styles.titleAllPosts}>All posts</Heading>
      <Text fontWeight="bold" className={styles.totalCountLabel} mt={2}>Total: {total}</Text>
    </div>
    <div className={styles.rightBlock}>
      <div className={styles.listicles}>
        {articles.map(blog => <div className={styles.articleCard} key={blog._id}>
          <ArticleCardHorizontal blog={blog} key={blog._id} />
        </div>)}
        <div ref={loadmoreRef} />
      </div>
    </div>
  </div>
};

export default ListBlog;