import React, { useState } from "react";
import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ClearIcon from "@mui/icons-material/Clear";

const Post = ({ item }) => {
  const [markedFavorite, setMarkFavorite] = useState(false);
  const [showPostInfo, setShowPostInfo] = useState(false);
  const likePost = () => {
    setMarkFavorite(!markedFavorite);
    console.log("I am liking the file");
  };
  const dislikePost = () => {
    setMarkFavorite(!markedFavorite);
    console.log("I am disliking the file");
  };
  return (
    <ImageListItem
      key={item.img}
      onMouseEnter={() => setShowPostInfo(true)}
      onMouseLeave={() => setShowPostInfo(false)}
    >
      <img
        src={`${item.img}?w=248&fit=crop&auto=format`}
        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        height="100%"
        loading="eager"
      />
      {showPostInfo && (
        <ImageListItemBar
          actionPosition="right"
          title={item.title}
          subtitle="by Giao"
          actionIcon={
            <IconButton
              size="large"
              aria-label="save to favorite"
              onClick={() => {
                !markedFavorite ? likePost() : dislikePost();
              }}
            >
              {markedFavorite ? (
                <FavoriteIcon color="primary" fontSize="inherit" />
              ) : (
                <FavoriteBorderIcon color="primary" />
              )}
              <span className="text-sm text-mainPink ml-1">1</span>
            </IconButton>
          }
        />
      )}
      <ImageListItemBar
        position="top"
        actionIcon={
          <IconButton size="sm" aria-label="delete">
            <ClearIcon
            />
          </IconButton>
        }
      />
    </ImageListItem>
  );
};

export default Post;
