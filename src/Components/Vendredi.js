import Artiste from 'Artiste'
import Helmet from 'react-helmet'
import React from 'react'

import '../style/Programmation.css'
import {Myut} from './Groupe/Myut'
import {ZeToubitou} from './Groupe/ZeToubitou'
import {GypsySound} from './Groupe/GypsySound'

export default function Vendredi () {
  return (
    <div className='texte'>
      <Helmet title='Vendredi' />
      <h1 className='titre'>Programmation du Vendredi 23 Juin</h1>

      <p>
        Ouverture du site à 19h.<br />
        Entrées : participation libre (Chacun donne ce qu’il veut ou ce qu’il peut)
      </p>
      <Artiste groupe={ZeToubitou} />
      <Artiste groupe={Myut} />
      <Artiste groupe={GypsySound} />
    </div>
  )
}
