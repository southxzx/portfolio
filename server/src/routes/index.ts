import express from "express";

import routerArticle from "./Article";
import routerTopic from "./Topic";
import routerTag from "./Tag";

import externalResponseFilter from "../middlewares/response.filter";

/**
 * Use the express.Router class to create modular, mountable route handlers. 
 * A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
 * Refs: https://expressjs.com/en/guide/routing.html
 */
const router = express.Router();

router.use("/", externalResponseFilter, [
  routerArticle,
  routerTopic,
  routerTag
]);

export default router;