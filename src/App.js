import "./App.css";

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { AppStateProvider } from "./AppStateContext";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <Router>
      <AppStateProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AppStateProvider>
    </Router>
  );
}

export default App;
