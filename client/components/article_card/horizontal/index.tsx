import Link from "next/link";
import { FC } from "react";
import { timeAgo } from "../../../helpers/utils/date_time";
import { IArticle } from "../../../models/article";
import styles from "./styles.module.scss";

type ArticleCardProps = {
  blog: IArticle
}

const ArticleCardHorizontal: FC<ArticleCardProps> = ({ blog }) => {

  const topic = blog.topic.length > 0 ? blog.topic[0] : null;

  // console.log("🚀 ~ file: index.tsx ~ line 11 ~ blog", blog)
  return <div className={styles.container}>
    <h2 className={styles.title}>
      <Link href={`/blog/${blog._id}`}>{blog.title}</Link>
    </h2>
    <div className={styles.articleInfo}>
      <a className={styles.topic}>{topic?.name}</a>
      <p className={styles.date}>{timeAgo(blog.createdAt)}</p>
    </div>
  </div>
}

export default ArticleCardHorizontal;