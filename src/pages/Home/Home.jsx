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
        {/* <h2>Makerinchief offers kits and resources so you can become a maker-in-chief too!</h2> */}
        <h2>Scroll through the kits available below and click the links above to see more!</h2>
      </div>

      <div className='home-carousel'>
        {
          slides ?
          <Carousel slides={slides} /> : null
        }
      </div>

    </div>
  )
};

export default Home;
