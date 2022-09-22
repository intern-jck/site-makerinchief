import React from "react";
// import KitCarousel from './KitCarousel/KitCarousel.jsx';
import KitInfo from './KitInfo/KitInfo.jsx';
import './Kit.css';

const Kit = ({kit, viewHandler}) => {
  return (
    <div className="Kit">
      <button name='List' onClick={viewHandler}>BACK</button>
      <div className="kit-content">
        {/* <KitCarousel slides={kit.photos} /> */}
        <KitInfo kit={kit} />
      </div>
    </div>
  )
};

export default Kit;
