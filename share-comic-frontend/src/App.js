/* eslint-disable react-hooks/exhaustive-deps */
import { ThemeProvider } from "@mui/system";
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./container/Home";
import Login from "./container/Login";
import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { useUser } from "./client";

const App = () => {
  const navigate = useNavigate();
  const { getUser } = useUser();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#D37E7E",
      },
      secondary: {
        main: green[500],
      },
    },
    typography: {
      fontSize: 12,
    },
    components: {
      MuiImageListItemBar: {
        styleOverrides: {
          subtitle: {
            fontSize: 10,
          },
        },
      },
    },
  });
  const checkUserLoggedIn = async () => {
    const userId = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    if (userId) {
      const userResult = await getUser(userId);
      navigate("/", { state: userResult[0] });
    } else {
      navigate("login");
    }
  };

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
