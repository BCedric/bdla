import Artiste from 'Artiste'
import Helmet from 'react-helmet'
import React from 'react'

import './Vendredi.css'
import {fanfarePlastic} from './Groupe/fanfarePlastic'

export default function Samedi () {
  return (
    <div>
      <Helmet title='Samedi' />
      <h1 >Programmation du Samedi 25 Juin</h1>
      <p>
        <ul>
          <li>
            <a>Exposition /vente : artisans créateurs d’art</a>
          </li>
          <li>
            <a>Parcours sensoriel proposé par l’institution de Larnay</a>
          </li>
          <li>
            <a>Atelier maquillage</a>
          </li>
          <li>
            <a>Jeux  participatifs et de plein air </a>
          </li>
          <li>
            <a>Le studio photo animé par le club photo de Biard</a>
          </li>
          <li>
            <a>Ouverture de la bibliothèque </a>
          </li>
          <li>
            <a>Exposition de l’IEM et de l’institut de Larnay </a>
          </li>
          <li>
            <a>Instruments à sons proposés par Cap Sud</a>
          </li>
        </ul>

      </p>
      <p>
        Tout au long de l'après midi, vous pourrez voir des spectacles tout public
        <ul>
          <li>
            <a><b>14H</b> : Les enfants de l’école de Biard présentent un travail artistique mené par la fanfare Labulkrack</a>
          </li>

          <li>
            <a><b>14h 50 </b> : L’association de danse de Biard présente des extraits de leurs nouvelles chorégraphies 2016</a>
          </li>
          <li>
            <a><b>15h 30 </b> : SPECTACLE TOUT PUBLIC : LA MAISON MUSQUIN par la Compagnie la Riflette </a>
            <p>
              Trois érudits, autant improbables qu’imprévisibles, viennent vous exposer l’art et la manière d’animer une folle soirée entre amis. Au menu du vintage, du cirque, du boniment  et l’indispensable guide du savoir-vivre !
              Ce spectacle truculent vise à dépeindre les petits travers du paraître dans la vie en société et des dérapages qui peuvent en découler.
            </p>
          </li>
          <li>
            <a><b>16h15</b> : les Majos du Val de Boivre vous emmènent dans leur univers avec un extrait de leur spectacle.</a>

          </li>
          <li>
            <a><b>16h45</b> : caravane bout de ficelle par la Compagnie Pantoum </a>
            <p>
              Qui n'a jamais rêvé de se jeter sur le bas-côté d'une route poussiéreuse tandis qu'un avion biplan lui fonce dessus en lâchant une salve de mitraillette?
              De voir un drôle de petit monstre aux dents pointues lui sortir du ventre en lui déchirant les entrailles?
              Ou encore de serrer l'amour de sa vie à la proue d'un paquebot réputé insubmersible tandis que Céline Dion braille à tue-tête que son cœur continuera de battre éternellement ?
              Voilà ni plus ni moins ce que nous proposons aux chanceux qui franchiront la porte de notre Ciné bouts de ficelle: vivre pour de vrai le tournage de quelques scènes mythiques du cinéma. Nous les invitons ni plus ni moins à rejoindre, voire à devenir l'espace de quelques secondes, Cary Grant, Kate Winslet, Leonardo DiCaprio, l'agent Ripley d'Alienou le Néo de Matrix.
              Les spectateurs sont conviés, pour certains, à se glisser dans la peau d'un comédien, pour d'autres à devenir cadreur, bruiteur, accessoiriste, créateur d'effets spéciaux, musicien... Les moins hardis s'installent dans l'espace projection et assistent simplement à la re)création d'une séquence mythique. Tous ensemble nous recréons, plus vraie que nature, 30 secondes de telle scène fameuse du Titanic ou de La Mort aux trousses.

            </p>
          </li>
          <li>
            <a><b>18h</b> : L’Ecole de musique  Symphonie  : les élèves de l'école de musique sont ravis de partager ce moment musical avec vous. Venez les encourager ! </a>
          </li>
        </ul>
      </p>
      <p>
        <h2>A partir de 19h</h2>
        <a>Entrées : participation libre (Chacun donne ce qu’il veut ou ce qu’il peut) </a>
      </p>
      <div>
        <Artiste groupe={fanfarePlastic} />
      </div>
    </div>
  )
}
