import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { routes } from './routes'


const SideMenu = ({ hidden, close }) => {
  const outsideListener = (event) => {
    var specifiedElement = document.getElementById('side-menu')
    var isClickInside = specifiedElement.contains(event.target)

    if (!isClickInside && !hidden) {
      close()
    }
  }
  useEffect(() => {
    //I'm using "click" but it works with any event
    document.addEventListener('click', outsideListener)
    return () => {
      document.removeEventListener('click', outsideListener)
    }
  })

  return (
    <div className={`side-menu ${hidden && 'hidden'}`} id="side-menu">
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            {' '}
            <Link
              className="nav-item unselectable"
              to={route.route}
              onClick={close}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideMenu
