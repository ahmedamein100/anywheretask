const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema(
  {
    creator: {
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
    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Announcement", announcementSchema);
