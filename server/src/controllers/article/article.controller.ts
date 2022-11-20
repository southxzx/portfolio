import express, { Request, Response } from 'express';
import { IRequest, IResponse } from '../../helpers/models/common';
import { ErrorResponse } from '../../helpers/models/error_message';
import { createArticleDatabase, getAllArticles, getArticleBySlug } from './database';
import { titleToSlug } from './utils';
import * as validation from './validation';

const createArticleController = async (req: IRequest, res: IResponse) => {
  const { error, value } = await validation.createArticle.validate(req.body);

  if (error) {
    return req.customRes({
      isError: true,
      error: error.details,
      message: ErrorResponse.INVALID_PARAMS,
      // res
    });
  }

  const slug: string = titleToSlug(value.title);
  const article = await createArticleDatabase({ ...value, slug });

  if (!article) {
    return req.customRes({
      isError: true,
      error: error.details,
      message: ErrorResponse.FAILD_TO_CREATE,
      // res
    });
  } else {
    return req.customRes({
      isError: false,
      // error: error,
      message: ErrorResponse.CREATED_SUCCESFULLY,
      // res
    });
  }
}

const getAllArticlesController = async (req: IRequest, res) => {
  const { error, value } = validation.getAllArticles.validate(req.query);
  if (error) {
    return req.customRes({
      isError: true,
      error: error.details,
      message: ErrorResponse.INVALID_PARAMS,
    });
  } else {
    const articles = await getAllArticles(value);

    return req.customRes({
      isError: false,
      message: ErrorResponse.GET_SUCCESSFUL,
      data: articles
    });

  }
}

const getArticleDetail = async (req: IRequest) => {
  const { error, value } = validation.getDetailArticle.validate(req.params);

  if (error) {
    return req.customRes({
      isError: true,
      error: error.details,
      message: ErrorResponse.INVALID_PARAMS,
    });
  } else {
    const article = await getArticleBySlug(value.slug);

    return req.customRes({
      isError: false,
      message: ErrorResponse.GET_SUCCESSFUL,
      data: article
    });

  }
}

export {
  createArticleController,
  getAllArticlesController,
  getArticleDetail
}