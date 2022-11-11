import Link from "next/link";
import { FC } from "react";
import { IArticle } from "../../../models/article";
import styles from "./styles.module.scss";

type ArticleCardProps = {
  blog: IArticle
}

const ArticleCardHorizontal: FC<ArticleCardProps> = ({ blog }) => {
  return <div className={styles.container}>
    <h2 className={styles.title}>
      <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
    </h2>
    <div className={styles.articleInfo}>
      <a className={styles.topic}>{blog.topic.name}</a>
      <p className={styles.date}>{blog.date.toDateString()}</p>
    </div>
  </div>
}

export default ArticleCardHorizontal;