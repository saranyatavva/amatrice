const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
var NotEmptyString = { type: String, minLength: 1 };
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
mongoose.model("Post", postSchema);
