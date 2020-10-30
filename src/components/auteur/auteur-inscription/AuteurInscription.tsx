// App external
import React, { PureComponent } from 'react'

// Module internal
//import './Accueil.scss'

interface IOwnProps {
  id?: string
}
interface IProps extends IOwnProps {}

class AuteurInscription extends PureComponent<IProps> {
  public render() {
    return <div className="AuteurInscription">{'AuteurInscription'}</div>
  }
}

export default AuteurInscription
