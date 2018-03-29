import Helmet from 'react-helmet'
import React from 'react'
import { Slider, Slide } from 'react-materialize'
import '../style/Slider.css'
const image = require('./../img/accueil1.jpg')
const image1 = require('./../img/accueil2.jpg')
// const image2 = require('./../img/accueil3.jpg')
const image3 = require('./../img/accueil4.jpg')
const image4 = require('./../img/accueil5.jpg')
const image5 = require('./../img/accueil6.jpg')
const image6 = require('./../img/accueil7.jpg')
const image7 = require('./../img/accueil8.jpg')


const affichebdla = require('./../img/bdla2018.PNG')

export default function Accueil () {
  return (
    <div className='texte'>
      <Helmet title='Accueil' />
      <h1>Bienvenue !</h1>
      <p>
        Biard dans les Airs est un festival où l'on croise la musique, la danse,
        le théâtre, la poésie, le cirque...
      </p>
      <div className='affichebdla'>
        <img alt='affichebdla' src={affichebdla} />
      </div>
      <p>
        Il est ouvert à toute la famille dans un site aménagé spécialement pour l'occasion.
        Vous pourrez passer deux jours à vous remplir les yeux et les oreilles de mille et
        une façons !
      </p>
      <div className='container'>
        <Slider interval={5000}>
          <Slide src={image7} placement='right' />
          <Slide src={image} placement='left' />
          <Slide src={image1} />
          {/* <Slide src={image2} placement='right' /> */}
          <Slide src={image3} placement='right' />
          <Slide src={image4} placement='right' />
          <Slide src={image5} placement='right' />
          <Slide src={image6} placement='right' />
        </Slider>
      </div>

    </div>

  )
}
