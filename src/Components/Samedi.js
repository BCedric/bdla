import Artiste from 'Artiste'
import Helmet from 'react-helmet'
import React from 'react'

import '../style/Programmation.css'

import {
  MotorcycleShow,
  CactusRiders,
  TarmacRodeo,
  BorisViande
} from './Groupe'

const fanfare = require('../img/fanfare.jpg')
const STARRR = require('../img/STARRR.jpg')

export default function Samedi() {
  return (
    <div className="texte">
      <Helmet title="Samedi" />

      <h1>Programmation du Samedi 29 Juin</h1>
      <div>
        <p>
          <ul>
            <li>Le studio photo animé par le club photo de Biard</li>
            <li>Atelier maquillage</li>
            <li>Jeux en bois et jeux coopératifs</li>
            <li>Espace détente</li>
            <li>Massage</li>
            <li>Magie</li>
            <li>Smoothies Biard Tour</li>
          </ul>
        </p>
        <p>
          <ul className="samedi-aprem-prog">
            {/* <li>
              <span className="samedi-aprem-titre">
                - <b>14h</b> :les enfants des écoles présentent un travail
                artistique mené par la Cie des lutins du Voyage
              </span>
            </li>
            <li>
              <span>
                - Les Majorettes du Val de Boivre vous emmènent dans leur
                univers avec un extrait de leur dernier spectacle.
              </span>
            </li>
            <li>
              <span>
                - L’association de danse de Biard présente des extraits de leurs
                nouvelles chorégraphies hip-hop et modern jazz.
              </span>
            </li>

            <li>
              <span>
                - La chorale Otaké : La chorale de Symphonie et son chef de
                chœur ont le plaisir de vous présenter son répertoire de chants
                populaires d'ici et d'ailleurs, enrichi du travail de l'année.
              </span>
            </li>
            <li>
              <span>
                - L’école de Musique symphonie : L’école de musique Symphonie et
                ses Ateliers de musiques actuelles : Ateliers musiques actuelles
                : "C’est un hommage à David Bowie que vous propose cette année
                l’atelier adultes de Symphonie. Quant à l’atelier ados, il
                comblera les amateurs de rock avec ses reprises de grands tubes
                de leurs groupes préférés !
              </span>
            </li> */}

            <li>
              <span className="samedi-aprem-titre">
                - {/*<b>18h00</b> :*/} S.T.A.R.R.R.
              </span>
              <div className="samedi-aprem-img">
                <img
                  src={STARRR}
                  caption="STARRR"
                  width="80%"
                  alt="S.T.A.R.R.R."
                />
              </div>
              <p>
                Guillaume Fabre, responsable des formations au sein du Conseil
                Régional du Tourisme, est fier de venir présenter à ses
                stagiaires bénévoles son programme pour faire face à un grand
                défi contemporain : comment dynamiser le tourisme local ?
              </p>
            </li>
            <li>
              <span className="samedi-aprem-titre">
                - {/*<b>18h00</b> :*/} Un Loup dans l'Potage
              </span>
              <p>
                Prenez des instruments à cordes, divers corps sonores et
                percussions, un texte drôle et tout en finesse, pas forcément
                moral, une comédienne excentrique, deux musiciennes
                extravagantes, une marmite. Mélangez et vous obtenez un
                spectacle comique et de qualité supérieure. Bref, c’est
                l’histoire d’un loup pas ordinaire, d’un lapin déjanté et d’une
                fée fêlée et maladroite, tous évoluant autour d’une marmite où
                rien ne se passe comme prévu.
              </p>
            </li>
            <li>
              <span className="samedi-aprem-titre">
                - {/*<b>18h00</b> :*/} La Fanfare en Plastic
              </span>
              <div className="samedi-aprem-img">
                <img
                  src={fanfare}
                  caption="La Fanfare en Plastic"
                  width="80%"
                  alt="La Fanfare en plastic"
                />
              </div>
              <p>
                En une heure ces chansons de Camille, Jean Yanne, Eddy Mitchel,
                les Charlots, Loïc Lantoine , Pierre Perret ,HK et les
                saltimbanks , Bourvil, Lavilliers... vous emmènent dans un
                univers festif à la recherche de liberté ...... tout en
                interpellant notre relation au travail . Laissez-vous emporter
                par les nombreux musiciens et chanteurs de la Fanfare en
                plastic: rires, émotions, révoltes avec toujours l'envie d'être
                ensemble et d'y croire...
              </p>
            </li>
          </ul>
        </p>
        <p>
          <h2>A partir de 19h</h2>
          Entrées : participation libre (Chacun donne ce qu’il veut ou ce qu’il
          peut)
        </p>
        <div>
          <Artiste groupe={MotorcycleShow} />
          <Artiste groupe={CactusRiders} />
          <Artiste groupe={TarmacRodeo} />
          <Artiste groupe={BorisViande} />
        </div>
      </div>
    </div>
  )
}
