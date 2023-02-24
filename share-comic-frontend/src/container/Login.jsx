import React from "react";
import bannerVideo from "../assets/video_banner.mp4";
import appLogo from "../assets/logo.png";
import { GoogleLogin } from "@react-oauth/google";
import LoginGithub from "../components/LoginGithub";
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
        className="self-center absolute w-275 sm:w-350 top-1/4 bg-loginContainer sm:p-5 p-8 flex justify-center 
      items-center rounded-lg drop-shadow-xl"
      >
        <div className="">
          <img
            src={appLogo}
            alt="logo"
            width="150"
            className="m-auto mb-5"
          />
          <GoogleLogin
            theme="outline"
            shape="circle"
            onSuccess={async (credentialResponse) => {
              const decodedResult = await getDecodedOAuthJwtGoogle(
                credentialResponse.credential
              );
              const user = decodedResult.payload;
              const userDoc = {
                _id: user.sub,
                _type: "user",
                username: user.name,
                email: user.email,
                image: user.picture,
              };
              console.log("user is", userDoc);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          <LoginGithub />
          {/* <LoginGithub
            className="bg-black text-white p-5 mt-5 w-full"
            clientId={process.env.REACT_APP_GITHUB_CLIENTID}
            onSuccess={async (result) => {
              console.log("successful login", result);
              const options = {
                method: "POST",
                body: JSON.stringify(result),
              };
              const response = await fetch(process.env.REACT_APP_PROXY_URL, options);
              const json = await response.json();
              console.log("data is", json);
            }}
            onFailure={(result) => console.log("login failed", result)}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
