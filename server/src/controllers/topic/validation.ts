import Joi from "joi";
import { TagSchema } from "../../models/Tag";
import { TopicSchema } from "../../models/Topic";

const createTopicJoi = Joi.object({
  name: Joi.string().required(),
  key: Joi.string().required(),
  // image: String
});

export {
  createTopicJoi
}