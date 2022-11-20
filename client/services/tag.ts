import { ITag } from "@Models/article";
import { IReponseList } from "@Models/common";
import callApi from "./api";

const TagService = {
  getAllTags: async ({ page = 1, limit = 10 }): Promise<IReponseList<ITag>> => {
    const res = await callApi({
      url: "tag",
      method: "GET",
      params: {
        page,
        limit
      }
    });
    return res.data;
  },
  getTagDetail: async ({ tag = "" }): Promise<ITag> => {
    const res = await callApi({
      url: `tag/${tag}`,
      method: "GET",
    });
    return res.data;
  }
};

export default TagService;