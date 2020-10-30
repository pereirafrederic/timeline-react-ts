// App external
import React, { PureComponent } from 'react'

// Module internal
//import './Accueil.scss'

interface IOwnProps {
  id?: string
}
interface IProps extends IOwnProps {}

class AuteurPage extends PureComponent<IProps> {
  public render() {
    return <div className="AuteurPage">{'AuteurPage'}</div>
  }
}

export default AuteurPage
