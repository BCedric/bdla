import React from 'react'
import Helmet from 'react-helmet'
import { Slider } from 'react-materialize'

import CustomSlide from 'CustomSlide'

import image from './../img/festival1.jpg'
import image1 from './../img/festival2.jpg'
import image2 from './../img/festival3.jpg'
import image3 from './../img/festival4.jpg'
import image4 from './../img/festival5.jpg'
import image5 from './../img/festival6.jpg'

export default function Festival() {
  const anneeCourante = new Date().getFullYear()
  return (
    <div>
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
          <CustomSlide img={image} />
          <CustomSlide img={image1} />
          <CustomSlide img={image2} />
          <CustomSlide img={image3} />
          <CustomSlide img={image4} />
          <CustomSlide img={image5} />
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
