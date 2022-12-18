import mongoose from "mongoose";

const sample = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  data: Object,
}, { timestamps: true });

export const SampleSchema = mongoose.model("Sample", sample);