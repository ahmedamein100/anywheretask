import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizzes } from "../../redux/slices/quizzSlice";
import { RootState, AppDispatch } from "../../redux/stores/store";
import "./Quizzes.css";
import { ReactComponent as HourglassIcon } from "../../assets/icons/quiz.svg";
import { format } from "date-fns";

const WhatsDue = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { quizzes } = useSelector((state: RootState) => state.quizzes);

  useEffect(() => {
    dispatch(fetchQuizzes());
  }, [dispatch]);

  return (
    <div className="whats-due-container">
      <div className="whats-due-header">
        <div className="whats-due-slogan">
          <h2>What's due</h2>
          <p>We educate warriors! Keep updated :)</p>
        </div>
        <button className="view-all">All</button>
      </div>

      {quizzes.map((item) => (
        <div key={item.id} className="due-item">
          <div className="due-item-header">
            <HourglassIcon className="due-item-icon" />
            <h3>{item.title}</h3>
          </div>
          <div className="due-items">
            <div className="due-item-detail">
              <p className="due-item-detail-header">
                <strong>Course:</strong>
              </p>
              <p className="due-item-detail-info">{item.course}</p>
            </div>
            <div className="due-item-detail">
              <p className="due-item-detail-header">
                <strong>Topic:</strong>
              </p>
              <p className="due-item-detail-info">{item.topic}</p>
            </div>
            <div className="due-item-detail">
              <p className="due-item-detail-header">
                <strong>Due to:</strong>
              </p>

              <p className="due-item-detail-info">
                {format(new Date(item.quizDate), "dd MMM yyyy hh:mm a")}
              </p>
            </div>
          </div>
          <button className="due-item-button">Start Quiz</button>
        </div>
      ))}
    </div>
  );
};

export default WhatsDue;
