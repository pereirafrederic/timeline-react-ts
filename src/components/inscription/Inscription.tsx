// App external
import React, { PureComponent } from 'react'

// Module internal
//import './Accueil.scss'

interface IOwnProps {}
interface IProps extends IOwnProps {}

class Inscription extends PureComponent<IProps> {
  public render() {
    return <div className="Inscription">{'Inscription'}</div>
  }
}

export default Inscription
