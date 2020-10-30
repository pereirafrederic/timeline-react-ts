// App external
import React, { PureComponent } from 'react'

// Module internal
//import './Accueil.scss'

interface IOwnProps {}
interface IProps extends IOwnProps {}

class LecteurNotes extends PureComponent<IProps> {
  public render() {
    return <div className="LecteurNotes">{'LecteurNotes'}</div>
  }
}

export default LecteurNotes
