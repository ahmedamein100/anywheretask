const CustomError = require("../customError/customError.js");

const getAllQuizzesExceptionHandler = (err, next) => {
  return next(
    new CustomError("Error while fetching quizzes", 500, err.message)
  );
};

const getQuizByIdExceptionHandler = (err, next) => {
  return next(
    new CustomError("Error retrieving the quiz by ID", 500, err.message)
  );
};

const getQuizByIdNotFoundExceptionHandler = (next) => {
  return next(
    new CustomError("Quiz Not Found", 404, "The requested quiz does not exist.")
  );
};

const createQuizExceptionHandler = (err, next) => {
  return next(new CustomError("Error creating the quiz", 500, err.message));
};

const deleteQuizExceptionHandler = (err, next) => {
  return next(new CustomError("Error deleting the quiz", 500, err.message));
};

const deleteQuizNotFoundExceptionHandler = (next) => {
  return next(
    new CustomError(
      "Quiz not found",
      404,
      "No quiz found with the provided ID."
    )
  );
};

const updateQuizExceptionHandler = (err, next) => {
  return next(new CustomError("Error updating the quiz", 500, err.message));
};

const updateQuizNotFoundExceptionHandler = (next) => {
  return next(
    new CustomError(
      "Quiz not found",
      404,
      "No quiz found with the provided ID."
    )
  );
};

module.exports = {
  getAllQuizzesExceptionHandler,
  getQuizByIdExceptionHandler,
  getQuizByIdNotFoundExceptionHandler,
  createQuizExceptionHandler,
  deleteQuizExceptionHandler,
  deleteQuizNotFoundExceptionHandler,
  updateQuizExceptionHandler,
  updateQuizNotFoundExceptionHandler,
};
