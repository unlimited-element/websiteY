import React from "react";
import { makeStyles } from '@mui/styles';
import { Grid, Avatar, Tooltip } from '@mui/material';
import selfie from '../image/selfie.JPG';
import Bootstrap from '../image/Bootstrap.svg';
import CSS from '../image/CSS.png';
import Express from '../image/expressjs.png';
import Git from '../image/Git.png';
import HTML from '../image/HTML.png';
import Javascript from '../image/javascript.png';
import MongoDB from '../image/mongoDB.png';
import Sass from '../image/Sass.png';
import Reactjs from '../image/reactjs.png';
import Nodejs from '../image/Nodejs.png';

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
    smaller: {
      width: '200px',
      height: '9rem',
    },
    margin: {
      paddingLeft: '2rem',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  }));
  
  function About() {
    const classes = useStyles();
  
    return (
      <div data-aos="fade-up"
      data-aos-duration="1000">

        <Grid id="About" className={classes.block}>
          <Avatar
            className={classes.center}
            alt="selfie"
            src={selfie}
            sx={{ width: 150, height: 200 }}
          />
              <p className={classes.margin} >
                <Tooltip
                  title="BOOTSTRAP"
                  data-aos="zoom-out-left"
                  >
                  <img className={classes.smaller} src={Bootstrap} alt="bootstrap" />
                </Tooltip>
                <Tooltip
                  title="CSS3"
                  data-aos="zoom-out-left"
                >
                  <img className={classes.smaller} src={CSS} alt="css3" />
                </Tooltip>
                <Tooltip
                  title="MONGODB"
                  data-aos="zoom-out-left"
                  >
                  <img className={classes.smaller} src={MongoDB} alt="mongoDB" />
                </Tooltip>
                <Tooltip
                  title="JAVASCRIPT"
                  data-aos="zoom-out-left"
                  >
                  <img className={classes.smaller} src={Javascript} alt="javascript" />
                </Tooltip>

                <Tooltip
                  title="HTML"
                  data-aos="zoom-out-left"
                  >
                  <img className={classes.smaller} src={HTML} alt="HTML5" />
                </Tooltip>

                <Tooltip
                  title="GIT"
                  data-aos="zoom-out-left"
                  >
                  <img className={classes.smaller} src={Git} alt="Git" />
                </Tooltip>
                <Tooltip
                  title="EXPRESS"
                  data-aos="zoom-out-left"
                  >
                  <img className={classes.smaller} src={Express} alt="Expressjs" />
                </Tooltip>
                <Tooltip
                  title="SASS"
                  data-aos="zoom-out-left"
                  >
                  <img className={classes.smaller} src={Sass} alt="Sass" />
                </Tooltip>
                <Tooltip
                  title="NODEJS"
                  data-aos="zoom-out-left"
                  >
                  <img className={classes.smaller} src={Nodejs} alt="Node" />
                </Tooltip>
                <Tooltip
                  title="REACT"
                  data-aos="zoom-out-left"
                  >
                  <img className={classes.smaller} src={Reactjs} alt="React" />
                </Tooltip>
              </p>
        </Grid>
      </div>
    );
  }
  
  export default About;