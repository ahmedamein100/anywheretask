import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/stores/store";
import { Navigate } from "react-router-dom";

function StudentDashBoardHOC(
  WrappedComponent: React.ComponentType
): React.ComponentType {
  function HOC(): React.ReactElement {
    const studentLogin = localStorage.getItem("isAuthenticated");
    if (studentLogin !== "true") {
      return <Navigate to="/" />;
    }
    return <WrappedComponent />;
  }
  return HOC;
}

export default StudentDashBoardHOC;
