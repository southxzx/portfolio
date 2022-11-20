import { Response } from "express"
import { IRequest } from "../../helpers/models/common"
import { ErrorResponse } from "../../helpers/models/error_message";
import { createTagDatabase, getTagsDB } from "./database";
import { createTagJoi, getAllTagsJoi } from "./validation";

const createTagController = async (req: IRequest, res: Response) => {
  const { error, value } = await createTagJoi.validate(req.body);

  if (error) {
    return req.customRes({
      isError: true,
      error: error.details,
      message: ErrorResponse.INVALID_PARAMS,
      // res
    });
  }

  const article = await createTagDatabase(value);

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

const getAllTagsController = async (req: IRequest, res: Response) => {
  const { error, value } = await getAllTagsJoi.validate(req.query);

  if (error) {
    return req.customRes({
      isError: true,
      error: error.details,
      message: ErrorResponse.INVALID_PARAMS,
      // res
    });
  } else {
    const tags = await getTagsDB(value);

    return req.customRes({
      isError: false,
      message: ErrorResponse.GET_SUCCESSFUL,
      data: tags
    });
  }
}

export {
  createTagController,
  getAllTagsController
}