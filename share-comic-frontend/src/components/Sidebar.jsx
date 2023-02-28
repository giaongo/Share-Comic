import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import appLogo from "../assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import { categories } from "../utils/data";
import CancelIcon from "@mui/icons-material/Cancel";
const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
  return (
    <div className="w-340 bg-white overflow-x-hidden animate-slide-in">
      <div className="sm:hidden flex">
        <IconButton
          color="primary"
          onClick={() => setToggleSidebar(!toggleSidebar)}
        >
          <CancelIcon />
        </IconButton>
      </div>
      <img src={appLogo} alt="logo" width="80" className="m-auto mb-5 pt-5" />
      <div className="flex w-full justify-center mb-5 cursor-pointer">
        <HomeIcon />
        <h2 className="ml-3 font-bold">Home</h2>
      </div>
      <Divider />
      <p
        className="font-bold text-ssm sm:text-sm text-center text-white bg-mainColor mt-3 rounded-xl
        p-2 m-5 "
      >
        Discover Comic Categories
      </p>
      {categories.map((category, index) => (
        <ListItem key={index} className="cursor-pointer">
          <ListItemAvatar className="hidden sm:flex">
            <Avatar src={category.image} alt={category.category} />
          </ListItemAvatar>
          <ListItemText primary={category.category} sx={{fontSize:14}} />
        </ListItem>
      ))}
    </div>
  );
};

export default Sidebar;
