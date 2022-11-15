import { ArticleSchema } from "../../models/Article";

const createArticleDatabase = (data) => {
  console.log("🚀 ~ file: database.ts ~ line 4 ~ createArticleDatabase ~ data", data)
  return ArticleSchema.create(data);
}

const getAllArticles = async ({ limit = 10, page = 1 }) => {
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
      }
    ]);

    // get total documents in the Posts collection 
    const count = await ArticleSchema.count();

    let listArticles = {
      total: count
    };

    if (articles.length > limit) {
      listArticles["doc"] = articles.slice(0, limit);
      return listArticles;
    } else {
      listArticles["doc"] = articles;
      return listArticles;
    }
  } catch (error) {
    return {
      doc: [],
      total: 0
    }
  }
}

export {
  createArticleDatabase,
  getAllArticles
}