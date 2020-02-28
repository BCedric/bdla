import Artiste from 'Artiste'
import Helmet from 'react-helmet'
import React from 'react'

import '../style/Programmation.css'
import { LesTontonsZingueurs, BancalCheri, LaBelleImage } from './Groupe'
import ProgInProgress from './ProgInProgress'

export default class Vendredi extends React.Component {
  render() {
    return (
      <div className="texte">
        <Helmet title="Vendredi" />
        <h1 className="titre">Programmation du Vendredi 26 Juin</h1>
        <ProgInProgress />

        {/* <p>
          Ouverture du site à 19h. Entrées : participation libre (Chacun donne
          ce qu’il veut ou ce qu’il peut)
        </p>
        <Artiste groupe={LesTontonsZingueurs} />
        <Artiste groupe={BancalCheri} />
        <Artiste groupe={LaBelleImage} /> */}
      </div>
    )
  }
}
