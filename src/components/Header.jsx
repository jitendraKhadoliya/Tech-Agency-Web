import React from 'react'
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'

const Header = () => {

  return (
    <nav>
      <h1>Jinix Services</h1>

        <ul>
          <li>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <HashLink to = {"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <Link to={"/services"}>Services</Link>
          </li>
        </ul>

    </nav>

  )
}

export default Header;