/* eslint-disable react-hooks/exhaustive-deps */
import { ThemeProvider } from "@mui/system";
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./container/Home";
import Login from "./container/Login";
import { MainProvider } from "./MainContext";
import { createTheme } from "@mui/material/styles";
import { green,} from "@mui/material/colors";

const App = () => {
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      primary: {
        main: '#D37E7E',
      },
      secondary: {
        main: green[500],
      },
    },
  });
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
    <ThemeProvider theme={theme}>
      <MainProvider>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </MainProvider>
    </ThemeProvider>
  );
};

export default App;
