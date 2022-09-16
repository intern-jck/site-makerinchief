import React from "react";
import {Link} from 'react-router-dom';
import './Home.css';

import homeImg from './intern-bot.jpg';
import kitsImg from './kits-img.jpg';
import resourcesImg from './resources-img.png';

const Home = () => {
  return (
    <div className="Home">

      <div className='page-header'>
        <h1>Makerinchief</h1>
        <h2>Helping makers make</h2>
      </div>

      {/* <div className='home-carousel'>
        <h2>Projects From The Internet</h2>
        <h3>CAROUSEL GOES HERE</h3>
      </div> */}

      <div className="home-panel">

        <div className="home-panel-item">
          <h2>KITS</h2>
          <div className="home-panel-img">
            <Link to='/kits'>
              <img src={kitsImg} />
            </Link>
          </div>
        </div>

        <div className="home-panel-item">
          <h2>RESOURCES</h2>
          <div className="home-panel-img">
            <Link to='/resources'>
              <img src={resourcesImg} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
