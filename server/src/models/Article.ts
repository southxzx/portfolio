import mongoose from "mongoose";
import { tagSchema, TagSchema } from "./Tag";
import { topicSchema, TopicSchema } from "./Topic";

const article = new mongoose.Schema({
  title: String,
  topic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Topic"
  },
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tag"
  }],
  content: {
    type: Array<String>,
  },
  slug: String,
}, { timestamps: true });

export const ArticleSchema = mongoose.model("Article", article);

