// App external
import React, { PureComponent } from 'react'
import Evenement from '../evenement/Evenement'

// Module internal
//import './Accueil.scss'

interface IOwnProps {}
interface IProps extends IOwnProps {}

class Livre extends PureComponent<IProps> {
  public render() {
    return (
      <div className="Livre">
        <Evenement />
      </div>
    )
  }
}

export default Livre
