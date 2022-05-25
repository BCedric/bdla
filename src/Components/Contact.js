import Helmet from 'react-helmet'
import React from 'react'

export default function Contact() {
  return (
    <div>
      <Helmet title="Contact" />
      <h1>Contact</h1>
      <ul className="contact-gille">
        <li>Gilles Morin : 06 83 33 83 71</li>
        <li>bdlabiard@gmail.com</li>
        <li>
          facebook:
          <a
            className="contact-fb"
            href="https://www.facebook.com/biarddanslesairs"
            target="_blank"
          >
            Festival Biard dans les airs
          </a>
        </li>
      </ul>
    </div>
  )
}
