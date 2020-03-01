import Helmet from 'react-helmet'
import React from 'react'

import repasData from '../data/repas.json'

const plan1 = require('./../img/plan1.png')
const PlanSite = require('./../img/PlanSite.png')

export default function Infos() {
  return (
    <div >
      < Helmet title="Infos" />
      <h1>Informations pratiques</h1>
      <h2>Manger et boire</h2>
      <p>
        Le Bar à Noj est ouvert pendant tout le festival (bière, vins, sodas,
        jus de fruits équitable/bio/du coin, etc). Vous y trouverez à manger et
        à boire, pour les petites et grandes faims. Pendant tout le festival :
        grillades/frites, crêpes
      </p>
      {repasData.vendredi != null && repasData.samedi != null && <p>
        Et en plus :
        <ul>
          <li>Vendredi soir : {repasData.vendredi}</li>
          <li>Samedi soir : {repasData.samedi}</li>
        </ul>
      </p>}
      <p>Distributeur de billet le plus proche : Poitiers(Montmidi).</p>
      <h2>Venir au festival</h2>
      <p>Le festival a lieu devant la Mairie de Biard.</p>
      <p>
        <div>
          <img alt="Plan Poitiers" src={plan1} />
        </div>
        <div>
          <img alt="Plan site" src={PlanSite} />
        </div>
      </p>
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
    </div >
  )
}
