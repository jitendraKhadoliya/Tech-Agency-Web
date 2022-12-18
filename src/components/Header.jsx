import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <nav>
      <h1>Jinix Services</h1>

        <ul>
          <li>
            <Link to={"/"}>Home</Link>
            <Link to={"/#contact"}>Contact</Link>
            <Link to={"/#about"}>About</Link>
            <Link to={"/#brands"}>Brands</Link>
            <Link to={"/services"}>Services</Link>
          </li>
        </ul>

    </nav>

  )
}

export default Header;