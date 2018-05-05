import Artiste from 'Artiste'
import Helmet from 'react-helmet'
import React from 'react'

import '../style/Programmation.css'
import Groupes from './Groupe'

export default class Vendredi extends React.Component {
    render(){
        return (
            <div className='texte'>
             <Helmet title='Vendredi' />
             {/* <h1>En Construction</h1> */}
                <h1 className='titre'>Programmation du Vendredi 22 Juin</h1>

            <p>
              Ouverture du site à 19h.<br />
              Entrées : participation libre (Chacun donne ce qu’il veut ou ce qu’il peut)
            </p>
            <Artiste groupe={Groupes.Jomipilos} />
            <Artiste groupe={Groupes.Begoodiz} />
            <Artiste groupe={Groupes.OpsaDeheli} />
          </div>
        )
    }
}
