import React, { Component } from 'react'
import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom'

import Accueil from './Components/Accueil.js'
import Contact from './Components/Contact.js'
import Festival from './Components/Festival.js'
import Infos from './Components/Infos.js'
import Samedi from './Components/Samedi.js'
import Vendredi from './Components/Vendredi.js'
import Remerciements from './Components/Remerciements.js'
import Header from './Components/Header.js'
import Helmet from 'react-helmet'
import NoMatchRoute from './Components/NoMatchRoute.js'
import { Parallax } from 'react-parallax'

const image = require('./img/bdla.png')

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Helmet titleTemplate='%s | Biard dans les airs' />
        <Header />
        <Parallax strength={300} bgImage={image} >
          <div className='content'>
            <Switch>
              <Route exact path='/' component={Accueil} />
              <Route path='/contact' component={Contact} />
              <Route path='/festival' component={Festival} />
              <Route path='/infos' component={Infos} />
              <Route path='/samedi' component={Samedi} />
              <Route path='/vendredi' component={Vendredi} />
              <Route path='/groupe/' component={Vendredi} />
              <Route path='/remerciements' component={Remerciements} />
              <Route component={NoMatchRoute} />
            </Switch>
          </div>
        </Parallax>
      </HashRouter>
    )
  }
}

export default App
