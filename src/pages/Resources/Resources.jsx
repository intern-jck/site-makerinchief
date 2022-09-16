import React from "react";
import './Resources.css';

import resources from './resources.json';

const Resources = () => {
  console.log(resources)
  return (
    <div className="Resources">
      <div className='page-header'>
        <h1>Resources</h1>
      </div>
      <div className='resources-content'>

      </div>
    </div>
  )
};

export default Resources;
