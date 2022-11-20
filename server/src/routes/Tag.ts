import express from "express";
import * as controller from "../controllers/tag/tag.controller";
import { IRequest, IResponse } from "../helpers/models/common";
const router = express.Router();

router.post("/tag", function (req: IRequest, res: IResponse, next) {
  controller.createTagController(req, res).catch(next);
});
router.get("/tag", function (req: IRequest, res: IResponse, next) {
  controller.getAllTagsController(req, res).catch(next);
});

export default router;