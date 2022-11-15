import callApi from "./api";

const ArticleService = {
  getAllArticles: async () => {
    const res = await callApi({
      url: "article",
      method: "GET"
    });
    if (Array.isArray(res.data)) {
      return res.data;
    } else {
      return [];
    }
  }
};

export default ArticleService;