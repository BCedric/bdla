import Helmet from 'react-helmet'
import React from 'react'

import '../style/Contact.css'

const franceBleue = require('./../img/franceBleu.png')
const Vienne = require('./../img/Logo_86_Vienne.png')
const Region = require('./../img/RВgion_Poitou-Charentes_(logo).svg.png')
const biard = require('./../img/biard-logo.gif')

export default function Contact () {
  return (
    <div className='texte'>
      <Helmet title='Contact' />
      <h1>Contacts</h1>
      <p>
        Gilles Morin 06 83 33 83 71 <br />
        contact@la-fanfare-en-plastic.com<br />
        facebook :
        <a href='https://www.facebook.com/biarddanslesairs/?ref=ts&fref=ts'>
        Festival Biard dans les airs</a><br />
      </p>
      <p>
        Merci à
      </p>
      <p>
        Lison, Stu, Benjamin,  Noj, la M3Q, la Blaiserie, Cap Sud, Hélène, La commune de Biard, ses employés des services techniques, Grand Poitiers et tous les bénévoles….
      </p>
      Le festival fait partie de "Vienne fest’", le collectif des festivals de la Vienne.
      Il reçoit le soutien de nombreux partenaires de la commune et aux alentours.
      <div className='partenaires'>
        <a target='_blank' rel='external'><img alt='Plan Poitiers' src={franceBleue} /></a>
        <a target='_blank' rel='external'><img alt='Plan site' src={Vienne} /></a>
        <a target='_blank' rel='external'><img alt='Plan site' src={Region} /></a>
        <a target='_blank' rel='external'><img alt='Plan site' src={biard} /></a>
      </div>

    </div>
  )
}
