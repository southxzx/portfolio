import { ArticleSchema } from "../../models/Article";
import { getTagDetail } from "../tag/database";

const createArticleDatabase = (data) => {
  return ArticleSchema.create(data);
}

const getAllArticles = async ({ limit = 10, page = 1, tag = "" }) => {
  try {
    const matchObj = {};

    if (tag) {
      const tagItem = await getTagDetail({ tag: tag });
      if (!tagItem) {
        return {
          docs: [],
          total: 0
        }
      } else
        matchObj["tags"] = tagItem._id;
    }
    const res = await ArticleSchema.aggregate([
      {
        $match: {
          ...matchObj
        }
      },
      {
        $limit: limit + 1,
      },
      {
        $skip: limit * (page - 1),

      },
      {
        $sort: {
          _id: -1,
          createdAt: -1
        }
      },
      {
        $lookup: {
          from: 'topics',
          localField: 'topic',
          foreignField: '_id',
          as: 'topic'
        }
      },
      {
        $lookup: {
          from: 'tags',
          localField: 'tags',
          foreignField: '_id',
          as: 'tags'
        }
      },
      {
        $facet: {
          docs: [{ $skip: limit * (page - 1) }, { $limit: limit + 1 }],
          total: [
            {
              $count: 'count'
            }
          ]
        }
      }
    ]);

    const data = res[0];
    data.total = data.total[0].count;

    // get total documents in the Posts collection 
    const count = await ArticleSchema.count();

    return data;

    // if (true) {
    //   // listArticles["docs"] = articles.slice(0, limit);
    //   // return listArticles;
    //   return data;
    // } else {
    //   listArticles["docs"] = articles;
    //   return listArticles;
    // }
  } catch (error) {
    return {
      docs: [],
      total: 0
    }
  }
}

const getArticleBySlug = async (slug: string) => {
  try {
    const article = await (await ArticleSchema
      .findOne({ slug }))
      .populate({
        path: "tags",
      });;
    return article;
  } catch (error) {
    return null;
  }
}

export {
  createArticleDatabase,
  getAllArticles,
  getArticleBySlug
}