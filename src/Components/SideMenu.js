import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const routes = [
  { label: 'Accueil', route: '/' },
  { label: 'Festival', route: '/festival' },
  { label: 'Vendredi', route: '/vendredi' },
  { label: 'Samedi', route: '/samedi' },
  { label: 'Infos', route: '/infos' },
  { label: 'Contact', route: '/contact' }
]

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
