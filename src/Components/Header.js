import React from 'react'
import { Link } from 'react-router-dom'

import useWindowDimensions from 'useWindowDimensions'
import imgbdla from './../img/bandeau.png'
import { routes } from './routes'

const Header = ({ toggleSideMenu }) => {
  const { width } = useWindowDimensions()

  const isSmallScreen = width < 768

  return (
    <div className="header">
      <Link className="unselectable" to="/">
        <img src={imgbdla} className="imgbdla" alt="" />
      </Link>

      <nav position="static" className="navbar light-green darken-3">
        {isSmallScreen ? (
          <span className="material-icons clickable" onClick={toggleSideMenu}>
            menu
          </span>
        ) : (
          <ul>
            {routes.map((route, index) => (
              <li key={index}>
                {' '}
                <Link className="nav-item unselectable" to={route.route}>
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  )
}

export default Header
