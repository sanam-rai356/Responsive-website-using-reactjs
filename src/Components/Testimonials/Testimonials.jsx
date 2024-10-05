import React, { useRef } from "react";
import "./Testimonials.css";
import NextIcon from "./../../img/next-icon.png";
import BackIcon from "./../../img/back-icon.png";
import User1 from "./../../img/user-1.png";
import User2 from "./../../img/user-2.png";
import User3 from "./../../img/user-3.png";
import User4 from "./../../img/user-4.png";

const Testimonials = () => {

    const slider = useRef()
    let Tx = 0;
    const slideForward =()=>{
        if(Tx > -50){
            Tx -= 25;
        }
        slider.current.style.transform = `translateX(${Tx}%)`
    }

    const slideBackward=()=>{
        if(Tx < 0){
            Tx += 25;
        }
        slider.current.style.transform = `translateX(${Tx}%)`
    }
  return (
    <>
      <div className="container" id="mainTestimonial">
        <div className="testimonial">
          <div className="title">
            <p>Testimonials</p>
            <h2>What Student Says</h2>
          </div>
          <div className="innerTestimonial">
            <img src={NextIcon} className="next-btn" onClick={slideForward}/>
            <img src={BackIcon} className="back-btn" onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="userInfo">
                                <img src={User1} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best descisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceded my expectations.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="userInfo">
                                <img src={User2} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best descisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceded my expectations.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="userInfo">
                                <img src={User3} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best descisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceded my expectations.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="userInfo">
                                <img src={User4} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best descisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceded my expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
