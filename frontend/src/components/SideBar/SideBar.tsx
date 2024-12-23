import React, { useState } from "react";
import { Button } from "@mui/material";
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboardicon.svg";
import { ReactComponent as ScheduleIcon } from "../../assets/icons/scheduleicon.svg";
import { ReactComponent as CourseIcon } from "../../assets/icons/courseicon.svg";
import { ReactComponent as GradebookIcon } from "../../assets/icons/gradeworkicon.svg";
import { ReactComponent as PerformanceIcon } from "../../assets/icons/preformanceicons.svg";
import { ReactComponent as AnnouncementsIcon } from "../../assets/icons/announcementicon.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logouticon.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setComponent } from "../../redux/slices/componentSlice";

import "./SideBar.css";

function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState<number | null>(1);

  const changeComponent = (componentNumber: number) => {
    setActiveButton(componentNumber);
    dispatch(setComponent(componentNumber));
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    dispatch(setComponent(1));
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">Coligo</div>

      <Button
        className={`sidebar-button ${activeButton === 1 ? "active" : ""}`}
        onClick={() => changeComponent(1)}
      >
        <DashboardIcon className="sidebar-icon" />
        <span className="sidebar-button-text">Dashboard</span>
      </Button>

      <Button
        className={`sidebar-button ${activeButton === 2 ? "active" : ""}`}
        onClick={() => changeComponent(2)}
      >
        <ScheduleIcon className="sidebar-icon" />
        <span className="sidebar-button-text">Schedule</span>
      </Button>

      <Button
        className={`sidebar-button ${activeButton === 3 ? "active" : ""}`}
        onClick={() => changeComponent(3)}
      >
        <CourseIcon className="sidebar-icon" />
        <span className="sidebar-button-text">Courses</span>
      </Button>

      <Button
        className={`sidebar-button ${activeButton === 4 ? "active" : ""}`}
        onClick={() => changeComponent(4)}
      >
        <GradebookIcon className="sidebar-icon" />
        <span className="sidebar-button-text">Gradebook</span>
      </Button>

      <Button
        className={`sidebar-button ${activeButton === 5 ? "active" : ""}`}
        onClick={() => changeComponent(5)}
      >
        <PerformanceIcon className="sidebar-icon" />
        <span className="sidebar-button-text">Performance</span>
      </Button>

      <Button
        className={`sidebar-button ${activeButton === 6 ? "active" : ""}`}
        onClick={() => changeComponent(6)}
      >
        <AnnouncementsIcon className="sidebar-icon" />
        <span className="sidebar-button-text">Announcements</span>
      </Button>

      <Button className="sidebar-button" onClick={() => logout()}>
        <LogoutIcon className="sidebar-icon" />
        <span className="sidebar-button-text">Logout</span>
      </Button>
    </div>
  );
}

export default SideBar;
