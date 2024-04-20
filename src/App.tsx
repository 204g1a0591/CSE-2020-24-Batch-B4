import "./App.css";
import Home from "./home/Home";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import FacultyForms from "./admin/facultyforms/facultyforms";
import AdminLogin from "./admin/login/login";
import WebsiteScores from "./Scores/scores";
import Scores from "./admin/scores/scores";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/scores" element={<WebsiteScores />} />
        <Route path="/admin/forms" element={<FacultyForms />} />
        <Route path="/admin/scores/:id" element={<Scores />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
