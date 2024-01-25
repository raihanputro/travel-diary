import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import classes from './style.module.scss';

const CardPost = ({ img, title, date, author, shortDesc}) => {
  const navigate = useNavigate();
  return (
    <Card className={classes.cardContainer} sx={{ backgroundColor: 'white', boxShadow: '0px 0px 15px 0px rgba(82, 82, 82, 0.18)' }} onClick={(() => {navigate(`/detail`)})}>
        <CardActionArea sx={{ backgroundColor: 'white', width: '100%' }}>
          <CardMedia
            component="img"
            image={img}
            alt={title}
          />
          <CardContent>
            <Typography className={classes.titleCard} variant="h5" component="div">
              {title}
            </Typography>
            <Typography className={classes.dateCard} variant="body2" color="text.secondary" sx={{ fontSize: '20px', fontWeight: 'bolder' }}>
              {date}, {author}
            </Typography>
            <Typography className={classes.shortDescCard} variant="body2" color="text.secondary">
              {shortDesc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  )
}

CardPost.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
    shortDesc: PropTypes.string
  };
  

export default CardPost