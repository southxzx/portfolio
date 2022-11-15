import callApi from "./api";

const ArticleService = {
  getAllArticles: async ({ page = 1, limit = 10 }) => {
    const res = await callApi({
      url: "article",
      method: "GET",
      params: {
        page,
        limit
      }
    });
    return res.data;
  }
};

export default ArticleService;