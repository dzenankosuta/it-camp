import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomePage from "./components/pages/HomePage/HomePage";
import TeamPage from "./components/pages/TeamPage/TeamPage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import { useNavigate } from "react-router-dom";

// SPA - Single Page Application
function App() {
  let linkStyle = {
    padding: "2rem",
    color: "#091d91",
    fontSize: "2rem",
  };
  let activeStyle = {
    padding: "2rem",
    color: "#19665f",
    fontSize: "2rem",
  };
  return (
    <div className="card-container">
      <Box sx={{ width: 500 }}>
        <BottomNavigation showLabels>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            About
          </NavLink>
          <NavLink
            to="team"
            style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            Team
          </NavLink>
        </BottomNavigation>
      </Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="team" element={<TeamPage />} />
      </Routes>
    </div>
  );
}

export default App;
