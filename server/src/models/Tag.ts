import mongoose from "mongoose";

export const tagSchema = new mongoose.Schema({
  name: String,
  key: String,
  numberOfArticle: Number
}, { timestamps: true });

export const TagSchema = mongoose.model("Tag", tagSchema);