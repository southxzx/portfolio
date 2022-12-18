import express from "express";
import { IRequest, IResponse } from "../helpers/models/common";
import * as controller from "./../controllers/sample/sample.controller";

const router = express.Router();

router.get("/about-me-data", (req: IRequest, res: IResponse) => {
  controller.getAboutData(req);
});
router.get("/resume-data", (req: IRequest, res: IResponse) => {
  controller.getResumeData(req);
});

export default router;