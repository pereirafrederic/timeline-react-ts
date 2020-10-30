// App external
import React, { PureComponent } from 'react'

// Module internal
//import './Accueil.scss'

interface IOwnProps {}
interface IProps extends IOwnProps {}

class ParAuteur extends PureComponent<IProps> {
  public render() {
    return <div className="ParAuteur">{'ParAuteur'}</div>
  }
}

export default ParAuteur
