// App external
import React, { PureComponent } from 'react'

// Module internal
import './TopBar.scss'
import i18n from './i18n'
import Tile, { ETileTheme } from '../../../modules/visuel/tile/Tile'

interface IProps {}

class TopBar extends PureComponent<IProps> {
  public render() {
    return (
      <Tile className="TopBar" theme={ETileTheme.Internal}>
        <div className="TopBar__logo">mon logo</div>
        <div className="TopBar__raccourcis">mes raccourcis</div>
        <div className="TopBar__compte">mon compte</div>
      </Tile>
    )
  }
}

export default TopBar
