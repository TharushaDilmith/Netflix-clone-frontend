import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./listItem.scss";

export default function ListItem({ index }) {
  const [isHovered, setisHovered] = useState(false);
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bDuT2OqzfpxNFRNp4oBKaPD4n2bBAMiGWQ&usqp=CAU" />

      {isHovered && (
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className="icon" />
            <Add className="icon"/>
            <ThumbUpAltOutlined className="icon" />
            <ThumbDownAltOutlined className="icon" />
          </div>
          <div className="itemInfoTop">
            <span>1 hour 14 mins</span>
            <span className="limit">+16</span>
            <span>1999</span>
          </div>
          <div className="desc">
            dan sapada dan sapada dan sapada dan sapada dan sapada dan sapada
          </div>
          <div className="genre">Action</div>
        </div>
      )}
    </div>
  );
}
