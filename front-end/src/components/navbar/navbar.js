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

  const[post,setPost] = useState(false);
  const[send,setSend] = useState(false);

  return (
    <div className="navbar__container">
      <div className="icon___container" onClick={() => setPost(!post)}>
        <PostAddContainer post={post}/>
        <p>0</p>
      </div>
      <div className="icon___container">
        <ArticleIcon sx={{ fontSize: 40 }} style={{color:"white"}}/>
        <p>0</p>
      </div>
      <div className="icon___container" onClick={() => setSend(!send)}>
        <SendContainer send={send}/>
        <p>0</p>
      </div>
      <div className="icon___container">
        <BookmarkIcon sx={{ fontSize: 40 }} style={{color:"white"}}/>
        <p>0</p>
      </div>
      <div className="icon___container">
        <PendingActionsIcon sx={{ fontSize: 40 }} style={{color:"white"}}/>
        <p>0</p>
      </div>
      <div className="icon___container">
        <AccountTreeIcon sx={{ fontSize: 40 }} style={{color:"white"}}/>
        <p>0</p>
      </div>
  </div>
  )
}

export default NavbarContainer;