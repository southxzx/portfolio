import mongoose from "mongoose";
import { tagSchema, TagSchema } from "./Tag";
import { topicSchema, TopicSchema } from "./Topic";

const article = new mongoose.Schema({
  title: String,
  topic: topicSchema,
  tags: [tagSchema],
  content: {
    type: Array<String>,
  },
  slug: String,
}, { timestamps: true });

export const ArticleSchema = mongoose.model("Article", article);

