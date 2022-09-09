import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomePage from "./components/pages/HomePage/HomePage";
import TeamPage from "./components/pages/TeamPage/TeamPage";
import { useNavigate } from "react-router-dom";

// SPA - Single Page Application
function App() {
  return (
    <div className="card-container">
      <h1>Welcome to React Router!</h1>
      <Box sx={{ width: 500 }}>
        <BottomNavigation>
          <BottomNavigationAction label="Home" />
          <BottomNavigationAction label="Favorites" />
          <BottomNavigationAction label="Team" />
        </BottomNavigation>
      </Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<h1>About page</h1>} />
        <Route path="team" element={<TeamPage />} />
      </Routes>
    </div>
  );
}

export default App;
