import { TopicSchema } from "../../models/Topic"

const createTopicDB = (data) => {
  return TopicSchema.create(data);
}

export {
  createTopicDB,
}