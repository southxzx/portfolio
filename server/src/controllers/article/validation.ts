import Joi from "joi";
import { TagSchema } from "../../models/Tag";
import { TopicSchema } from "../../models/Topic";

const createArticle = Joi.object({
  title: Joi.string().required(),
  topic: TopicSchema,
  tag: [TagSchema],
  content: Joi.array().items(Joi.string()),
  // topicId: Joi.string().required(),
  // tagId: Joi.array().items(Joi.string()),
});

export {
  createArticle
}