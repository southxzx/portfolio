import express from "express";
import * as controller from "../controllers/topic/topic.controller";
import { IRequest, IResponse } from "../helpers/models/common";
const router = express.Router();

router.post("/topic", function (req: IRequest, res: IResponse, next) {
  controller.createTopicController(req, res).catch(next);
});

export default router;