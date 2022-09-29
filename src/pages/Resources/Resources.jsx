import React, {useState, useEffect} from "react";
import axios from 'axios';
import './Resources.css';

const Resources = () => {
  const [resources, setResources] = useState();

  const getResourcesData = () => {
    axios.get('data/resources.json')
      .then((response) => {
        setResources(response.data);
        console.log(response.data)
      })
      .catch((error) => (console.log('Error fetching Resources:', error)));
  };
  useEffect(() => {
    getResourcesData();
  }, []);

  return (
    <div className="Resources">
      <div className='page-header'>
        <h1>Resources</h1>
        <h2>Everything below was used to create the kits you see on this site.</h2>
        <h2>Below are sites for tutorials, parts and videos to learn everything you need to know!</h2>
      </div>
      <div className='resources-content'>

        {
          resources ?
          // <h2>resources</h2> :
          resources.map((resource, i) => {
            return (
              <div key ={i} className='resource-item'>
                <h3 className='resource-name'>{resource.name}</h3>
                <h4 className='resource-info'>{resource.info}</h4>
                <div className='resource-img-container'>
                  <a href={resource.url}>
                    <img src={resource.photo} />
                  </a>
                </div>
              </div>
            );
          }) :
          null
        }

      </div>
    </div>
  )
};

export default Resources;
