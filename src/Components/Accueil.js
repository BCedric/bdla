import React from 'react'

import Helmet from 'react-helmet'

import image from './../img/accueil1.jpg'
import image1 from './../img/accueil2.jpg'
import image2 from './../img/accueil3.jpg'
import image3 from './../img/accueil4.jpg'
import image4 from './../img/accueil5.jpg'

import Carousel from 'Carousel'

import affichebdla from './../img/affiche-2023.png'

export default function Accueil() {
  return (
    <div>
      <Helmet title="Accueil" />
      <h1>Bienvenue !</h1>
      <p>
        Biard dans les Airs est un festival où l'on croise la musique, la danse,
        le théâtre, la poésie, le cirque...
      </p>
      {/* <p>
        Le site est ombragé, de nombreux spectacles auront lieu dans un petit
        bois. Vous serez mieux sur le site du festival que chez vous !!! Alors
        venez...
      </p> */}
      <div className="affichebdla">
        <img alt="affichebdla" src={affichebdla} />
      </div>
      <p>
        Il est ouvert à toute la famille dans un site aménagé spécialement pour
        l'occasion. Vous pourrez passer deux jours à vous remplir les yeux et
        les oreilles de mille et une façons !
      </p>
      <div>
        <Carousel images={[image, image1, image2, image3, image4]}></Carousel>
      </div>
    </div>
  )
}
