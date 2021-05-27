import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className='navigation'>
      <div className='menu-icon' onClick={handleClick}>
        <div className={click ? 'menu-close' : 'menu-open'}></div>
      </div>
      <ul className='navigation-container'>
        <li className='nav-link'>
          <Link to="/artwork" onClick={closeMenu}>Artwork</Link>
        </li>
        <li className='nav-link'>
          <Link to="/emotes" onClick={closeMenu}>Emotes</Link>
        </li>
        <li className='nav-link'>
          <Link to="/commissions" onClick={closeMenu}>Commissions</Link>
        </li>
      </ul>
    </nav>
  )
}