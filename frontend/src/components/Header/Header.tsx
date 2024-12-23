import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  TextField,
  Box,
  Drawer,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import ProfilePic from "../../assets/avatar/avatar.jpg";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppBar position="static" className="header-appbar">
      <Toolbar className="header-toolbar">
        <Typography variant="h6" className="header-typography">
          Welcome Talia,
        </Typography>

        <Box className="right-container">
          <Box className="search-container">
            <TextField
              className="search-bar"
              variant="outlined"
              placeholder="Search"
              size="small"
              InputProps={{
                startAdornment: (
                  <IconButton edge="start" className="search-icon">
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </Box>

          <Box className="icon-container">
            <IconButton className="notification-icon">
              <NotificationsIcon style={{ color: "rgb(71, 133, 154)" }} />
            </IconButton>
            <IconButton className="mail-icon">
              <MailIcon style={{ color: "rgb(71, 133, 154)" }} />
            </IconButton>
            <Avatar alt="User" src={ProfilePic} className="avatar" />
          </Box>

          <Box className="mobile-container">
            <IconButton className="menu-button" onClick={toggleMenu}>
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={menuOpen} onClose={toggleMenu}>
              <Box
                role="presentation"
                className="drawer-container"
                onKeyDown={toggleMenu}
              >
                <div className="drawer-item">
                  <Avatar alt="User" src={ProfilePic} className="avatar" />
                  <span>Profile</span>
                </div>
                <div className="drawer-item">
                  <SearchIcon style={{ color: "rgb(71, 133, 154)" }} />
                  <span>Search</span>
                </div>
                <div className="drawer-item">
                  <NotificationsIcon style={{ color: "rgb(71, 133, 154)" }} />
                  <span>Notifications</span>
                </div>
                <div className="drawer-item">
                  <MailIcon style={{ color: "rgb(71, 133, 154)" }} />
                  <span>Mail</span>
                </div>
              </Box>
            </Drawer>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
