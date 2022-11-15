import express from "express";
import * as controller from "../controllers/article/article.controller";
import { IRequest, IResponse } from "../helpers/models/common";
const router = express.Router();

router.post("/article", function (req: IRequest, res: IResponse, next) {
  controller.createArticleController(req, res).catch(next);
});

router.get("/article", function (req: IRequest, res: IResponse, next) {
  controller.getAllArticlesController(req, res).catch(next);
});

export default router;