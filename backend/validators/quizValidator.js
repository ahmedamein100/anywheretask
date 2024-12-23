const mongoose = require("mongoose");
const CustomError = require("../utils/customError/customError");

const getQuizByIdValidation = (req, res, next) => {
  const { id } = req.params;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return next(
      new CustomError(
        "Failed to retrieve quiz",
        400,
        "The provided ID is invalid. Please provide a valid quiz ID."
      )
    );
  }
  next();
};

const createQuizValidation = (req, res, next) => {
  const { title, course, topic, quizDate } = req.body;

  if (!title || !title.trim() || title.trim().length === 0) {
    return next(
      new CustomError(
        "Failed to create quiz",
        400,
        "Title is required and cannot be empty."
      )
    );
  }

  if (title.trim().length < 4) {
    return next(
      new CustomError(
        "Failed to create quiz",
        400,
        "Title must be at least 4 characters long."
      )
    );
  }

  if (!course || !course.trim() || course.trim().length === 0) {
    return next(
      new CustomError(
        "Failed to create quiz",
        400,
        "Course is required and cannot be empty."
      )
    );
  }

  if (course.trim().length < 4) {
    return next(
      new CustomError(
        "Failed to create quiz",
        400,
        "Course must be at least 4 characters long."
      )
    );
  }

  if (!topic || !topic.trim() || topic.trim().length === 0) {
    return next(
      new CustomError(
        "Failed to create quiz",
        400,
        "Topic is required and cannot be empty."
      )
    );
  }

  if (topic.trim().length < 4) {
    return next(
      new CustomError(
        "Failed to create quiz",
        400,
        "Topic must be at least 4 characters long."
      )
    );
  }

  if (
    !quizDate ||
    isNaN(new Date(quizDate)) ||
    isNaN(new Date(quizDate).getTime())
  ) {
    return next(
      new CustomError(
        "Failed to create quiz",
        400,
        "Invalid quiz date. Please provide a valid date."
      )
    );
  }

  next();
};

const deleteQuizValidation = (req, res, next) => {
  const { id } = req.params;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return next(
      new CustomError(
        "Failed to delete quiz",
        400,
        "The provided ID is invalid. Please provide a valid quiz ID."
      )
    );
  }

  next();
};

const updateQuizValidation = (req, res, next) => {
  const { id } = req.params;
  const { title, course, topic, quizDate } = req.body;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return next(
      new CustomError(
        "Failed to update quiz",
        400,
        "The provided ID is invalid. Please provide a valid quiz ID."
      )
    );
  }

  if (!title || !title.trim() || title.trim().length === 0) {
    return next(
      new CustomError(
        "Failed to update quiz",
        400,
        "Title is required and cannot be empty."
      )
    );
  }

  if (title.trim().length < 4) {
    return next(
      new CustomError(
        "Failed to update quiz",
        400,
        "Title must be at least 4 characters long."
      )
    );
  }

  if (!course || !course.trim() || course.trim().length === 0) {
    return next(
      new CustomError(
        "Failed to update quiz",
        400,
        "Course is required and cannot be empty."
      )
    );
  }

  if (course.trim().length < 4) {
    return next(
      new CustomError(
        "Failed to update quiz",
        400,
        "Course must be at least 4 characters long."
      )
    );
  }

  if (!topic || !topic.trim() || topic.trim().length === 0) {
    return next(
      new CustomError(
        "Failed to update quiz",
        400,
        "Topic is required and cannot be empty."
      )
    );
  }

  if (topic.trim().length < 4) {
    return next(
      new CustomError(
        "Failed to update quiz",
        400,
        "Topic must be at least 4 characters long."
      )
    );
  }

  if (
    !quizDate ||
    isNaN(new Date(quizDate)) ||
    isNaN(new Date(quizDate).getTime())
  ) {
    return next(
      new CustomError(
        "Failed to update quiz",
        400,
        "Invalid quiz date. Please provide a valid date."
      )
    );
  }

  next();
};

module.exports = {
  getQuizByIdValidation,
  createQuizValidation,
  deleteQuizValidation,
  updateQuizValidation,
};
