import React from "react";
import { Card, Button } from "@mui/material";
import "./TopCard.css";
import ExamPng from "../../assets/pngs/studypng.png";

const TopCard = () => {
  return (
    <Card className="top-card">
      <div className="card-container">
        <div className="text-container">
          <div className="exams-time-text">EXAMS TIME</div>
          <div className="sub-text">
            Here we are, Are you ready to fight? Don't worry, we prepared some
            tips to be ready for your exams.
          </div>
          <div className="quote-text">
            “Nothing happens until something moves.” - Albert Einstein
          </div>
          <Button className="ready-button">View Exams Tips</Button>
        </div>
        <div className="image-container">
          <img className="exam-image" src={ExamPng} alt="Exam Time" />
        </div>
      </div>
    </Card>
  );
};

export default TopCard;
