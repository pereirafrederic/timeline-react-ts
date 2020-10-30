// App external
import React, { PureComponent } from 'react'

// Module internal
//import './Accueil.scss'

interface IOwnProps {
  id?: string
}
interface IProps extends IOwnProps {}

class AuteurFinancement extends PureComponent<IProps> {
  public render() {
    return <div className="AuteurFinancement">{'financement'}</div>
  }
}

export default AuteurFinancement
