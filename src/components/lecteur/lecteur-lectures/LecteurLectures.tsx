// App external
import React, { PureComponent } from 'react'

// Module internal
//import './Accueil.scss'

interface IOwnProps {}
interface IProps extends IOwnProps {}

class LecteurLectures extends PureComponent<IProps> {
  public render() {
    return <div className="LecteurLectures">{'LecteurLectures'}</div>
  }
}

export default LecteurLectures
