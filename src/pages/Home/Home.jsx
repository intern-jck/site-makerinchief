import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel.jsx';
import './Home.css';

const kitsImg = 'https://iili.io/sbJOmu.jpg';
const resourcesImg = 'https://iili.io/sbJw79.png';

const Home = () => {
  const [slides, setSlides] = useState();

  useEffect(() => {
    axios.get('/data/kitsData.json')
      .then((response) => {
        const slidesForCarousel = response.data.map((kit) => {
          return {
            'header': kit.name,
            'short': kit.short,
            'img': kit.photos[0],
          }
        });
        setSlides(slidesForCarousel);
      })
      .catch((error) => (console.log(`Error getting examples.json${error}`)));
  }, []);

  return (
    <div className="Home">

      <div className='page-header'>
        <h1>Welcome Maker!</h1>
      </div>


      <div className='home-carousel'>
        {
          slides ?
          <Carousel slides={slides} /> : null
        }
      </div>

      {/* <div className='home-panel-header'>
        <h2>Explore site for more content!</h2>
      </div> */}

      {/* <div className="home-panel">
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
      </div> */}

    </div>
  )
};

export default Home;
