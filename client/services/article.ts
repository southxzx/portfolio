import { config } from "process";
import { IArticle, IArticleWirting } from "../models/article";
import { IReponseList } from "../models/common";
import callApi from "./api";

const ArticleService = {
  getAllArticles: async ({ page = 1, limit = 10, tag = "" }): Promise<IReponseList<IArticle>> => {
    const res = await callApi({
      url: "article",
      method: "GET",
      params: {
        page,
        limit,
        ...(tag.length > 0 && { tag })
      }
    });
    return res.data;
  },

  createArticle: async (article: IArticleWirting) => {
    try {
      const res = await callApi({
        url: "article",
        method: "POST",
        params: article
      });
    } catch (error) {

    }
  },

  getArticleDetail: async (slug: string): Promise<IArticle> => {
    try {
      const res = await callApi({
        url: `article/${slug}`,
        method: "GET"
      });
      return res.data;
    } catch (error) {
      throw new Error();
    }
  },

  getArticleDetailById: async (id: string): Promise<IArticle> => {
    try {
      const res = await callApi({
        url: `article-id/${id}`,
        method: "GET"
      });
      return res.data;
    } catch (error) {
      throw new Error();
    }
  }
};

export default ArticleService;