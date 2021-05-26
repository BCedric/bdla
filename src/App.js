import React, { Component, useEffect, useState } from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'

import Accueil from './Components/Accueil.js'
import Contact from './Components/Contact.js'
import Festival from './Components/Festival.js'
import Infos from './Components/Infos.js'
import Samedi from './Components/Samedi.js'
import Vendredi from './Components/Vendredi.js'
import Header from './Components/Header.js'
import Helmet from 'react-helmet'
import NoMatchRoute from './Components/NoMatchRoute.js'
import { Parallax } from 'react-parallax'
import image from './img/bdla.png'
import SideMenu from './Components/SideMenu.js'

import useWindowDimensions from 'useWindowDimensions'

const App = () => {
  const [hideSideMenu, setHideSideMenu] = useState(true)

  const toggleSideMenu = () => {
    setHideSideMenu(!hideSideMenu)
  }

  const { width } = useWindowDimensions()

  useEffect(() => {
    width > 768 && setHideSideMenu(true)
  }, [width])

  return (
    <HashRouter>
      <Helmet titleTemplate="%s | Biard dans les airs" />
      <Header toggleSideMenu={toggleSideMenu} />
      <Parallax strength={300} bgImage={image}>
        <SideMenu
          hidden={hideSideMenu}
          close={() => setHideSideMenu(true)}
        ></SideMenu>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route path="/contact" component={Contact} />
            <Route path="/festival" component={Festival} />
            <Route path="/infos" component={Infos} />
            <Route path="/samedi" component={Samedi} />
            <Route path="/vendredi" component={Vendredi} />
            <Route path="/groupe/" component={Vendredi} />
            <Route component={NoMatchRoute} />
          </Switch>
        </div>
      </Parallax>
    </HashRouter>
  )
}

export default App
