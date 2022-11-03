import React from 'react';
// import KitCarousel from './KitCarousel/KitCarousel.jsx';
import Carousel from '../../../components/Carousel/Carousel.jsx';
import KitInfo from './KitInfo/KitInfo.jsx';
import './Kit.css';

const Kit = ({kit, tags}) => {
  return (
    <div className='Kit'>
      <div className='kit-content'>
        <div className='kit-carousel'>
          <Carousel slides={kit.photos.map((photo) => ({'img': photo}))} />
        </div>
        <div className='kit-info'>
          <KitInfo kit={kit} tags={tags}/>
        </div>
      </div>
    </div>
  )
};

export default Kit;
