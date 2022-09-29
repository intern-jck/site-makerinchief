import React from "react";
import NavSocial from '../../components/Navbar/NavComponents/NavSocial.jsx';
import './About.css';

const About = () => {
  return (
    <div className="About">
      <div className='page-header'>
        <h1>About</h1>
      </div>
      <div className='about-info'>
        <h2>Makerinchief is a resource to help makers and hobbyist learn the basics of robotics, programming and engineering.</h2>
        <h2>The kits are designed to be straight forward to put together and robust enough to explore more concepts.</h2>
        <h2>Feel free to reach out with any questions and follow Makerincheif on social media for updates!</h2>
      </div>
      <div className='about-img'>
        <img src='https://iili.io/LAqcZb.jpg' />
      </div>
      <div className='about-social'>
        <NavSocial />
      </div>
    </div>
  )
};

export default About;
