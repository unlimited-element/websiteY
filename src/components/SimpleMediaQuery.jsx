import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Typography, MenuItem, Menu } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

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

 function SimpleMediaQuery() {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)');
  const hideMatch = useMediaQuery('(min-width:600px)');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
  <Box className={classes.root} >
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        {matches ?
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
        </IconButton>
        : null}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          JBLabs
        </Typography>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem>
              <Button href="#Intro" color="inherit">Intro</Button>
            </MenuItem>
            <MenuItem>
              <Button href="#About" color="inherit">About Me</Button>
            </MenuItem>
            <MenuItem>
              <Button href="#Photos" color="inherit">Photos</Button>
            </MenuItem>
          </Menu>
          {hideMatch ? 
          <MenuItem>
        <Button href="#Intro" color="inherit">Intro</Button>
        <Button href="#About" color="inherit">About Me</Button>
        <Button href="#Photos" color="inherit">Photos</Button>
        </MenuItem>
      : null}
      </Toolbar>
    </AppBar>
  </Box>
  );
}

export default SimpleMediaQuery;