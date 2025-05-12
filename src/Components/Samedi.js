import Artiste from 'Artiste'
import React from 'react'
import Helmet from 'react-helmet'

import InProgressChecker from 'InProgressChecker'

import Spectacle from 'Spectacle'

import prog from '../data/groupes.json'
import spectacles from '../data/spectacles.json'

export default function Samedi() {
  return (
    <div>
      <Helmet title="Samedi" />

      <h1>Programmation du Samedi 29 Juin</h1>

      <InProgressChecker>
        <div>
          <div className="animations-continues">
            <div>
              <p>Tout l'après-midi, les animations suivantes en continu:</p>
              <ul>
                <li>Le studio photo</li>
                <li>Atelier maquillage</li>
                <li>Jeux en bois et jeux coopératifs</li>
                <li>Exposition du club Patchwork de Biard</li>
                <li>Ateliers activités artistiques</li>
              </ul>
            </div>
          </div>
          <div className="prog-spectacles">
            {spectacles.map((spectacle, index) => (
              <Spectacle
                key={index}
                title={spectacle.titre}
                timing={spectacle.heure}
                description={spectacle.description}
                image={spectacle.image}
              />
            ))}
          </div>
          <h2>A partir de 19h</h2>
          <p>
            Entrées : participation libre (Chacun donne ce qu’il veut ou ce
            qu’il peut)
          </p>
          <div>
            {prog.samedi.map((groupe, index) => (
              <Artiste groupe={groupe} index={index} key={index} />
            ))}
          </div>
        </div>
      </InProgressChecker>
    </div>
  )
}
