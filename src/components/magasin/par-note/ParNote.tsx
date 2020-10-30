// App external
import React, { PureComponent } from 'react'

// Module internal
//import './Accueil.scss'

interface IOwnProps {}
interface IProps extends IOwnProps {}

class ParNote extends PureComponent<IProps> {
  public render() {
    return <div className="ParNote">{'ParNote'}</div>
  }
}

export default ParNote
