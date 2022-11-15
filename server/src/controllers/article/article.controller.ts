import express, { Request, Response } from 'express';
import { IRequest, IResponse } from '../../helpers/models/common';
import { ErrorResponse } from '../../helpers/models/error_message';
import { createArticleDatabase, getAllArticles } from './database';
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

  const article = await createArticleDatabase(value);

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

export {
  createArticleController,
  getAllArticlesController
}