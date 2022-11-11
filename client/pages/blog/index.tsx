import { NextPage } from "next";
import ArticleCardHorizontal from "../../components/article_card/horizontal";
import BackButton from "../../components/back_button";
import { list_blogs } from "./mock_blog";
import styles from "./styles.module.scss";

const ListBlog: NextPage = () => {
  return <div className={styles.container}>
    <div className={styles.leftBlock}>
      <BackButton backLink="/" />
      <h1 className={styles.title}>All posts</h1>
      <p>Total: 5</p>
    </div>
    <div className={styles.rightBlock}>
      <div className={styles.listicles}>
        {list_blogs.map(blog => <div className={styles.articleCard}>
          <ArticleCardHorizontal blog={blog} />
        </div>)}
      </div>
    </div>
  </div>
};

export default ListBlog;