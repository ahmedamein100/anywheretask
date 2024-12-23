import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import "./StudentDashBoard.css";
import DashBoardBody from "../../components/DashBoardBody/DashBoardBody";

function StudentDashBoard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="main-container">
        <div className="header-container">
          <Header />
        </div>
        <div className="body-container">
          <DashBoardBody />
        </div>
      </div>
    </div>
  );
}

export default StudentDashBoard;
