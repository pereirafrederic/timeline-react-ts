// App external
import React, { PureComponent } from 'react'
import SerieLivre from './serie-livre/SerieLivre'
import InfoFlash from './info-flash/InfoFlash'

// Module internal
//import './Accueil.scss'

interface IOwnProps {
  id: string
}
interface IProps extends IOwnProps {}

class Oeuvre extends PureComponent<IProps> {
  public render() {
    return (
      <div className="Oeuvre">
        {this.props.id}
        <InfoFlash />
        <SerieLivre />
      </div>
    )
  }
}

export default Oeuvre
