import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-materialize'

const imgbdla = require('./../img/bandeau.png')

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link className="unselectable" to='/'><img src={imgbdla} className='imgbdla' alt='' /></Link>
        <Navbar className='navbar light-green darken-3'>
          <Link className="nav-item unselectable" to="/">Accueil</Link>
          <Link className="nav-item unselectable" to='/festival'>Festival</Link>
          <Link className="nav-item unselectable" to='/vendredi'>Vendredi</Link>
          <Link className="nav-item unselectable" to='/samedi'>Samedi</Link>
          <Link className="nav-item unselectable" to='/infos'>Infos</Link>
          <Link className="nav-item unselectable" to='/contact'>Contact</Link>
        </Navbar>
      </div>
    )
  }
}

export default Header
