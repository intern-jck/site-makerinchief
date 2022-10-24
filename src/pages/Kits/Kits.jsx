import React, {useState, useEffect} from "react";
import axios from 'axios';
import Kit from './Kit/Kit.jsx';
import KitCard from './KitCard/KitCard.jsx';
import './Kits.css';

const Kits = () => {
  const [view, setView] = useState('');
  const [kits, setKits] = useState();
  const [kit, setKit] = useState();
  const [tags, setTags] = useState();

  useEffect(() => {
    getKitsData();
    getTechTags();
    setView('Kit');
  }, []);

  const getKitsData = () => {
    axios.get('data/kitsData.json')
      .then((response) => {
        setKits(response.data);
        setKit(response.data[0]);
      })
      .catch((error) => (console.log('Error fetching Kits:', error)));
  };

  const getTechTags = () => {
    axios.get('data/techTags.json')
      .then((response) => {
        setTags(response.data);
      })
      .catch((error) => (console.log('Error fetching Tags:', error)));
  };

  const viewKit = (event) => {
    event.preventDefault();
    const {name} = event.target;
    const id = event.target.getAttribute('data-id');
    if (id) {
      setKit(kits[id]);
      setView('Kit');
    }
  };

  const viewList = () => {
    setView('List');
  };

  return (
    <div className="Kits">

      <div className='page-header'>
        <h1>Kits</h1>
        {/* <h2>The kits below are meant to be educational kits for beginners learning programming and robotics.</h2> */}
        {/* <h2>They</h2> */}
        {/* <h2>I will update this page once I have all the files tested and ready to go so stay tuned!</h2> */}
        {/* <h2>Also, full kits will be available for purchase soon!</h2> */}
      </div>

      <div className="kits-content">
        {
          view === 'List' && kits ?
            kits.map((kit, i) => (
              <KitCard
                key={i}
                kitId={i}
                kit={kit}
                viewHandler={viewKit} />
            )) :
          view === 'Kit' && kit ?
            <>
              <button className='view-list-btn' onClick={viewList}>BACK TO KITS</button>
              <Kit
                kit={kit}
                tags={tags} />
            </> :
          null
        }
      </div>

    </div>
  )
};

export default Kits;
