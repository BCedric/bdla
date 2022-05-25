import React from 'react'
import Helmet from 'react-helmet'

import Carousel from 'Carousel'

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
        Voilà maintenant {anneeCourante - 2005} ans que le festival s'installe
        au centre de Biard. Biard dans les Airs est né d'une volonté de partager
        le sens de la fête et du spectacle. C'est aussi un moment de rencontres,
        de retrouvailles. Au début de l'été la commune de Biard prend alors son
        envol festif. De plus en plus de monde prend l'habitude de venir pour y
        passer du bon temps.
      </p>
      <Carousel
        images={[image, image1, image2, image3, image4, image5]}
      ></Carousel>
    </div>
  )
}
