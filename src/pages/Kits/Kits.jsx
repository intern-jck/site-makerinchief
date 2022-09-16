import React, {useState, useEffect} from "react";
import Kit from './Kit/Kit.jsx';
import KitCard from './KitCard/KitCard.jsx';
import './Kits.css';

import kitsData from './kitsInfo.json';

const Kits = () => {
  const [view, setView] = useState('');
  const [kits, setKits] = useState(kitsData);
  const [kit, setKit] = useState(kitsData[0]);

  useEffect(() => {
    setKits(kitsData);
    setKit(kitsData[0]);
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
          view === 'List' ?
            kits.map((kit, i) => (
              <KitCard
                key={i}
                kitId={i}
                kit={kit}
                viewHandler={viewKit} />
            )) :
          view === 'Kit' ?
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
