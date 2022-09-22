import React from 'react';
import './KitCard.css';
const LOCAL_URL = 'http://127.0.0.1:8080/media/';

const KitCard = ({kitId, kit, viewHandler}) => {
  return (
    <div className='KitCard' onClick={viewHandler}>
      <h2 className='kit-card-name'>{kit.name}</h2>
      <div className='kit-card-img'>
        <img src={kit.photos[0]} data-id={kitId}/>
      </div>
      <h3 className='kit-card-short'>{kit.short}</h3>
    </div>
  )
};

export default KitCard;
