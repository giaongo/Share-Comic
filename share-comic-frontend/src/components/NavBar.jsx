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
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = ({ userData, toggleSidebar, setToggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-3 flex justify-evenly items-center">
      {!toggleSidebar && (
        <div className="sm:hidden flex">
          <IconButton
            color="primary"
            onClick={() => setToggleSidebar(!toggleSidebar)}
          >
            <MenuIcon />
          </IconButton>
        </div>
      )}

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
      <div className="cursor-pointer" onClick={() => navigate("/user-profile")}>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={userData && userData.image} alt="profile" />
          </ListItemAvatar>
          <ListItemText primary={userData && userData.username} />
        </ListItem>
      </div>
    </div>
  );
};

export default NavBar;
