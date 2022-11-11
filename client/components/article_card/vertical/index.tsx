import { FC } from "react";
import { IArticle } from "../../../models/article";
import styles from "./styles.module.scss";

type ArticleCardProps = {
  blog: IArticle
}

const ArticleCardVerticle: FC<ArticleCardProps> = ({ blog }) => {
  return <div>
    <h2>{blog.title}</h2>
  </div>
}

export default ArticleCardVerticle;