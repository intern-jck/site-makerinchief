import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel.jsx';
import './Home.css';

const Home = () => {
  const [projectSlides, setProjectSlides] = useState();

  useEffect(() => {
    axios.get('/data/examples.json')
      .then((response) => (setProjectSlides(response.data)))
      .catch((error) => (console.log(`Error getting examples.json${error}`)));

  }, []);

  return (
    <div className="Home">

      <div className='page-header'>
        <h1>Makerinchief</h1>
      </div>

      <h2>Projects From The Internet</h2>
      <div className='home-projects-carousel'>
        {
          projectSlides ?
          <Carousel slides={projectSlides} /> : null
        }
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
