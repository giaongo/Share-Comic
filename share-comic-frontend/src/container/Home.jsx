import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const location = useLocation();
  const user = location.state;
  return (
    <div className="h-screen flex grow-1">
      <div className="h-screen flex overflow-y-auto">
        <Sidebar />
      </div>

      <div className="bg-lightPinkBg w-full">
        <NavBar userData={user} />
      </div>
    </div>
  );
};

export default Home;
