// App external
import React, { PureComponent } from 'react'
import Livre from '../livre/Livre'

// Module internal
//import './Accueil.scss'

interface IOwnProps {}
interface IProps extends IOwnProps {}

class SerieLivre extends PureComponent<IProps> {
  public render() {
    return (
      <div className="SerieLivre">
        <Livre />
      </div>
    )
  }
}

export default SerieLivre
