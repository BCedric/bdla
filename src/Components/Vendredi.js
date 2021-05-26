import Artiste from 'Artiste'
import Helmet from 'react-helmet'
import React from 'react'
import moment from 'moment'

import InProgressChecker from 'InProgressChecker'

import { vendredi as groupes } from '../data/groupes.json'

export default class Vendredi extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Vendredi" />
        <h1 className="titre">Programmation du Vendredi 25 Juin</h1>

        <InProgressChecker>
          <p>
            {/* Ouverture du site à 19h. */}
            Entrées : participation libre (Chacun donne ce qu’il veut ou ce
            qu’il peut)
          </p>
          {groupes.map((groupe, index) => (
            <Artiste groupe={groupe} key={index} />
          ))}
        </InProgressChecker>
      </div>
    )
  }
}
