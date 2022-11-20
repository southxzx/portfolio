import callApi from "./api";

const TopicService = {
  getAllTopics: async ({ page = 1, limit = 10 }) => {
    const res = await callApi({
      url: "topic",
      method: "GET",
      params: {
        page,
        limit
      }
    });
    return res.data;
  }
};

export default TopicService;