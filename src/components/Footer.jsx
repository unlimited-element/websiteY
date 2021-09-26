import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Linkedin  from '../image/linkedin.svg';
import Twitter from '../image/twitter.svg';
import GitHub from '../image/github.svg';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '5rem',
    },
    footer: {
      position: 'fixed',
      width: '100%',
      bottom: '0',
      backgroundColor: '#36454f',
      color: 'white',
      textAlign: 'center',
      opacity: '0.6',
    },
  }));
  
  function Footer() {
    const classes = useStyles();
  
    return (
      <div data-aos="fade-left" className={classes.footer} >
        <div > 
            <a href="https://github.com/unlimited-element" className={classes.root}>
                <img className="highlight" width="50" height="55" src={GitHub} alt="github" title="GitHub" />
            </a>
            <a href="https://twitter.com/unlimitdelement/" className={classes.root}>
                <img className="highlight" width="50" height="55" src={Twitter} alt="twitter" title="Twitter" />
            </a>
            <a href="https://www.linkedin.com/in/coderjulius/" className={classes.root}>
                <img className="highlight" width="50" height="55" src={Linkedin} alt="linkedin" title="Linkedin" />
            </a>
        </div>
      </div>
    );
  }
  
  export default Footer;