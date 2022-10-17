import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Profile from "./Profile";
import AllFiles from "./AllFiles";
import React, { useEffect, useState } from "react";

function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Navbar />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/profile"
            element={
              <>
                <Profile />
                <Navbar />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/allfiles"
            element={
              <>
                <AllFiles />
                <Navbar />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
