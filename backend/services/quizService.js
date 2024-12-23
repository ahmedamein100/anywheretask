const Quiz = require("../models/Quiz");

const getAllQuizzesService = async () => {
  return await Quiz.find().select("title course topic quizDate");
};

const getQuizByIdService = async (id) => {
  return await Quiz.findById(id).select("title course topic quizDate");
};

const createQuizService = async (data) => {
  const { title, course, topic, quizDate } = data;
  const newQuiz = new Quiz({
    title,
    course,
    topic,
    quizDate,
  });

  return await newQuiz.save();
};

const deleteQuizService = async (id) => {
  return await Quiz.findByIdAndDelete(id);
};

const updateQuizService = async (id, data) => {
  return await Quiz.findByIdAndUpdate(id, data, { new: true });
};

module.exports = {
  getAllQuizzesService,
  getQuizByIdService,
  createQuizService,
  deleteQuizService,
  updateQuizService,
};
