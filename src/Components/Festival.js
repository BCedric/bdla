import React from 'react'
import Helmet from 'react-helmet'
import { Slider, Slide } from 'react-materialize'

import '../style/Slider.css'

const image = require('./../img/festival1.jpg')
const image1 = require('./../img/festival2.jpg')
const image2 = require('./../img/festival3.jpg')
const image3 = require('./../img/festival4.jpg')

export default function Festival() {
  const anneeCourante = new Date().getFullYear()
  return (
    <div className="texte">
      <Helmet title="Festival" />
      <h1>Le Festival</h1>
      <p>
        Le Festival est organisé par <i>Le Comité des fêtes</i> et les{' '}
        <i>Ateliers Musicaux de Biard</i> et vit par la force d'un bon paquet de
        bénévoles et par le partenariat d'institutions publiques (mairie de
        Biard, Grand Poitiers, Conseil départemental) et d'entreprises privées
        (Fournil de Biard, bakertilly STEGO, Huet Boucherie, Bouchet Frères,
        Terrasse bois, Garage Pictave, Espace 3, Cluricaume, Aéroport de Biard,
        Durand menuiserie, Robichon Laser, Crédit Agricole).
      </p>
      <div className="container">
        <Slider interval={3000}>
          <Slide src={image} placement="left" />
          <Slide src={image1} />
          <Slide src={image2} placement="right" />
          <Slide src={image3} placement="right" />
        </Slider>
      </div>
      <p>
        Voilà maintenant {anneeCourante - 2005} ans que le festival s'installe
        au centre de Biard. Biard dans les Airs est né d'une volonté de partager
        le sens de la fête et du spectacle. C'est aussi un moment de rencontres,
        de retrouvailles. Au début de l'été la commune de Biard prend alors son
        envol festif. De plus en plus de monde prend l'habitude de venir pour y
        passer du bon temps.
      </p>
    </div>
  )
}
