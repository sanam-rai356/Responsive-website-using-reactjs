import React from "react";
import "./About.css";
import AboutImg from "./../../img/about.png";
import PlayIcon from "./../../img/play-icon.png";

const About = () => {
  return (
    <>
      <div className="container" id="MainAbout">
        <div className="about">
          <div className="aboutLeft">
            <img src={AboutImg} className="aboutImg" />
            <img src={PlayIcon} className="PlayIcon" />
          </div>

          <div className="aboutRight">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>
              Embark on a transformative educational journey with our
              university's comprehensive education programs. Our cutting-edge
              curriculum is designed to empower students with the knowledge,
              skulls, and experiences needed to excel in the dynamic field of
              education
            </p>

            <p>
              With a focus on innovation, hands-0n learning, and personalized
              mentorship, our programs prepare aspiring educators to make a
              meaningful impact in classrooms, schools and communitis.
            </p>

            <p>
              Whether you aspire to become a teacher, administrator, counselor,
              or educational leader, our diverse range of programs offers the
              perfect pathway to achieve your gaols and unlock your full
              potential in shaping the future of educaton
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
