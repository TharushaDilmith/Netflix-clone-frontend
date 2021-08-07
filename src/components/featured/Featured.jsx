import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./featured.scss";

export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type==="movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="thriller">Thriller</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                    <option value="crime">Crime</option>
                    <option value="adventure">Adventure</option>
                </select>
            </div>
        )}
      <img
        src="https://i.gadgets360cdn.com/large/game-of-thrones-s07e06-white-walkers-2_1503299481286.jpg"
        alt=""
        width="100%"
      />
      <div className="info">
        <img
          src="https://thedubliner.gr/wp-content/uploads/game_of_thrones_logo.png"
          alt=""
          width="100%"
        />
        <span className="desc">
            apita ona apita ona apita ona apita onaapita ona apita ona apita ona apita ona apita ona apita ona
            apita ona apita ona apita ona apita ona apita ona apita ona apita ona apita ona apita ona apita ona
        </span>
        <div className="buttons">
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlined/>
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  );
}
