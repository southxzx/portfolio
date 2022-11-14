import Joi from "joi";

const createTagJoi = Joi.object({
  name: Joi.string().required(),
  key: Joi.string().required(),
  // image: String
});

export {
  createTagJoi
}