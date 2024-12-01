import React from 'react';
import Logo from './logo.svg';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='nav-left'>
          <img src={Logo} className='logo' alt="" />
        </div>
        <div className='nav-right'>
          <ul>
            <li className='nav-link'><Link to='/'>Home</Link></li>
            <li className='nav-link'><Link to='/about'>About</Link></li>
            <li className='nav-link'><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
    </nav>
  )
}