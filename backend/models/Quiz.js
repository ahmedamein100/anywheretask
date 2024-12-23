const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
    },
    course: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
    },
    topic: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
    },
    quizDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Quiz", quizSchema);
