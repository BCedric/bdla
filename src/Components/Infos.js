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
      {/* <h2>Manger et boire</h2>
      <p>
        Le Bar à Noj est ouvert pendant tout le festival (bière, vins, sodas,
        jus de fruits équitable/bio/du coin, etc). Vous y trouverez à manger et
        à boire, pour les petites et grandes faims. Pendant tout le festival :
        grillades/frites, crêpes
      </p>
      {repasData.vendredi != null && repasData.samedi != null && (
        <p>
          Et en plus :
          <ul>
            <li>Vendredi soir : {repasData.vendredi}</li>
            <li>Samedi soir : {repasData.samedi}</li>
          </ul>
        </p>
      )} */}
      <p>Distributeur de billet le plus proche : Poitiers(Montmidi).</p>
      <h2>Réservations</h2>
      <h3>Jauge limitée par spectacle</h3>
      <p>
        Afin de permettre au plus grand nombre de pouvoir assister à notre
        festival, vous ne pouvez réserver au maximum que deux spectacles ( 1 par
        jour)
      </p>
      <h3>
        Réservation obligatoire par téléphone ou sms à partir du mercredi 9 juin
        à 17h .
      </h3>
      <p>
        06 20 71 69 83 <br />
        Nous vous confirmerons la réservation par téléphone ou SMS
      </p>
      <h3>Permanences pour Informations et réservations :</h3>
      <p>
        Mercredi 9 et jeudi 10 Juin de 17h à 19h
        <br /> Mercredi 16 et jeudi 17 juin de 17h à 19h <br />
        Mercredi 23 et jeudi 24 juin de 17h à 19h.
        <br /> Vendredi 25 et samedi 26 juin de 10h à 12h.
      </p>
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
    </div>
  )
}
