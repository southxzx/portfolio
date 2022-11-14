import mongoose from "mongoose";

export const topicSchema = new mongoose.Schema({
  name: String,
  key: String,
  image: String
}, { timestamps: true });

export const TopicSchema = mongoose.model("Topic", topicSchema);