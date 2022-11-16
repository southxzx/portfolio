import { TopicSchema } from "../../models/Topic"

const createTopicDB = (data) => {
  return TopicSchema.create(data);
}

const getTopicsDB = async ({ limit = 10, page = 1 }) => {
  try {
    const topics = await TopicSchema.find().limit(limit).skip((page - 1) * limit);
    const count = await TopicSchema.count();

    if (topics.length > limit) {
      return {
        docs: topics.slice(0, limit),
        total: count,
      }
    } else {
      return {
        docs: topics,
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
  createTopicDB,
  getTopicsDB
}