import React, {useState, useEffect} from "react";
import axios from 'axios';
import Kit from './Kit/Kit.jsx';
import KitCard from './KitCard/KitCard.jsx';
import './Kits.css';

const Kits = () => {
  const [view, setView] = useState('');
  const [kits, setKits] = useState();
  const [kit, setKit] = useState();

  const getKitsData = () => {
    axios.get('data/kitsData.json')
      .then((response) => {
        setKits(response.data);
        setKit(response.data[0]);
      })
      .catch((error) => (console.log('Error fetching Kits:', error)));
  };

  useEffect(() => {
    getKitsData();
    setView('List');
  }, []);

  const viewKit = (event) => {
    event.preventDefault();
    const {name} = event.target;
    const id = event.target.getAttribute('data-id');
    setKit(kits[id]);
    setView('Kit');
  };

  const viewList = (event) => {
    event.preventDefault();
    const {name} = event.target;
    if (name === 'List') {
      setView('List');
    };
  };

  return (
    <div className="Kits">

      <div className='page-header'>
        <h1>Kits</h1>
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
            <Kit
              kit={kit}
              viewHandler={viewList} /> :
            null
        }
      </div>
    </div>
  )
};

export default Kits;
