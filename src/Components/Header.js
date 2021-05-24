import React, { Component, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-materialize'

import imgbdla from './../img/bandeau.png'

const Header = ({}) => {
  const navOptions = { closeOnClick: true }
  const navRef = useRef(null)

  const handleNavClick = (e) => {
    // const target = e.target
    // console.log('handleNavClick')
    // if (target.className === 'nav-item unselectable') {
    //   const sidenav = document.getElementById('mobile-nav')
    //   console.log('close', sidenav)
    //   sidenav.removeAttribute('style')
    //   sidenav.style.transform = 'translateX(-105%);'
    // }
  }

  return (
    <div className="header">
      <Link className="unselectable" to="/">
        <img src={imgbdla} className="imgbdla" alt="" />
      </Link>
      <div onClick={handleNavClick}>
        <Navbar
          className="navbar light-green darken-3"
          options={navOptions}
          ref={navRef}
        >
          <Link className="nav-item unselectable" to="/">
            Accueil
          </Link>
          <Link className="nav-item unselectable" to="/festival">
            Festival
          </Link>
          <Link className="nav-item unselectable" to="/vendredi">
            Vendredi
          </Link>
          <Link className="nav-item unselectable" to="/samedi">
            Samedi
          </Link>
          <Link className="nav-item unselectable" to="/infos">
            Infos
          </Link>
          <Link className="nav-item unselectable" to="/contact">
            Contact
          </Link>
        </Navbar>
      </div>
    </div>
  )
}

export default Header
