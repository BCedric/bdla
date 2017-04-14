import Helmet from 'react-helmet'
import React from 'react'

export default function Contact () {
  return (
    <div class='texte'>
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
    </div>
  )
}
