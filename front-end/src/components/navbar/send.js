import React from 'react';
import "./navbar.scss";
import PostAddIcon from '@mui/icons-material/PostAdd';
import ArticleIcon from '@mui/icons-material/Article';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SendIcon from '@mui/icons-material/Send';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

const SendContainer = (props) => {
    
  return (
    <div className="postadd__container">
        <div className="icon___container">
            <SendIcon sx={{ fontSize: 40 }} style={{color: props.send ? "black":"white"}}/>
            <p>0</p>
        </div>
  </div>
  )
}

export default SendContainer;