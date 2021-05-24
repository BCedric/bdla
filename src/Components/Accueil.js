import React from 'react'

import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import { Slider } from 'react-materialize'

import CustomSlide from 'CustomSlide'

import image from './../img/accueil1.jpg'
import image1 from './../img/accueil2.jpg'
import image2 from './../img/accueil3.jpg'
import image3 from './../img/accueil4.jpg'
import image4 from './../img/accueil5.jpg'

import affichebdla from './../img/BDLA-canceled.jpg'

export default function Accueil() {
  return (
    <div>
      <Helmet title="Accueil" />
      <h1>Bienvenue !</h1>
      {/* <p>
        Biard dans les Airs est un festival où l'on croise la musique, la danse,
        le théâtre, la poésie, le cirque...
      </p> */}
      <p>
        Cette année, Biard Dans Les Airs laisse place à Biard Dans Les Chaises.
        Retrouvez la programmation du festival (
        <Link className="nav-item unselectable" to="/vendredi">
          vendredi
        </Link>
        ,{' '}
        <Link className="nav-item unselectable" to="/samedi">
          samedi
        </Link>
        ) et{' '}
        <Link className="nav-item unselectable" to="/infos">
          les informations
        </Link>{' '}
        concernant la reservation des concerts et spectacles.
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
      <div className="container">
        <Slider interval={5000}>
          <CustomSlide img={image} />
          <CustomSlide img={image1} />
          <CustomSlide img={image2} />
          <CustomSlide img={image3} />
          <CustomSlide img={image4} />
        </Slider>
      </div>
    </div>
  )
}
