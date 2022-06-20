import React from 'react';
import "./navbar.scss";
import PostAddIcon from '@mui/icons-material/PostAdd';
import ArticleIcon from '@mui/icons-material/Article';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SendIcon from '@mui/icons-material/Send';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import SendContainer from './send';
import  PostAddContainer from './postadd';
import { useState } from 'react';

const NavbarContainer = () => {

  const[active, setActive] = useState("");

  return (
    <div className="navbar__container">
      <div className="icon___container">
        <PostAddIcon sx={{ fontSize: 40 }} style={{color: active === "post" ? "black" : "white"}} onClick={() => setActive("post")}/>
        <p>0</p>
      </div>
      <div className="icon___container">
        <ArticleIcon sx={{ fontSize: 40 }} style={{color: active === "article" ? "black" : "white"}} onClick={() => setActive("article")}/>
        <p>0</p>
      </div>
      <div className="icon___container">
        <SendIcon sx={{ fontSize: 40 }} style={{color: active === "send" ? "black" : "white"}} onClick={() => setActive("send")}/>
        <p>0</p>
      </div>
      <div className="icon___container">
        <BookmarkIcon sx={{ fontSize: 40 }} style={{color: active === "bookmark" ? "black" : "white"}} onClick={() => setActive("bookmark")}/>
        <p>0</p>
      </div>
      <div className="icon___container">
        <PendingActionsIcon sx={{ fontSize: 40 }} style={{color: active === "pending" ? "black" : "white"}} onClick={() => setActive("pending")}/>
        <p>0</p>
      </div>
      <div className="icon___container">
        <AccountTreeIcon sx={{ fontSize: 40 }} style={{color: active === "account" ? "black" : "white"}} onClick={() => setActive("account")}/>
        <p>0</p>
      </div>
  </div>
  )
}

export default NavbarContainer;