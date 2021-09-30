import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { ImageList, ImageListItem, Grid } from '@mui/material';
import VacayOne from '../image/VacayOne.jpg';
import VacayTwo from '../image/VacayTwo.jpg';
import VacayThree from '../image/VacayThree.jpg';
import VacayFour from '../image/VacayFour.jpg';
import VacayFive from '../image/VacayFive.jpg';
import VacaySix from '../image/VacaySix.jpg';

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

const itemData = [
  VacayOne,
  VacayTwo,
  VacayThree,
  VacayFour,
  VacayFive,
  VacaySix
]
  
  function Photos() {
    const classes = useStyles();
  
    return (
      <div data-aos="fade-up"
      data-aos-duration="3000">

      <Grid id="Photos" container spacing={2} className={classes.block}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item}>
              <img
                src={`${item}?w=248&fit=crop&auto=format`}
                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      </div>
    );
  }
  
  export default Photos;