import Helmet from 'react-helmet'
import React from 'react'

import franceBleue from './../img/franceBleu.png'
import biard from './../img/biard-logo.gif'

export default function Contact() {
  return (
    <div>
      <Helmet title="Contact" />
      <h1>Contacts</h1>
      <ul className="contact-gille">
        <li>Gilles Morin</li>
        <li>06 83 33 83 71</li>
        <li>gilles.morin0305@gmail.com</li>
        <li>
          facebook:
          <a
            className="contact-fb"
            href="https://www.facebook.com/biarddanslesairs"
          >
            Festival Biard dans les airs
          </a>
        </li>
      </ul>
      <p>
        <span>
          Merci à : Mick, Aurélien, Alexandre, Lison, Stu ,Léna , la M3Q, La
          Blaiserie, la commune de Biard, ses employés des services techniques,
          Grand Poitiers.
        </span>
      </p>
      <p>
        <span>
          Le festival reçoit le soutien de nombreux partenaires de la commune et
          des alentours.
        </span>
      </p>
      <span>
        Le festival fait partie de "Vienne fest’", le collectif des festivals de
        la Vienne. Il reçoit le soutien de nombreux partenaires de la commune et
        aux alentours.
      </span>
      <div className="partenaires">
        <div>
          <img
            alt=" Logo Vienne Fest"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHALTvzR_9jLEJDB08yVZDC_aigMjsXG55NrWXd_dwPWCAbImhnA"
          />
        </div>
        <div>
          <img alt="Logo France bleue" src={franceBleue} />
        </div>
        <div>
          <img
            alt="logo Vienne"
            src="https://upload.wikimedia.org/wikipedia/fr/8/84/Logo_D%C3%A9partement_Vienne_2015.svg"
          />
        </div>
        <div>
          <img
            alt="Logo grand Poitiers"
            src="data:image/png;base64,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"
          />
        </div>
        <div>
          <img alt="Logo Biard" src={biard} />
        </div>
      </div>
    </div>
  )
}
