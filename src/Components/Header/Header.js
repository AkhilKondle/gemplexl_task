import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

import LogoutIcon from '@mui/icons-material/Logout';


export default function Header() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value)
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="fixed" style={{ backgroundColor: '#232b2b', top: 0, right: 0 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img src='https://res.cloudinary.com/dyivs1j8u/image/upload/v1709120242/download-removebg-preview_1_fotw06.png' style={{color:'white',height:'60px',width:'140px'}}/>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box >
            
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
             <SearchIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              
              aria-haspopup="true"
              
              color="inherit"
            >
              <ShoppingCartIcon/>
            </IconButton>
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              
              aria-haspopup="true"
              
              color="inherit"
            >
              <LogoutIcon/>
            </IconButton>
            </Link>
          </Box>
          
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}
