import React from "react";
import {
    IconButton,
    ImageListItem,
    ImageListItemBar,
  } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Post = ({item}) => {
  return (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=248&fit=crop&auto=format`}
        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        height="100%"
        loading="eager"
      />
      <ImageListItemBar
        actionPosition="right"
        title={item.title}
        subtitle="Giao"
        actionIcon={
          <IconButton onClick={() => console.log("clicked")}>
            <FavoriteBorderIcon color="info" />
          </IconButton>
        }
      />
    </ImageListItem>
  );
};

export default Post;
