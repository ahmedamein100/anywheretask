require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDb = require("./utils/database/dbConnection");
const quizzes = require("./routes/quizzes");
const announcements = require("./routes/announcements");
const globalExcpetionHnadler = require("./utils/globalExceptionHandler/globalExceptionHandler");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    credentials: true, // If using cookies or authentication
  })
);

app.use(express.json());

app.use("/api/quizzes", quizzes);
app.use("/api/announcements", announcements);

app.use(globalExcpetionHnadler);

connectDb();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`);
});
