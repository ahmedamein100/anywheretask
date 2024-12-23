import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import StudentDashBoard from "./pages/studentDashBoard/StudentDashBoard";
import StudentDashBoardHOC from "./HOC/StudentDashBoardHOC";

function App() {
  const PrivateStudentDashBoard = StudentDashBoardHOC(StudentDashBoard);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/student-dashboard"
          element={<PrivateStudentDashBoard />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
