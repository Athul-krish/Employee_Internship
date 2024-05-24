import { AppBar, Box, Button, IconButton, Toolbar, Typography, } from '@mui/material'
//import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from 'react-router-dom'
import BlurOnTwoToneIcon from '@mui/icons-material/BlurOnTwoTone';
import './navbar.css'

const Navbar = () => {
  return (
    <div>
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
            <BlurOnTwoToneIcon/>

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 5 }} align='left'>
            Employee
          </Typography>
          <Button variant='contained' color='warning'><Link id='button_add' to={'/add'}>Add</Link></Button>&nbsp;
          <Button variant='contained' color='warning'><Link id="button_view" to={'/'}>View</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>

    </div>
  )
}

export default Navbar
