import Artiste from 'Artiste'
import Helmet from 'react-helmet'
import React from 'react'

import './Vendredi.css'
import {Labulkrack} from './Groupe/Labulkrack'
import {Djao} from './Groupe/Djao'
import {Ziveli} from './Groupe/Ziveli'

export default function Vendredi () {
  return (
    <div className='texte'>
      <Helmet title='Vendredi' />
      <h1 className='titre'>Programmation du Vendredi 24 Juin</h1>

      <p>
        Ouverture du site à 19h.<br />
        Entrées : participation libre (Chacun donne ce qu’il veut ou ce qu’il peut)
      </p>
      <Artiste groupe={Labulkrack} />
      <Artiste groupe={Djao} />
      <Artiste groupe={Ziveli} />
    </div>
  )
}
