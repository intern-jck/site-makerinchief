import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {GiHamburgerMenu, GoX} from 'react-icons/gi';
import {FaGithub, FaYoutube, FaInstagram} from 'react-icons/fa';
import './ClosedNavbar.css';

const ClosedNavMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log('show menu', showMenu)
  }

  return (
    <div className='ClosedNavbar'>

    {
      showMenu ?
        <>
          <button onClick={toggleMenu}>
            <GiHamburgerMenu className='page-icons onclick' size={60}/>
          </button>

          <ul>
            <li className='closed-nav-item'>
              <NavLink to='kits'>
                Kits
              </NavLink>
            </li>
            <li className='closed-nav-item'>
              <NavLink to='resources'>
                Resources
              </NavLink>
            </li>
            <li className='closed-nav-item'>
              <NavLink to='about'>
                About
              </NavLink>
            </li>
            <li className='closed-nav-item'>
              <NavLink to='contact'>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className='closed-nav-icons'>
            <a className='closed-nav-icon' href='#' target='_blank'>
              <FaGithub className='page-icons onclick' size={60}/>
            </a>
            <a className='closed-nav-icon' href='#' target='_blank'>
              <FaYoutube className='page-icons onclick' size={60}/>
            </a>
            <a className='closed-nav-icon' href='#' target='_blank'>
              <FaInstagram className='page-icons onclick' size={60}/>
            </a>
          </div>
        </> :
        <button onClick={toggleMenu}>
          <GiHamburgerMenu className='page-icons onclick' size={60}/>
        </button>

    }




    </div>
  );
};

export default ClosedNavMenu;
