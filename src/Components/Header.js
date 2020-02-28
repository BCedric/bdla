import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-materialize'

import '../style/Header.css'
const imgbdla = require('./../img/bandeau.png')

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link to='/'><img src={imgbdla} className='imgbdla' alt='' /></Link>
        <Navbar className='navbar light-green darken-3'>
          <Link className="nav-item" to="/">Accueil</Link>
          <Link className="nav-item" to='/festival'>Festival</Link>
          <Link className="nav-item" to='/vendredi'>Vendredi</Link>
          <Link className="nav-item" to='/samedi'>Samedi</Link>
          <Link className="nav-item" to='/infos'>Infos</Link>
          <Link className="nav-item" to='/contact'>Contact</Link>
        </Navbar>
      </div>
    )
  }
}

export default Header
