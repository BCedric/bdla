import Helmet from 'react-helmet';
import React from 'react';

import '../style/Contact.css';

const franceBleue = require('./../img/franceBleu.png');
const Vienne = require('./../img/Logo_86_Vienne.png');
const Region = require('./../img/RВgion_Poitou-Charentes_(logo).svg.png');
const biard = require('./../img/biard-logo.gif');

export default function Contact() {
  return (
    <div className="texte">
      <Helmet title="Contact" />
      <h1>Contacts</h1>
      <p className="contact-gille">
        <span>Gilles Morin</span>
        <span>06 83 33 83 71</span>
        <span>gilles.morin0305@gmail.com</span>
        <span>
          facebook :
          <a href="https://www.facebook.com/biarddanslesairs/?ref=ts&fref=ts">
            Festival Biard dans les airs
          </a>
        </span>
      </p>
      <p>
        <span>Merci à :</span>
        <span>
          Mick, Aurélien, Alexandre, Lison, Stu ,Damien, la M3Q, La Blaiserie,
          Hélène, la commune de Biard, ses employés des services techniques,
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
        <a target="_blank" rel="external">
          <img alt="Plan Poitiers" src={franceBleue} />
        </a>
        <a target="_blank" rel="external">
          <img alt="Plan site" src={Vienne} />
        </a>
        <a target="_blank" rel="external">
          <img alt="Plan site" src={Region} />
        </a>
        <a target="_blank" rel="external">
          <img alt="Plan site" src={biard} />
        </a>
      </div>
    </div>
  );
}
