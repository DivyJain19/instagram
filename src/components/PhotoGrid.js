import React from "react";
import classes from "./PhotoGrid.module.css";
import PhotoCard from "./PhotoCard";
import { BsGrid3X3 } from "react-icons/bs";
import { RiVideoLine } from "react-icons/ri";
import { BiUserPin } from "react-icons/bi";
const PhotoGrid = (props) => {
  return (
    <div>
      <div className={classes.select}>
        <p className={classes.text}>
          <BsGrid3X3 size={13} />
          Posts
        </p>
        <p className={classes.text}>
          <RiVideoLine size={13} />
          Reels
        </p>
        <p className={classes.text}>
          <BiUserPin size={13} />
          Tags
        </p>
      </div>
      <div className={classes.grid}>
        <div className={classes.gridContainer}>
          {props.photos.map((item) => {
            return (
              <div key={item.id} className={classes.gridItem}>
                <PhotoCard img={item.thumbnailUrl} />
                <p className={classes.imageText}>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
