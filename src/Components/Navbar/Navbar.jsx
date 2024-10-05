import React, { useEffect, useRef, useState } from 'react';
import "./Navbar.css";
import Logo from "./../../img/logo.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Bar from "./../../img/menu-icon.png";

const Navbar = () => {
  const [sticky,setSticky] = useState(false);
  const NavToggle = useRef()

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[]);

  const openToggle=()=>{
    NavToggle.current.style.right="0px";
  }
  const CloseToggle=()=>{
    NavToggle.current.style.right="-250px";
  }
  return (
    <>
      <nav className={`container ${sticky? 'darkNav' : ''}`}>
        <img src={Logo}/>
        <ul ref={NavToggle}>
       
            <li><AnchorLink href="#mainHero" offset={0}>Home</AnchorLink></li>
            <li><AnchorLink href="#program" offset={80}>Program</AnchorLink></li>
            <li><AnchorLink href="#MainAbout" offset={80}>About Us</AnchorLink></li>
            <li><AnchorLink href="#MainCampus" offset={80}>Campus</AnchorLink></li>
            <li><AnchorLink href="#mainTestimonial" offset={80}>Testimonials</AnchorLink></li>
            <li><AnchorLink href="#mainContact" offset={80}><button className='btn'>Contact Us</button></AnchorLink></li>
            <i className="fa-solid fa-xmark" onClick={CloseToggle}></i>
        </ul>

        <img src={Bar} className='bar' onClick={openToggle} />
      </nav>
    </>
  )
}

export default Navbar
