import React from 'react';
import {NavLink} from 'react-router-dom';
import {FaHome, FaGithub, FaYoutube, FaInstagram} from 'react-icons/fa';
import NavMenu from '../NavMenu/NavMenu.jsx';
import './OpenNavbar.css';

const OpenNavMenu = () => {
  return (
    <nav className='OpenNavMenu'>
      {/* <NavMenu /> */}

      {/* <div className='open-nav-home'>
        <NavLink to='/' >
          <FaHome size={60} />
        </NavLink>
      </div>

      <div className='open-nav-menu'>
        <ul>
          <li>
            <NavLink to='kits'>
              Kits
            </NavLink>
          </li>
          <li>
            <NavLink to='resources'>
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink to='about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='contact'>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className='open-nav-social'>
        <a className='nav-social-icon' href='#' target='_blank'>
          <FaGithub className='page-icons onclick' size={60}/>
        </a>
        <a className='nav-social-icon' href='#' target='_blank'>
          <FaYoutube className='page-icons onclick' size={60}/>
        </a>
        <a className='nav-social-icon' href='#' target='_blank'>
          <FaInstagram className='page-icons onclick' size={60}/>
        </a>
      </div> */}

    </nav>
  );
};

export default OpenNavMenu;
