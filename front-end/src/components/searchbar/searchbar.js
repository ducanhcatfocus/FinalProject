import React from 'react';
import './searchbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const SearchbarComponent = () => {
  return (
    <div className="searchbar__container">
        <div className="logo__container">
            <h1>Google</h1>
        </div>
        <div className="search__container">
            <div></div>
            <div className="searchbarinput__container">
                <input className="searchbar__input" type="text" placeholder='Search document'/>
                <button><SearchIcon style={{color: "gray"}} size="large"/></button>
            </div>
            <div></div>
        </div>
        <div className="usersetting__container">
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 50, height: 50}}
            />
           <ExpandMoreIcon className="" sx={{ fontSize: 30 }} style={{color:"white"}}/>
        </div>
    </div>
  )
}

export default SearchbarComponent