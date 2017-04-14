import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize'

import './Header.css'
const imgbdla = require('./../img/bandeau.png')

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <Link to='/'><img src={imgbdla} className='imgbdla' alt='' /></Link>
        <Navbar className='navbar light-green darken-3'>
          <NavItem><Link to='/'>Accueil</Link></NavItem>
          <NavItem><Link to='/festival'>Festival</Link></NavItem>
          <NavItem><Link to='/vendredi'>Vendredi</Link></NavItem>
          <NavItem><Link to='/samedi'>Samedi</Link></NavItem>
          <NavItem><Link to='/infos'>Infos</Link></NavItem>
          <NavItem><Link to='/contact'>Contact</Link></NavItem>
        </Navbar>
      </div>
    )
  }
}

export default Header
