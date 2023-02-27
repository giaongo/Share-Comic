/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Posts from "../components/Posts";
import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const location = useLocation();
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(location.state);
  }, []);

  return (
    <div className="h-screen flex grow-1">
      <div className="h-screen flex overflow-y-auto">
        <Sidebar />
      </div>
      <div className="bg-lightPinkBg w-full">
        <NavBar userData={user} />
        <Routes>
          <Route path="/*" element={<Posts />} />
          <Route path="/user-profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
