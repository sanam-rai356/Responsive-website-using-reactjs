import React from "react";
import "./Campus.css";
import Gallery1 from "./../../img/gallery-1.png";
import Gallery2 from "./../../img/gallery-2.png";
import Gallery3 from "./../../img/gallery-3.png";
import Gallery4 from "./../../img/gallery-4.png";
import whitearrow from "./../../img/white-arrow.png";

const Campus = () => {
  return (
    <>
      <div className="container" id="MainCampus">
        <div className="campus">
          <div className="title">
            <p>Gallery</p>
            <h2>Campus Photos</h2>
          </div>

          <div className="gallery">
            <img src={Gallery1} />
            <img src={Gallery2} />
            <img src={Gallery3} />
            <img src={Gallery4} />
          </div>
          <button className="btn darkBTN">See more here <img src={whitearrow} /></button>
        </div>
      </div>
    </>
  );
};

export default Campus;
