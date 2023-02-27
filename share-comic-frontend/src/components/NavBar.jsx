import {
  Avatar,
  Fab,
  InputBase,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
const NavBar = () => {
  return (
    <div className="bg-white p-3 flex justify-evenly items-center">
      <Fab aria-label="add" className="bg-black">
        <AddIcon />
      </Fab>
      <div className="w-4/6 bg-gray-200 flex rounded-full">
        <InputBase
          sx={{ ml: 1, flex: 1, width: "100%", p: "5px" }}
          placeholder="Search posts"
          inputProps={{ "aria-label": "search posts" }}
        />
        <IconButton type="button" sx={{ p: "15px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>
      <div className="cursor-pointer">
        <ListItem>
          <ListItemAvatar>
            <Avatar src="" alt="profile" />
          </ListItemAvatar>
          <ListItemText primary="Giao Ngo" />
        </ListItem>
      </div>
    </div>
  );
};

export default NavBar;
