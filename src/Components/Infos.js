import React from 'react'
import Helmet from 'react-helmet'

import plan1 from './../img/plan1.png'
import PlanSite from './../img/PlanSite.png'

export default function Infos() {
  return (
    <div className="infos">
      <Helmet title="Infos" />
      <h1>Informations pratiques</h1>

      <h2>Entrées</h2>
      <p>
        Entrées : participation libre. Chacun donne ce qu’il veut ou ce qu’il
        peut.
      </p>
      <p>Distributeur : Crédit agricole Quartier Montmidi</p>
      <p>Le festival accepte les Cartes Bancaires</p>
      <h2>Manger et boire</h2>
      <p>
        Le "bar à Noj" et le bar à Vin sont ouverts pendant tout le festival.
      </p>
      <p>
        Vous y trouverez de quoi manger et boire, pour les petites et grandes
        faims
      </p>
      <p>
        Pendant tout le festival : salades, plat, grillades, frites, crêpes,
        chichis
      </p>
      <p>Le festival accepte les Cartes Bancaires</p>
      <p>Distributeur : Crédit agricole Quartier Montmid</p>
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
