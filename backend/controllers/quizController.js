const {
  getAllQuizzesService,
  getQuizByIdService,
  createQuizService,
  deleteQuizService,
  updateQuizService,
} = require("../services/quizService");

const {
  getAllQuizzesExceptionHandler,
  getQuizByIdExceptionHandler,
  getQuizByIdNotFoundExceptionHandler,
  createQuizExceptionHandler,
  deleteQuizExceptionHandler,
  deleteQuizNotFoundExceptionHandler,
  updateQuizExceptionHandler,
  updateQuizNotFoundExceptionHandler,
} = require("../utils/exceptionHandler/quizExceptionHandler");

const getAllQuizzes = async (req, res, next) => {
  try {
    const quizzes = await getAllQuizzesService();
    return res.status(200).json({
      message: "Quizzes Retrieved Successfully",
      result: quizzes,
    });
  } catch (error) {
    return getAllQuizzesExceptionHandler(error, next);
  }
};

const getQuizById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const quiz = await getQuizByIdService(id);
    if (!quiz) {
      return getQuizByIdNotFoundExceptionHandler(next);
    }
    return res.status(200).json({
      message: "Quiz Retrieved Successfully.",
      result: quiz,
    });
  } catch (error) {
    return getQuizByIdExceptionHandler(error, next);
  }
};

const createQuiz = async (req, res, next) => {
  try {
    const { title, course, topic, quizDate } = req.body;
    const newQuiz = await createQuizService({
      title,
      course,
      topic,
      quizDate,
    });
    return res.status(201).json({
      message: "Quiz created successfully",
      result: newQuiz,
    });
  } catch (error) {
    return createQuizExceptionHandler(error, next);
  }
};

const deleteQuiz = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedQuiz = await deleteQuizService(id);
    if (!deletedQuiz) {
      return deleteQuizNotFoundExceptionHandler(next);
    }
    return res.status(200).json({
      message: "Quiz deleted successfully",
    });
  } catch (error) {
    return deleteQuizExceptionHandler(error, next);
  }
};

const updateQuiz = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, course, topic, quizDate } = req.body;
    const updatedQuiz = await updateQuizService(id, {
      title,
      course,
      topic,
      quizDate,
    });
    if (!updatedQuiz) {
      return updateQuizNotFoundExceptionHandler(next);
    }
    return res.status(200).json({
      message: "Quiz updated successfully",
      result: updatedQuiz,
    });
  } catch (error) {
    return updateQuizExceptionHandler(error, next);
  }
};

module.exports = {
  getAllQuizzes,
  getQuizById,
  createQuiz,
  deleteQuiz,
  updateQuiz,
};
