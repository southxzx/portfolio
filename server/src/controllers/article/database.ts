import { ArticleSchema } from "../../models/Article";

const createArticleDatabase = (data) => {
  return ArticleSchema.create(data);
}

export {
  createArticleDatabase,
}