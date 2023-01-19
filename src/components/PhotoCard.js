import React from "react";
import classes from "./PhotoCard.module.css";
const PhotoCard = (props) => {
  return (
    <div>
      <img className={classes.temp} src={props.img} alt="" />
    </div>
  );
};

export default PhotoCard;
