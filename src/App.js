import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Profile from "./Profile";
import AllFiles from "./AllFiles";
import React, { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [user, setUser] = useState(null);

  const getUserInfo = async () => {
    const userId = localStorage.getItem("userId");
    try {
      if (userId) {
        const mainuser = await axios.get(
          `http://localhost:4000/api/user/${userId}`
        );
        if (mainuser) {
          setUser(mainuser);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);

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
                <Profile setUser={setUser} />
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
