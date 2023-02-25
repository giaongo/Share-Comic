/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./container/Home";
import Login from "./container/Login";
import { MainProvider } from "./MainContext";
const App = () => {
  const navigate = useNavigate();
  const checkUserLoggedIn = () => {
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    if (user) {
      navigate("/");
    } else {
      navigate("login");
    }
  };

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return (
    <MainProvider>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </MainProvider>
  );
}

export default App;
