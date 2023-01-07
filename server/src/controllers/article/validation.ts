import Joi from "joi";

const createArticle = Joi.object({
  title: Joi.string().required(),
  topic: Joi.string().hex().length(24).required(),
  tags: Joi.array().items(Joi.string().hex().length(24)),
  content: Joi.string(),
});

const getAllArticles = Joi.object({
  page: Joi.number().default(1),
  limit: Joi.number().default(10).max(50),
  tag: Joi.string().default("")
});

const getDetailArticle = Joi.object({
  slug:  Joi.string().required(),
});

const getDetailArticleById = Joi.object({
  id:  Joi.string().required(),
});

export {
  createArticle,
  getAllArticles,
  getDetailArticle,
  getDetailArticleById
}