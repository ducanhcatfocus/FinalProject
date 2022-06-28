import React from 'react';
import { useState } from 'react';
import './searchbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavbarContainer from '../navbar/navbar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LanguageIcon from '@mui/icons-material/Language';


const SearchbarComponent = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div className="searchbar__container">
            <div className="logosearchbar__container">
                <div className="logo__container">
                    <h1>G</h1>
                </div>
                <div className="search__container">
                    <div></div>
                    <div className="searchbarinput__container">
                        <input className="searchbar__input" type="text" placeholder='Search document'/>
                        <button><SearchIcon style={{color: "gray"}} size="large"/></button>
                    </div>
                    <div></div>
                </div>
            </div>
            <NavbarContainer/>
            <div className="usersetting__container">
                <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 50, height: 50}}
                />
                <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    <ExpandMoreIcon className="" sx={{ fontSize: 28 }} style={{color:"white"}}/>
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuList>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <PersonIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Profile</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <LanguageIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Langauge</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <ModeNightIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Darkmode</ListItemText>
                        </MenuItem>
                            <Divider />
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <LogoutIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Logout</ListItemText>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </div>
    )
}

export default SearchbarComponent