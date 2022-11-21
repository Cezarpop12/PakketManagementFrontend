import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';  
import { Login } from '@mui/icons-material';

export default function Appbar() {
  return (  
    <div data-testid="the_man"> 
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pakketjes Manager
          </Typography>
          <Link to='/' className='btn'>
            Home
          </Link>
          &emsp;
          <Link to='/PakketjeAanmaken'>
            Pakketje aanmaken
          </Link>
          &emsp;
          <main className='column'>
          <LoginButton />
          <LogoutButton />
          </main>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
