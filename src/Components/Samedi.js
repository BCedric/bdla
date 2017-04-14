import Artiste from 'Artiste'
import Helmet from 'react-helmet'
import React from 'react'

import './Vendredi.css'
// import {fanfarePlastic} from './Groupe/fanfarePlastic'
import {Minvielle} from './Groupe/Minvielle'
import {RadioBazar} from './Groupe/RadioBazar'
import {TeacherJekyll} from './Groupe/TeacherJekyll'

export default function Samedi () {
  return (
    <div>
      <Helmet title='Samedi' />
      <h1 >Programmation du Samedi 24 Juin</h1>
      <p>
        <ul>
          <li>Exposition /vente : artisans créateurs d’art</li>
          <li>Parcours sensoriel proposé par l’institution de Larnay</li>
          <li>Atelier maquillage</li>
          <li>Jeux  participatifs et de plein air</li>
          <li>Le studio photo animé par le club photo de Biard</li>
          <li>Ouverture de la bibliothèque</li>
          <li>Exposition de l’IEM et de l’institut de Larnay</li>
          <li>Instruments à sons proposés par Cap Sud</li>
        </ul>

      </p>
      <p>
        Tout au long de l'après midi, vous pourrez voir des spectacles tout public
        <ul>
          <li>
            <a>Le spectacle de bal pour enfants</a>
          </li>

          <li>
            <a>Le spectacle "Avec les poules"</a>
          </li>
          <li>
            <a><b>18h</b> : La fanfare en Plastic présentera des chansons de son futur nouveau spectacle.</a>
          </li>
        </ul>
      </p>
      <p>
        <h2>A partir de 19h</h2>
        Entrées : participation libre (Chacun donne ce qu’il veut ou ce qu’il peut)
      </p>
      <div>
        <Artiste groupe={RadioBazar} />
        <Artiste groupe={Minvielle} />
        <Artiste groupe={TeacherJekyll} />
      </div>
    </div>
  )
}
