// App external
import React, { PureComponent } from 'react'

// Module internal
//import './Accueil.scss'

interface IOwnProps {}
interface IProps extends IOwnProps {}

class LecteurStatistique extends PureComponent<IProps> {
  public render() {
    return <div className="LecteurStatistique">{'LecteurStatistique'}</div>
  }
}

export default LecteurStatistique
