// App external
import React, { PureComponent } from 'react'
import Page from '../page/Page'

// Module internal
//import './Accueil.scss'

interface IOwnProps {}
interface IProps extends IOwnProps {}

class Evenement extends PureComponent<IProps> {
  public render() {
    return (
      <div className="Evenement">
        <Page />
      </div>
    )
  }
}

export default Evenement
