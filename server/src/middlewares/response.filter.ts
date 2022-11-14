import { Request, Response, NextFunction } from "express";
import { ICustomResponse, IRequest, IResponse } from "../helpers/models/common";

export default (req: IRequest, res: IResponse, next: NextFunction) => {

  const returnResponse = ({ isError, message, data = {}, error }: ICustomResponse) => {
    if (isError) {
      res.status(400).send({
        message,
        data,
        error,
      });
    } else {
      res.status(200).send({
        message,
        data,
      })
    }
  }

  req.customRes = returnResponse;
  return next();
}