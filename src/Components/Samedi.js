import Artiste from 'Artiste'
import Helmet from 'react-helmet'
import React from 'react'

import '../style/Programmation.css'
// import {fanfarePlastic} from './Groupe/fanfarePlastic'
import {Minvielle} from './Groupe/Minvielle'
import {RadioBazar} from './Groupe/RadioBazar'
import {TeacherJekyll} from './Groupe/TeacherJekyll'

export default function Samedi () {
  return (
    <div className='texte'>
      <Helmet title='Samedi' />
      <h1 >Programmation du Samedi 24 Juin</h1>
      <p>
        <ul>
          <li>Le studio photo animé par le club photo de Biard</li>
          <li>Atelier maquillage</li>
          <li>Jeux en bois et coopératifs</li>
          <li>Bibliothèque</li>
          <li>Espace détente</li>
          <li>Expo Photo</li>
          <li>Boite à livre avec inauguration officielle</li>
        </ul>

      </p>
      <p>
        Tout au long de l'après midi, vous pourrez voir des spectacles tout public
        <ul>
          <li>
            <a>- <b>14h</b> :Les enfants de l’Ecole de Biard présentent un travail artistique mené par la Cie
            Gramophone, déjà venue au Festival avec deux spectacles (Brèves de plaisanteries et la Maison
            Musquin)</a>
          </li>
          <li>
            <a>- Les Majorettes du Val de Boivre vous emmènent dans leur univers avec un extrait de leur
            dernier spectacle.</a>
          </li>
          <li>
            <a>- L’association de danse de Biard présente des extraits de leurs nouvelles chorégraphies hip-hop et modern jazz.</a>
          </li>
          <li>
            <a>- <b>15h30</b> : Concert et bal pour enfants et adultes organisé par la Cie Pirouette et Baliverne</a>
            <p>Ce bal pour enfants est présenté par 3 musiciens chanteurs polyvalents. Retrouvez beaucoup d'instruments variés :
            violon, accordéon, guitare ukulélé, batterie basse, piano, toy, métalophone, congas, derbouka, objets sonores, etc...
            Appel à la participation des enfants et des parents avec des danses festives, rondes, et plein d'autres !</p>
          </li>

          <li>
            <a>- <b>16h45</b> Spectacle H5N1 and Marcel Chapon</a>
            <p>Marcel Chapon vit seul, sa femme l’a quitté il y a deux ans. Depuis, il voue une passion extraordinaire pour ses poules : Odette, Claude et Suzon. En 2004, il apprend par la radio qu’un virus mortel touche les gallinacées de France : le H5N1. De plus, toutes les personnes possédant des poules sont obligées de les déclarer à leur mairie afin qu’elles soient recensées. Mais Marcel ne l’entend pas ainsi ; il entre dans la clandestinité pour protéger ses poules du virus. Il décide lors de s’enfermer dans sa cuisine avec celles-ci. Dès lors, Marcel vit une incroyable aventure avec chacune d’entre elles : Suzon devient assistante de magicien, Claude équilibriste et Odette devient sa confidente, sa préférée, celle qu’il aime. Seulement, à force de vivre enfermé avec ses poules, Marcel adopte la gallinattitude et devient de plus en plus...
            </p>
          </li>
          <li>
            <a>- L’école de musique Symphonie : avec la toute jeune chorale de Symphonie « Otaké » qui a
            pris plaisir toute l’année à travailler un répertoire de chants populaires d’ici et d’ailleurs.
            Encouragée par leur super chef de chœur, il était tout naturel qu’elle vienne chanter à Biard
            dans les Airs !</a>
          </li>
          <li>
            <a>- <b>18h20</b> : L’école de musique Symphonie et ses Ateliers de musiques actuelles : basse, guitare,
            clavier, batterie, chant. Tous les ingrédients sont réunis pour que les amateurs de rock et de
            chansons soient comblés en voyant sur scène ces ateliers ados et adultes</a>
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
