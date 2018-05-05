import Helmet from 'react-helmet'
import React from 'react'

const plan1 = require('./../img/plan1.png')
const PlanSite = require('./../img/PlanSite.png')

export default function Infos () {
  return (
    <div className='texte'>
      <Helmet title='Infos' />
      <h1>Informations pratiques</h1>
      {/* <table>
        <tr>
          <td>Tarif normal</td>
          <td>Tarif réduit: chômeurs, étudiants, lycéens...</td>
        </tr>
        <tr>
          <td>Vendredi soir, dès 19h</td>
          <td colspan='2'>5€ tarif unique</td>
        </tr>
        <tr>
          <td>Samedi après-midi <small>dès 14h</small></td>
          <td colspan='2'>Gratuit</td>
        </tr>
        <tr>
          <td>Samedi soir <small>dès 21h</small></td>
          <td>10€</td>
          <td>6€</td>
        </tr>
        <tr>
          <td>PASS 2 JOURS</td>
          <td>12€</td>
          <td>10€</td>
        </tr>
      </table> */}
      {/* <p>Gratuit pour les -14 ans</p> */}
      <h2>Manger et boire</h2>
      <p>Le Bar à Noj est ouvert pendant tout le festival (bière, vins, sodas, jus de fruits équitable/bio/du coin, etc). <br />
        Vous y trouverez à manger et à boire, pour les petites et grandes faims.<br />
        Pendant tout le festival : grillades/frites, crêpes<br />
      </p>
      <p>
        Et en plus :
        <ul>
                  <li>Vendredi soir : Couscous</li>
                  <li>Samedi soir : Porc au Curry/Ananas</li>
        </ul>
      </p>
      <p>Distributeur de billet le plus proche : Poitiers(Montmidi).</p>
      <h2>Venir au festival</h2>
      <p>Le festival a lieu devant la Mairie de Biard.</p>
      <p>
        <a target='_blank' rel='external'><img alt='Plan Poitiers' src={plan1} /></a>
        <a target='_blank' rel='external'><img alt='Plan site' src={PlanSite} /></a>
      </p>
      <b>Parkings :</b> Stade de foot, salle polyvalente, foyer Guillaume d'Aquitaine, rue des écoles, parking du gymnase, lotissements allentours. <br /><br />
      <b>Bus :</b> Ligne n°12 : le prendre au centre ville de Poitiers en direction de Béruges ; descendre au gymnase de Biard.
    </div>
  )
}
