import React from 'react'

import Helmet from 'react-helmet'

import { Slider } from 'react-materialize'

import CustomSlide from 'CustomSlide'

const image = require('./../img/accueil1.jpg')
const image1 = require('./../img/accueil2.jpg')
const image2 = require('./../img/accueil3.jpg')
const image3 = require('./../img/accueil4.jpg')
const image4 = require('./../img/accueil5.jpg')

const affichebdla = require('./../img/affiche2020.jpg')

export default function Accueil() {

  return (
    <div >
      < Helmet title="Accueil" />
      <h1>Bienvenue !</h1>
      <p>
        Biard dans les Airs est un festival où l'on croise la musique, la danse,
        le théâtre, la poésie, le cirque...
      </p>
      <p>
        Le site est ombragé, de nombreux spectacles auront lieu dans un petit bois. Vous serez mieux sur le site du festival que chez vous !!! Alors venez...
      </p>
      <div className="affichebdla">
        <img alt="affichebdla" src={affichebdla} />
      </div>
      <p>
        Il est ouvert à toute la famille dans un site aménagé spécialement pour
        l'occasion. Vous pourrez passer deux jours à vous remplir les yeux et
        les oreilles de mille et une façons !
      </p>
      <div className="container">
        <Slider interval={5000}>
          <CustomSlide img={image} />
          <CustomSlide img={image1} />
          <CustomSlide img={image2} />
          <CustomSlide img={image3} />
          <CustomSlide img={image4} />
        </Slider>
      </div>
    </div >
  )
}
