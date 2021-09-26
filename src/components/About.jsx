import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    block: {
      minHeight: '100vh',
      background: 'rgba(212,208,208,1)',
    },
    center: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }));
  
  function About() {
    const classes = useStyles();
  
    return (
      <div data-aos="fade-up"
      data-aos-duration="1000">

      <Grid id="About" container spacing={2} className={classes.block}>
        <Typography className={classes.center} variant="h1">
        Hello World
        </Typography>
      </Grid>
      </div>
    );
  }
  
  export default About;