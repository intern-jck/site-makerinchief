import React, { useState } from 'react';
import './KitInfo.css';

import { FaYoutube, FaGithub } from 'react-icons/fa';

const KitInfo = ({kit, tags}) => {
  return (
    <div className='KitInfo'>
      <h1 className='kit-info-name'>
        {kit.name}
      </h1>
      {/* <div className='kit-info-tech'>
        {kit.tech.map((tag, i) => {
          return <a key={i} href={tags[tag].url} target='_blank'>{tags[tag].name}</a>
        })}
      </div> */}
      <p className='kit-info-info'>
        {kit.info}
      </p>
      <div className='kit-info-links'>
        <a>
          <FaYoutube size={60} />
        </a>
        <a>
          <FaGithub size={60} />
        </a>
      </div>
    </div>
  );
};

export default KitInfo;
