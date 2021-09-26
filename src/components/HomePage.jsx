import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import one from '../image/1.svg';
import two from '../image/2.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh'
  },
  button: {
    color: 'blue',
  },
  center: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

function HomePage() {
  const classes = useStyles();

  return (

    <Grid id="Intro" className={classes.root} container spacing={2}>
        <Grid item xs={12} md={6}>
          <img className={classes.center} src={one} alt="one" width="500" height="400" />
        </Grid>
        <Grid item xs={12} md={6}>
          <img className={classes.center} src={two} alt="two" width="500" height="400" />
        </Grid>
    </Grid>

  );
}

export default HomePage;