import Artiste from 'Artiste'
import React from 'react'
import Helmet from 'react-helmet'

import InProgressChecker from 'InProgressChecker'

import prog from '../data/groupes.json'

export default class Vendredi extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Vendredi" />
        <h1 className="titre">Programmation du Vendredi 28 Juin</h1>
        <h2>A partir de 19h</h2>

        <InProgressChecker>
          <p>
            {/* Ouverture du site à 19h. */}
            Entrées : participation libre (Chacun donne ce qu’il veut ou ce
            qu’il peut)
          </p>
          {prog.vendredi.map((groupe, index) => (
            <Artiste groupe={groupe} key={index} />
          ))}
        </InProgressChecker>
      </div>
    )
  }
}
