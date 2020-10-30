// App external
import React, { PureComponent } from 'react'

// Module internal
import './Accueil.scss'
import TopAuteur from '../site/top-auteur/TopAuteur'
import TopOeuvre from '../site/top-oeuvre/TopOeuvre'
import Button from '../../modules/button/Button'
import { mdiAccessPoint } from '@mdi/js'
import Spinner, { ESpinnerTheme } from '../../modules/spinner/Spinner'
import IconBadge from '../../modules/icon/icon-badge/IconBadge'
import Popup from '../../modules/popup/Popup'
import Tile, { ETileTheme } from '../../modules/visuel/tile/Tile'
import LayoutTablet, {
  LayoutTabletColumns,
} from '../../modules/visuel/layout/layout-tablet/LayoutTablet'
import LayoutMobile from '../../modules/visuel/layout/layout-mobile/LayoutMobile'
import Tooltip from '../../modules/tooltip/Tooltip'

interface IProps {}

class Accueil extends PureComponent<IProps> {
  public render() {
    return (
      <div className="Accueil">
        <TopAuteur />
        <TopOeuvre />

        <Button
          iconPath={mdiAccessPoint}
          label={'bonjour'}
          onAction={() => console.log('button')}
        />
        <Spinner size="36px" theme={ESpinnerTheme.Dark} />
        <IconBadge iconPath={mdiAccessPoint} value={4} />
        <Tile theme={ETileTheme.External}>
          <Button
            iconPath={mdiAccessPoint}
            label={'bonjour'}
            onAction={() => console.log('button')}
          />
          <Spinner size="36px" theme={ESpinnerTheme.Dark} />
          <IconBadge iconPath={mdiAccessPoint} value={4} />
        </Tile>
        <Tooltip tooltip={'tool'}>
          <Spinner size="36px" theme={ESpinnerTheme.Dark} />
        </Tooltip>

        <LayoutTablet>
          <LayoutTabletColumns
            left={<IconBadge iconPath={mdiAccessPoint} value={4} />}
            right={<IconBadge iconPath={mdiAccessPoint} value={6} />}
          />
        </LayoutTablet>
        <LayoutMobile>
          <IconBadge iconPath={mdiAccessPoint} value={4} />
          <IconBadge iconPath={mdiAccessPoint} value={6} />
        </LayoutMobile>
      </div>
    )
  }
}

export default Accueil
/*
<Popup title={'hello'} onClose={() => console.log('close')}>
          <Button
            iconPath={mdiAccessPoint}
            label={'bonjour'}
            onAction={() => console.log('button')}
          />
          <Spinner size="36px" theme={ESpinnerTheme.Dark} />
          <IconBadge iconPath={mdiAccessPoint} value={4} />
        </Popup>
*/
