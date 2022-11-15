import { ArticleSchema } from "../../models/Article";

const createArticleDatabase = (data) => {
  console.log("🚀 ~ file: database.ts ~ line 4 ~ createArticleDatabase ~ data", data)
  return ArticleSchema.create(data);
}

const getAllArticles = async ({ limit = 10 }) => {
  try {
    const articles = await ArticleSchema.aggregate([
      {
        $match: {
          // status: "PUBLISHED"
        }
      },
      {
        $limit: limit + 1,
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
      }
    ]);
    if (articles.length > limit) {
      return articles.slice(0, limit);
    } else {
      return articles;
    }
  } catch (error) {
    return [];
  }
}

export {
  createArticleDatabase,
  getAllArticles
}