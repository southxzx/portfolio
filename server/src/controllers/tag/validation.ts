import Joi from "joi";

const createTagJoi = Joi.object({
  name: Joi.string().required(),
  key: Joi.string().required(),
  // image: String
});

const getAllTagsJoi = Joi.object({
  page: Joi.number().default(1),
  limit: Joi.number().default(10).max(50),
});

export {
  createTagJoi,
  getAllTagsJoi
}