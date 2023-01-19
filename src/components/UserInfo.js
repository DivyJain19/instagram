import React from "react";
import classes from "./UserInfo.module.css";
import { AiOutlineUserAdd } from "react-icons/ai";
const UserInfo = (props) => {
  return (
    <div className={classes.infoDiv}>
      <div>
        <img
          className={classes.userImg}
          src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
          alt=""
        />
      </div>
      <div className={classes.userText}>
        <div className={classes.flx}>
          <p className={classes.text}>{props.userData.username}</p>
          <button className={classes.btn}>Follow</button>
          <button className={classes.btn}>Message</button>
          <button className={classes.addbtn}>
            <AiOutlineUserAdd color="white" />
          </button>
        </div>
        <div className={classes.flx}>
          <p className={classes.text}>xxx posts</p>
          <p className={classes.text}>xxx followers</p>
          <p className={classes.text}>xxx following</p>
        </div>
        <div>
          <p className={classes.text}>{props.userData.name}</p>
          <p className={classes.text}>{props.userData.website}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
