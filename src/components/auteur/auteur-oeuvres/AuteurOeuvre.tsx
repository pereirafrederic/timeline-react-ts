// App external
import React, { PureComponent } from 'react'

// Module internal
//import './Accueil.scss'

interface IOwnProps {
  id?: string
}
interface IProps extends IOwnProps {}

class AuteurOeuvre extends PureComponent<IProps> {
  public render() {
    return <div className="AuteurOeuvre">{'AuteurOeuvre'}</div>
  }
}

export default AuteurOeuvre
