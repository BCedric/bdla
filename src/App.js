import React, { useEffect, useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import Helmet from 'react-helmet'
import { Parallax } from 'react-parallax'
import Accueil from './Components/Accueil.js'
import Contact from './Components/Contact.js'
import Festival from './Components/Festival.js'
import Header from './Components/Header.js'
import Infos from './Components/Infos.js'
import NoMatchRoute from './Components/NoMatchRoute.js'
import Samedi from './Components/Samedi.js'
import SideMenu from './Components/SideMenu.js'
import Vendredi from './Components/Vendredi.js'
import image from './img/bdla.png'

import useWindowDimensions from 'useWindowDimensions'
import Partenaires from './Components/Partenaires.js'
import Remerciements from './Components/Remerciements.js'

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
      <Parallax strength={1500} bgImage={image}>
        <SideMenu
          hidden={hideSideMenu}
          close={() => setHideSideMenu(true)}
        ></SideMenu>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/festival" element={<Festival />} />
            <Route path="/infos" element={<Infos />} />
            <Route path="/samedi" element={<Samedi />} />
            <Route path="/vendredi" element={<Vendredi />} />
            <Route path="/remerciements" element={<Remerciements />} />
            <Route path="/partenaires" element={<Partenaires />} />
            <Route element={<NoMatchRoute />} />
          </Routes>
        </div>
      </Parallax>
    </HashRouter>
  )
}

export default App
