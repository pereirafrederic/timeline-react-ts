// App external
import React, { PureComponent } from 'react'

// Module internal
//import './Accueil.scss'

interface IOwnProps {}
interface IProps extends IOwnProps {}

class LecteurTop extends PureComponent<IProps> {
  public render() {
    return <div className="LecteurTop">{'LecteurTop'}</div>
  }
}

export default LecteurTop
