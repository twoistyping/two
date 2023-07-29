import React, { useState } from "react"
import { Link } from "react-router-dom"

import Social from "../components/Social"
import SvgMenu from "../svgComponents/Menu"
import SvgLogo from "../svgComponents/Logo"
import Button from "../components/Button"

export default function Nav() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)

  return (
    <nav className={"navigation-wrapper " + (click ? "menu-close" : "menu-open")}>
      <div className="logo">
        <Link className="no-style" to="/" onClick={closeMenu}>
          <SvgLogo />
        </Link>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <SvgMenu />
      </div>
      <div className="navigation-container">
        <ul className="navigation">
          <li className="nav-link">
            <Button text="Artwork" link="/artwork" buttonStyle="outline" mouseClickFunction={closeMenu} />
          </li>
          {/* <li className="nav-link">
            <Button text="Emotes" link="/emotes" buttonStyle="outline" mouseClickFunction={closeMenu} />
          </li> */}
          <li className="nav-link">
            <Button text="Commissions" link="/commissions" buttonStyle="outline" mouseClickFunction={closeMenu} />
          </li>

          {/* <li className='nav-link'>
            <Link className="h2" to="/artwork" onClick={closeMenu}>Artwork</Link>
          </li>
          <li className='nav-link'>
            <Link className="h2" to="/emotes" onClick={closeMenu}>Emotes</Link>
          </li>
          <li className='nav-link'>
            <Link className="h2" to="/commissions" onClick={closeMenu}>Commissions</Link>
          </li> */}
          {/* <li className='nav-link'>
            <Link className="h2" to="/guide" onClick={closeMenu}>Guide</Link>
          </li> */}
          <Social />
        </ul>
      </div>
    </nav>
  )
}
