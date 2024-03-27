import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css'; // Import your CSS file

export default function Header() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div>
      <span style={{ fontSize: '30px',color: 'black', marginRight: '10px', textShadow: '2px 2px 5px #888' }}>
      🚗 {/* Car  emoji */}
        </span>
      <span style={{ fontSize: '30px' , color: 'blue'}} className="override-styles">SHOP NOW 🛍️</span>

      </div>

      <div className="nav-links">
        <NavLink to='/' className={location.pathname === '/' ? 'active-link' : ''}>Home</NavLink>
        <NavLink to='/Vehicles' className={location.pathname === '/Vehicles' ? 'active-link' : ''}>Vehicles</NavLink>
        <NavLink to='/Mensware' className={location.pathname === '/Mensware' ? 'active-link' : ''}>Mensware</NavLink>
        <NavLink to='/Kidsware' className={location.pathname === '/Kidsware' ? 'active-link' : ''}>Kidsware</NavLink>
        <NavLink to='/Womensware' className={location.pathname === '/Womensware' ? 'active-link' : ''}>Womensware</NavLink>
       
        <NavLink to='/Userprofile'>👤</NavLink>
       
       
        
        <NavLink to='/Login' className={location.pathname === '/Login' ? 'active-link' : ''}>Login</NavLink>

        {/* Add the search bar */}
        <input type="text" style={{ width: "300px", marginRight: '20px' }} placeholder="Search" />
      </div>
    </nav>
  );
}
