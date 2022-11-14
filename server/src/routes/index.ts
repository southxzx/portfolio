import express from "express";

import routerArticle from "./Article";
import routerTopic from "./Topic";
import routerTag from "./Tag";

import externalResponseFilter from "../middlewares/response.filter";

const router = express.Router();

router.use("/", externalResponseFilter, [
  routerArticle,
  routerTopic,
  routerTag
]);

export default router;