const mongoose = require("mongoose");
const CustomError = require("../utils/customError/customError");

const getAnnouncementByIdValidation = (req, res, next) => {
  const { id } = req.params;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return next(
      new CustomError(
        "Failed to retrieve announcement",
        400,
        "The provided ID is invalid. Please provide a valid announcement ID."
      )
    );
  }
  next();
};

const createAnnouncementValidation = (req, res, next) => {
  const { creator, course, message } = req.body;

  if (!creator || !creator.trim() || creator.trim().length === 0) {
    return next(
      new CustomError(
        "Failed to create announcement",
        400,
        "Creator is required and cannot be empty."
      )
    );
  }

  if (creator.trim().length < 4) {
    return next(
      new CustomError(
        "Failed to create announcement",
        400,
        "Creator must be at least 4 characters long."
      )
    );
  }

  if (!course || !course.trim() || course.trim().length === 0) {
    return next(
      new CustomError(
        "Failed to create announcement",
        400,
        "Course is required and cannot be empty."
      )
    );
  }

  if (course.trim().length < 4) {
    return next(
      new CustomError(
        "Failed to create announcement",
        400,
        "Course must be at least 4 characters long."
      )
    );
  }

  if (!message || !message.trim() || message.trim().length === 0) {
    return next(
      new CustomError(
        "Failed to create announcement",
        400,
        "message is required and cannot be empty."
      )
    );
  }

  if (message.trim().length < 10) {
    return next(
      new CustomError(
        "Failed to create announcement",
        400,
        "message must be at least 10 characters long."
      )
    );
  }

  next();
};

const deleteAnnouncementValidation = (req, res, next) => {
  const { id } = req.params;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return next(
      new CustomError(
        "Failed to delete announcement",
        400,
        "The provided ID is invalid. Please provide a valid announcement ID."
      )
    );
  }

  next();
};

const updateAnnouncementValidation = (req, res, next) => {
  const { id } = req.params;
  const { creator, course, message } = req.body;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return next(
      new CustomError(
        "Failed to update announcement",
        400,
        "The provided ID is invalid. Please provide a valid announcement ID."
      )
    );
  }

  if (!creator || !creator.trim() || creator.trim().length === 0) {
    return next(
      new CustomError(
        "Failed to update announcement",
        400,
        "Creator is required and cannot be empty."
      )
    );
  }

  if (creator.trim().length < 4) {
    return next(
      new CustomError(
        "Failed to update announcement",
        400,
        "Creator must be at least 4 characters long."
      )
    );
  }

  if (!course || !course.trim() || course.trim().length === 0) {
    return next(
      new CustomError(
        "Failed to update announcement",
        400,
        "Course is required and cannot be empty."
      )
    );
  }

  if (course.trim().length < 4) {
    return next(
      new CustomError(
        "Failed to update announcement",
        400,
        "Course must be at least 4 characters long."
      )
    );
  }

  if (!message || !message.trim() || message.trim().length === 0) {
    return next(
      new CustomError(
        "Failed to update announcement",
        400,
        "message is required and cannot be empty."
      )
    );
  }

  if (message.trim().length < 10) {
    return next(
      new CustomError(
        "Failed to update announcement",
        400,
        "message must be at least 10 characters long."
      )
    );
  }

  next();
};

module.exports = {
  getAnnouncementByIdValidation,
  createAnnouncementValidation,
  deleteAnnouncementValidation,
  updateAnnouncementValidation,
};
