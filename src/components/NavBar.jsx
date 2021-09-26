import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: 'linear-gradient(90deg, rgba(54,69,79,1) 1%, rgba(163,171,176,1) 70%, rgba(212,208,208,1) 100%)',
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
  <Box className={classes.root} >
    <AppBar className={classes.appBar} position="static">
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
          JBLabs
        </Typography>
        <div>
        <Button href="#Intro" color="inherit">Intro</Button>
        <Button href="#About" color="inherit">About Me</Button>
        <Button href="#Photos" color="inherit">Photos</Button>
      </div>
      </Toolbar>
    </AppBar>
  </Box>
  );
}

export default NavBar;