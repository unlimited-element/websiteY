import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    block: {
      height: '400px',
      background: 'white',
    },
    center: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }));
  
  function Photos() {
    const classes = useStyles();
  
    return (
      <div data-aos="fade-up"
      data-aos-duration="3000">

      <Grid id="Photos" container spacing={2} className={classes.block}>
        <Typography className={classes.center} variant="h1">
        Hello World
        </Typography>
      </Grid>
      </div>
    );
  }
  
  export default Photos;