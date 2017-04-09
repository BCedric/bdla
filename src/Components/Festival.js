import React from 'react'
import Helmet from 'react-helmet'
import { Slider, Slide } from 'react-materialize'

const image = require('./../img/festival1.jpg')
const image1 = require('./../img/festival2.jpg')
const image2 = require('./../img/festival3.jpg')
const image3 = require('./../img/festival4.jpg')

export default function Festival () {
  return (
    <div class='texte'>
      <Helmet title='Festival' />
      <h1>Le Festival</h1>
      <p>Le Festival est organisé par <i>Le Comité des fêtes</i> et les <i>Ateliers Musicaux de Biard</i> et vit par la force d'un bon paquet de bénévoles.</p>
      <div className='container'>
        <Slider interval='1'>
          <Slide
            src={image}
            placement='left'
          />
          <Slide
            src={image1}
          />
          <Slide src={image2} placement='right' />
          <Slide src={image3} placement='right' />
        </Slider>
      </div>
      <p>
        Voilà maintenant sept ans que le festival s'installe au centre de Biard. Biard dans les Airs est né d'une volonté de partager le sens de la fête et du spectacle. C'est aussi un moment de rencontres, de retrouvailles. Au début de l'été la commune de Biard prend alors son envol festif. De plus en plus de monde prend l'habitude de venir pour y passer du bon temps.
      </p>
    </div>
  )
}
