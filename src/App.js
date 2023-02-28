import "./App.css";
import React from "react";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import AppNavBar from "./components/app/AppNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AppNavBar />
        <Routes>
          <Route path="/about" element={<AboutView />} />
          <Route path="/" element={<HomeView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
