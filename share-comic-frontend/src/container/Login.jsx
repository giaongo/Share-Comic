import React from "react";
import bannerVideo from "../assets/video_banner.mp4";
import appLogo from "../assets/logo.png";

const Login = () => {
  return (
    <div
      id="loginContainer"
      className="relative w-screen h-screen m-0 bg-mainColor flex flex-col"
    >
      <div id="videoSection" className="relative w-full h-2/5">
        <video
          src={bannerVideo}
          type="video/mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-pinkOverlay" />
      </div>
      <div className="self-center absolute w-450 top-1/3 bg-loginContainer p-10 flex justify-center 
      items-center rounded-lg drop-shadow-xl">
        <div>
          <img src={appLogo} width="130px" alt="logo"/>
          <button className="w-full mt-5 bg-white p-5 rounded-lg">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
