import React from "react";
import bannerVideo from "../assets/video_banner.mp4";
import appLogo from "../assets/logo.png";
import { GoogleLogin } from "@react-oauth/google";
const { OAuth2Client } = require("google-auth-library");

const Login = () => {
  const getDecodedOAuthJwtGoogle = async (token) => {
    const CLIENT_ID_GOOGLE = process.env.REACT_APP_GOOGLE_CLIENTID;
    try {
      const client = new OAuth2Client(CLIENT_ID_GOOGLE);
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID_GOOGLE,
      });
      return ticket;
    } catch (error) {
      console.log("errorDecodingJwt", error);
    }
  };
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
      <div
        className="self-center absolute w-450 top-1/4 bg-loginContainer p-10 flex justify-center 
      items-center rounded-lg drop-shadow-xl"
      >
        <div>
          <img src={appLogo} width="210" alt="logo" className="mb-10" />
          <GoogleLogin
            theme="outline"
            shape="circle"
            onSuccess={async (credentialResponse) => {
              const decodedResult = await getDecodedOAuthJwtGoogle(
                credentialResponse.credential
              );
              console.log("result is", decodedResult);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
