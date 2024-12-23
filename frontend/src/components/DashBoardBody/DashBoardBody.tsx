import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/stores/store";
import "./DashBoardBody.css";
import TopCard from "../TopCard/TopCard";
import WhatsDue from "../Quizzes/Quizzes";
import Announcements from "../Announcements/Announcments";

const DashBoardBody = () => {
  const componentNumber = useSelector(
    (state: RootState) => state.component.component
  );

  return (
    <Box className="dashboard-body">
      {(() => {
        switch (componentNumber) {
          case 1:
            return (
              <>
                <TopCard />
                <div className="announcements-deadlines">
                  <Announcements />
                  <WhatsDue />
                </div>
              </>
            );
          case 2:
            return <div>Schedule Component</div>;
          case 3:
            return <div>Courses Component</div>;
          case 4:
            return <div>Gradebook Component</div>;
          case 5:
            return <div>Performance Component</div>;
          case 6:
            return <Announcements />;
          default:
            return null;
        }
      })()}
    </Box>
  );
};

export default DashBoardBody;
