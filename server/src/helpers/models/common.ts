import { Response, Request } from "express";
import Joi from "joi";

interface IResponse extends Response {
  customRes: (data: ICustomResponse) => void;
};

type ICustomResponse = {
  isError: boolean,
  error?: Joi.ValidationErrorItem[],
  data?: any,
  message: string,
}

interface IRequest extends Request {
  customRes: (data: ICustomResponse) => void;
}

export type {
  IResponse,
  IRequest,
  ICustomResponse
}