import { TagSchema } from "../../models/Tag";

const createTagDatabase = (data) => {
  return TagSchema.create(data);
}

const getTagsDB = async ({ limit = 10, page = 1 }) => {
  try {
    const tags = await TagSchema.find().limit(limit).skip((page - 1) * limit);
    const count = await TagSchema.count();

    if (tags.length > limit) {
      return {
        docs: tags.slice(0, limit),
        total: count,
      }
    } else {
      return {
        docs: tags,
        total: count
      }
    }
  } catch (error) {
    return {
      docs: [],
      total: 0
    }
  }
}

export {
  createTagDatabase,
  getTagsDB
}