// App external
import React, { PureComponent } from 'react'

// Module internal
import './Compte.scss'
import i18n from './i18n'
import Recuperation from './recuperation/Recuperation'
import Identite from './identite/Identite'
import CoordonneeBancaire from './coordonnee-bancaire/CoordonneeBancaire'

interface IOwnProps {
  id?: string
}
interface IProps extends IOwnProps {}

class Compte extends PureComponent<IProps> {
  public render() {
    return (
      <div className="Compte">
        {i18n.titre}
        <div className="Compte__identite">
          {this.props.id}
          <Identite />
          <CoordonneeBancaire />
          <Recuperation />
        </div>
      </div>
    )
  }
}

export default Compte
