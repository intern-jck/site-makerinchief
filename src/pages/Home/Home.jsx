import React, {useEffect} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel.jsx';
import './Home.css';

const Home = () => {
  useEffect(() => {

  }, []);

  return (
    <div className="Home">

      <div className='page-header'>
        <h1>Makerinchief</h1>
      </div>

      <div className='home-projects-carousel'>
        <h2>Projects From The Internet</h2>
        <Carousel />
      </div>

      <div className="home-panel">

        <div className="home-panel-item">
          <h2>KITS</h2>
          <div className="home-panel-img">
            <Link to='/kits'>
              {/* <img src={kitsImg} /> */}
            </Link>
          </div>
        </div>

        <div className="home-panel-item">
          <h2>RESOURCES</h2>
          <div className="home-panel-img">
            <Link to='/resources'>
              {/* <img src={resourcesImg} /> */}
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
};

export default Home;
