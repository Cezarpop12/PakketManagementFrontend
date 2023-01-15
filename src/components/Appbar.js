import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



export default function Appbar() {
  return (
    <div data-testid="the_man">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
          <Typography variant='h6' component="div" sx={{flexGrow:1}}>
          <Link to='/allePostzegels' style={{textDecoration:"none"}}>
            <Button variant="contained" style={{ backgroundColor: "#353535" }} color="secondary">
            Alle postzegels
                </Button>
            </Link>
          </Typography>
          <Typography variant='h6' component="div" sx={{flexGrow:25}}>
          <Link to='/postzegelAanmaken' style={{textDecoration:"none"}}>
            <Button variant="contained" style={{ backgroundColor: "#353535" }} color="secondary">
            Postzegel aanmaken
                </Button>
            </Link>
          </Typography>

            <Link to='/herinneringen' style={{textDecoration:"none"}}>
            <Button variant="contained" style={{ backgroundColor: "#9B0000", float:'right'}} color="secondary">
                Herinneringen <NotificationsActiveIcon fontSize="small"/>
                </Button>
            </Link>
            &emsp;
            <Link to='/' style={{textDecoration:"none"}}>
            <Button variant="contained" style={{ backgroundColor: "#353535", float:'right' }} color="secondary">
                Homepagina <HomeIcon fontSize="small"/>
                </Button>
            </Link>
            &emsp;
            <Link to='/PakketjeAanmaken' style={{textDecoration:"none"}}>
            <Button variant="contained" style={{ backgroundColor: "#353535", float:'right'}} color="secondary">
                Pakketje aanmaken <EmailIcon fontSize="small" />
                </Button>
            </Link>
            &emsp;
            <Link to='/registreren' style={{textDecoration:"none"}}>
            <Button variant="contained" style={{ backgroundColor: "#353535", float:"right" }} color="secondary">
                Registreren <AccountCircleIcon fontSize="small"/>
                </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
