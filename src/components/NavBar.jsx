import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

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
  <AppBar position="static" className={classes.appBar}>
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon fontSize="small"/>
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        JB Labs
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
  );
}

export default NavBar;