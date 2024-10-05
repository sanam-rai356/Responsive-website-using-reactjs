import React from "react";
import "./Programs.css";
import Program1 from "./../../img/program-1.png";
import Program2 from "./../../img/program-2.png";
import Program3 from "./../../img/program-3.png";
import ProgramIcon1 from "./../../img/program-icon-1.png";
import ProgramIcon2 from "./../../img/program-icon-2.png";
import ProgramIcon3 from "./../../img/program-icon-3.png";

const Programs = () => {
  return (
    <>
      <div className="container" id="program">
        <div className="title">
          <p>Our Program</p>
          <h2>What We Offer?</h2>
        </div>
        <div className="programs">
          <div className="program">
            <img src={Program1} />
            <div className="caption">
              <img src={ProgramIcon1} alt="" />
              <p>Graduation Degree</p>
            </div>
          </div>

          <div className="program">
            <img src={Program2} />
            <div className="caption">
              <img src={ProgramIcon2} alt="" />
              <p>Master Degree</p>
            </div>
          </div>

          <div className="program">
            <img src={Program3} />
            <div className="caption">
              <img src={ProgramIcon3} alt="" />
              <p>Post Graduation</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
