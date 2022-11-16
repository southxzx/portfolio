import Joi from "joi";
import { TagSchema } from "../../models/Tag";
import { TopicSchema } from "../../models/Topic";

const createTopicJoi = Joi.object({
  name: Joi.string().required(),
  key: Joi.string().required(),
  // image: String
});

const getAllTopicsJoi = Joi.object({
  page: Joi.number().default(1),
  limit: Joi.number().default(10).max(50),
});

export {
  createTopicJoi,
  getAllTopicsJoi
}