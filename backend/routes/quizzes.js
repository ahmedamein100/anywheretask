const express = require("express");
const router = express.Router();

const {
  getQuizByIdValidation,
  createQuizValidation,
  deleteQuizValidation,
  updateQuizValidation,
} = require("../validators/quizValidator");

const {
  getAllQuizzes,
  getQuizById,
  createQuiz,
  deleteQuiz,
  updateQuiz,
} = require("../controllers/quizController");

router.get("/", getAllQuizzes);
router.get("/:id", getQuizByIdValidation, getQuizById);
router.post("/", createQuizValidation, createQuiz);
router.delete("/:id", deleteQuizValidation, deleteQuiz);
router.put("/:id", updateQuizValidation, updateQuiz);

module.exports = router;
