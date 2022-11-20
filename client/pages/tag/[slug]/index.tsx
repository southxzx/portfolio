import { NextPage } from "next";
import { useEffect, useState } from "react";
import { IArticle } from "@Models/article";
import styles from "./styles.module.scss";
import ArticleService from "services/article";
import BackButton from "components/back_button";
import ArticleCardHorizontal from "components/article_card/horizontal";

const ListBlog: NextPage = () => {

  const [articles, setArticles] = useState<IArticle[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isNextPage, setIsNextPage] = useState<boolean>(true);
  const [total, setTotal] = useState<number>(0);

  const limit = 10;

  useEffect(() => {
    getAllArticles();
  }, [])

  const getAllArticles = async () => {
    const data = await ArticleService.getAllArticles({ page, limit });
    const docs: IArticle[] = data.docs;
    const totalArticle: number = data.total;

    if (total === 0) {
      setTotal(totalArticle);
    }
    setArticles(docs);

    if (total >= page * limit) {
      setIsNextPage(false);
    }
  }

  return <div className={styles.container}>
    <div className={styles.leftBlock}>
      <BackButton backLink="/" label="" />
      <h1 className={styles.titleAllPosts}>All posts</h1>
      <p className={styles.totalCountLabel}>Total: {total}</p>
    </div>
    <div className={styles.rightBlock}>
      <div className={styles.listicles}>
        {articles.map(blog => <div className={styles.articleCard}>
          <ArticleCardHorizontal blog={blog} key={blog._id} />
        </div>)}
      </div>
    </div>
  </div>
};

export default ListBlog;