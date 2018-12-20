import Artiste from 'Artiste';
import Helmet from 'react-helmet';
import React from 'react';

import { MediaBox } from 'react-materialize';

import '../style/Programmation.css';
import Groupes from './Groupe';
const lutins = require('./../img/lutins_imageverticale.jpg');
const fanfare = require('./../img/photofanfare2.jpg');

export default function Samedi() {
  return (
    <div className="texte">
      <Helmet title="Samedi" />

      <h1>Programmation du Samedi 29 Juin</h1>
      <div className="programmation-en-preparation">
        <span>Programmation en préparation</span>
      </div>
      {/* <div>
        <p>
          <ul>
            <li>Le studio photo animé par le club photo de Biard</li>
            <li>Atelier maquillage</li>
            <li>Jeux en bois et jeux coopératifs</li>
            <li>Espace détente</li>
            <li>Massage</li>
            <li>Magie</li>
            <li>Vélo smoothies</li>
            <li>Vélo musique</li>
          </ul>
        </p>
        <p>
          <ul className="samedi-aprem-prog">
            <li>
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
              <span className="samedi-aprem-titre">
                - <b>15h30</b> : Les Lutins du Voyage
              </span>
              <div>
                <MediaBox
                  src={lutins}
                  caption="Les Lutins du Voyage"
                  width="50%"
                />
              </div>
              <p>
                Deux lutins doux-dingues ont décidé de quitter leur forêt,
                devenue trop petite pour leur folie créatrice. A cheval sur une
                bicyclette trafiquée, ils ont décidé de devenir des lutins du
                voyage, de ceux qui partent à la rencontre des humains avec
                leurs chansonnettes, leurs instruments… et une bonne dose de
                bonne-humeur !
              </p>
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
            </li>
            <li>
              <span className="samedi-aprem-titre">
                - <b>18h00</b> : La Fanfare en Plastic
              </span>
              <div>
                <MediaBox
                  src={fanfare}
                  caption="La Fanfare en Plastic"
                  width="80%"
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
          <Artiste groupe={Groupes.PierreEtFils} />
          <Artiste groupe={Groupes.BalPrevert} />
          <Artiste groupe={Groupes.AmadeusMozza} />
        </div>
      </div> */}
    </div>
  );
}
