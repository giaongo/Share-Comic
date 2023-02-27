import React, { useContext, useState } from "react";
import bannerVideo from "../assets/video_banner.mp4";
import appLogo from "../assets/logo.png";
import { GoogleLogin } from "@react-oauth/google";
import { useUser } from "../client";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
const { OAuth2Client } = require("google-auth-library");

const Login = () => {
  const { createUser } = useUser();
  const navigate = useNavigate();
  const [alertVisible, setAlerVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");

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
          <img src={appLogo} alt="logo" width="150" className="m-auto mb-5" />
          <GoogleLogin
            theme="outline"
            shape="circle"
            onSuccess={async (credentialResponse) => {
              try {
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
                const result = await createUser(userDoc);
                localStorage.setItem("user", JSON.stringify(result._id));
                navigate("/", { state: result});
              } catch (error) {
                console.error("ErrorCreatingUser", error);
              }
            }}
            onError={() => {
              setAlerVisible(true);
              setAlertSeverity("error");
              setAlertMessage("Login Failed");
            }}
          />

          {alertVisible && (
            <Alert severity={alertSeverity}>{alertMessage}</Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
