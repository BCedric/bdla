import Helmet from 'react-helmet'
import React from 'react'

export default function Contact() {
  return (
    <div >
      < Helmet title="Contact" />
      <h1>Contact</h1>
      <ul className="contact-gille">
        <li>Gilles Morin</li>
        <li>06 83 33 83 71</li>
        <li>gilles.morin0305@gmail.com</li>
        <li>
          facebook:
          <a className="contact-fb" href="https://www.facebook.com/biarddanslesairs">
            Festival Biard dans les airs
          </a>
        </li>
      </ul>
    </div >
  )
}
