import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import appLogo from "../assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import { categories } from "../utils/data";
const Sidebar = ({user}) => {
  return (
    <div className="relative h-screen w-275 bg-white">
      <img src={appLogo} alt="logo" width="120" className="m-auto mb-5 pt-5" />
      <div className="flex w-full justify-center mb-5 cursor-pointer">
        <HomeIcon />
        <h2 className="ml-3 font-bold">Home</h2>
      </div>
      <Divider />
      <p
        className="font-bold text-sm text-center text-white bg-mainColor mt-3 rounded-xl
        p-2 m-5"
      >
        Discover Comic Categories
      </p>
      {categories.map((category, index) => (
        <ListItem key={index} className="cursor-pointer">
          <ListItemAvatar>
            <Avatar src={category.image} alt={category.category} />
          </ListItemAvatar>
          <ListItemText primary={category.category} />
        </ListItem>
      ))}
      <div className="w-full absolute bottom-5">
        <ListItem>
            <ListItemAvatar>
                <Avatar src="" alt="profile" />
            </ListItemAvatar>
            <ListItemText primary="" />
        </ListItem>
       
      </div>
    </div>
  );
};

export default Sidebar;
