import Helmet from 'react-helmet'
import React from 'react'

import repasData from '../data/repas.json'

import plan1 from './../img/plan1.png'
import PlanSite from './../img/PlanSite.png'

export default function Infos() {
  return (
    <div className="infos">
      <Helmet title="Infos" />
      <h1>Informations pratiques</h1>

      <p>Distributeur : Crédit agricole Quartier Montmidi</p>
      <h2>Entrées</h2>
      <p>
        Entrées : participation libre. Chacun donne ce qu’il veut ou ce qu’il
        peut.
      </p>
      <h2>Manger et boire</h2>
      <p>
        Le "bar à Noj" et "Chez Tata Veve", le bar à Vin ouverts pendant tout le
        festival.
      </p>
      <p>
        Vous y trouverez de quoi manger et boire, pour les petites et grandes
        faims
      </p>
      <p>Pendant tout le festival : salades, grillages, frites, crêpes</p>
      <p>CB acceptée</p>
      <h2>Venir au festival</h2>
      <p>Le festival a lieu devant la Mairie de Biard.</p>
      <div>
        <img alt="Plan Poitiers" src={plan1} />
      </div>
      <div>
        <img alt="Plan site" src={PlanSite} />
      </div>
      <div>
        <p>
          <b>Parkings :</b> Stade de foot, salle polyvalente, foyer Guillaume
          d'Aquitaine, rue des écoles, parking du gymnase.
        </p>
        <p>
          <b>Bus :</b> Ligne n°12 : le prendre au centre ville de Poitiers en
          direction de Béruges ; descendre au gymnase de Biard.
        </p>
      </div>
    </div>
  )
}
