// App external
import React, { PureComponent } from 'react'

// Module internal
//import './Compte.scss'
import i18n from './i18n'

interface IProps {}

class Footer extends PureComponent<IProps> {
  public render() {
    return <div className="Footer">{i18n.titre}</div>
  }
}

export default Footer
