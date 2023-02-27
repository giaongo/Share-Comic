import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="h-screen flex grow-1">
      <div className="h-screen flex overflow-y-auto">
        <Sidebar />
      </div>

      <div className="bg-lightPinkBg w-full">
        <NavBar />
      </div>
    </div>
  );
};

export default Home;
