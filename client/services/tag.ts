import callApi from "./api";

const TagService = {
  getAllTags: async ({ page = 1, limit = 10 }) => {
    const res = await callApi({
      url: "tag",
      method: "GET",
      params: {
        page,
        limit
      }
    });
    return res.data;
  }
};

export default TagService;