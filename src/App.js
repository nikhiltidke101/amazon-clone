import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./pages/Header.tsx";
import Home from"./pages/Home.tsx";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout"  element={<><Header/></>}></Route>
          <Route path="/login"  element={<><Header/></>}></Route>
          <Route path="/Home" element={<><Header/><Home/></>} /></Routes>
      </div>
    </Router>
  );
}

export default App;