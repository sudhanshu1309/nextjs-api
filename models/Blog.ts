import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: { type: String, maxlength: 32, required: true },
  description: { type: String },
  createdBy: {
    type: String,
    maxlength: 32,
    trim: true,
  },
  createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
