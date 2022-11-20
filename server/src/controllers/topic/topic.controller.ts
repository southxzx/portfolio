import { Response } from "express"
import { IRequest } from "../../helpers/models/common"
import { ErrorResponse } from "../../helpers/models/error_message";
import { createTopicDB, getTopicsDB } from "./database";
import { createTopicJoi, getAllTopicsJoi } from "./validation";

const createTopicController = async (req: IRequest, res: Response) => {
  const { error, value } = await createTopicJoi.validate(req.body);

  if (error) {
    return req.customRes({
      isError: true,
      error: error.details,
      message: ErrorResponse.INVALID_PARAMS,
      // res
    });
  }

  const article = await createTopicDB(value);

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

const getAllTopicsController = async (req: IRequest, res: Response) => {
  const { error, value } = await getAllTopicsJoi.validate(req.query);

  if (error) {
    return req.customRes({
      isError: true,
      error: error.details,
      message: ErrorResponse.INVALID_PARAMS,
      // res
    });
  } else {
    const topics = await getTopicsDB(value);

    return req.customRes({
      isError: false,
      message: ErrorResponse.GET_SUCCESSFUL,
      data: topics
    });
  }
}

export {
  createTopicController,
  getAllTopicsController
}