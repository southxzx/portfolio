import { NextPage } from "next";
import { useEffect, useState } from "react";
import ArticleCardHorizontal from "../../components/article_card/horizontal";
import BackButton from "../../components/back_button";
import { IArticle } from "../../models/article";
import ArticleService from "../../services/article";
import { list_blogs } from "./mock_blog";
import styles from "./styles.module.scss";

const ListBlog: NextPage = () => {

  const [articles, setArticles] = useState<IArticle[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isNextPage, setIsNextPage] = useState<boolean>(true);

  const limit = 10;

  useEffect(() => {
    getAllArticles();
  }, [])

  const getAllArticles = async () => {
    const data = await ArticleService.getAllArticles({ page, limit });
    const docs: IArticle[] = data.doc;
    const total: number = data.total;
    setArticles(docs);

    if (total >= page * limit) {
      setIsNextPage(false);
    }
  }

  return <div className={styles.container}>
    <div className={styles.leftBlock}>
      <BackButton backLink="/" />
      <h1 className={styles.title}>All posts</h1>
      <p>Total: 5</p>
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