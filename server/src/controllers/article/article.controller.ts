import express, { Request, Response } from 'express';
import { IRequest, IResponse } from '../../helpers/models/common';
import { ErrorResponse } from '../../helpers/models/error_message';
import { createArticleDatabase } from './database';
import { createArticle } from './validation';

const createArticleController = async (req: IRequest, res: IResponse) => {
  // const resp = req.res;
  const { error, value } = await createArticle.validate(req.body);

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

export {
  createArticleController,
}