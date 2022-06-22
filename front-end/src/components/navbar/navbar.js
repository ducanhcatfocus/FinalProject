import React from 'react';
import "./navbar.scss";
import PostAddIcon from '@mui/icons-material/PostAdd';
import ArticleIcon from '@mui/icons-material/Article';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SendIcon from '@mui/icons-material/Send';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

const NavbarContainer = () => {

  const[active, setActive] = useState("");

  return (
    <div className="navbar__container">
      <div className="icon___container">
        <IconButton>
          <PostAddIcon sx={{ fontSize: 45 }} style={{color: active === "post" ? "black" : "white"}} onClick={() => setActive("post")}/>
        </IconButton>
        <p>0</p>
      </div>
      <div className="icon___container">
        <IconButton>
          <ArticleIcon sx={{ fontSize: 45 }} style={{color: active === "article" ? "black" : "white"}} onClick={() => setActive("article")}/>
        </IconButton>
        <p>0</p>
      </div>
      <div className="icon___container">
        <IconButton>
          <SendIcon sx={{ fontSize: 45 }} style={{color: active === "send" ? "black" : "white"}} onClick={() => setActive("send")}/>
        </IconButton>
        <p>0</p>
      </div>
      <div className="icon___container">
        <IconButton>
          <BookmarkIcon sx={{ fontSize: 45 }} style={{color: active === "bookmark" ? "black" : "white"}} onClick={() => setActive("bookmark")}/>
        </IconButton>
        <p>0</p>
      </div>
      <div className="icon___container">
        <IconButton>
          <PendingActionsIcon sx={{ fontSize: 45 }} style={{color: active === "pending" ? "black" : "white"}} onClick={() => setActive("pending")}/>
        </IconButton>
        <p>0</p>
      </div>
      <div className="icon___container">
        <IconButton>
          <AccountTreeIcon sx={{ fontSize: 45 }} style={{color: active === "account" ? "black" : "white"}} onClick={() => setActive("account")}/>
        </IconButton>
        <p>0</p>
      </div>
  </div>
  )
}

export default NavbarContainer;