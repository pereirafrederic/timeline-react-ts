// App external
import React, { PureComponent, ReactNode } from 'react'

import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js'

// App internal

// Module internal
import './Tooltip.scss'

export enum ETooltipAnchor {
  Top = 'TOP',
  TopLeft = 'TOPLEFT',
  Left = 'LEFT',
  BottomLeft = 'BOTTOMLEFT',
  Bottom = 'BOTTOM',
  BottomRight = 'BOTTOMRIGHT',
  Right = 'RIGHT',
  TopRight = 'TOPRIGHT',
}

export enum ETooltipDisplay {
  None = 'NONE',
  VisibleMouse = 'VISIBLE-MOUSE',
  VisibleTouch = 'VISIBLE-TOUCH',
}

interface IProps {
  tooltip: string
  children: ReactNode
  position?: ETooltipAnchor
  tooltipAnchor?: ETooltipAnchor
  outerClassName?: string
  innerClassName?: string
}

interface IState {
  display: ETooltipDisplay
}

class Tooltip extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { display: ETooltipDisplay.None }
  }

  defineTooltipAnchor = (position: ETooltipAnchor): ETooltipAnchor => {
    switch (position) {
      case ETooltipAnchor.Top:
        return ETooltipAnchor.Bottom
      case ETooltipAnchor.Bottom:
        return ETooltipAnchor.Top
      case ETooltipAnchor.Left:
        return ETooltipAnchor.Right
      case ETooltipAnchor.Right:
        return ETooltipAnchor.Left
      case ETooltipAnchor.TopLeft:
        return ETooltipAnchor.BottomLeft
      case ETooltipAnchor.TopRight:
        return ETooltipAnchor.BottomRight
      case ETooltipAnchor.BottomLeft:
        return ETooltipAnchor.TopLeft
      case ETooltipAnchor.BottomRight:
        return ETooltipAnchor.TopRight
      default:
        return ETooltipAnchor.Bottom
    }
  }

  handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const { display } = this.state
    if (display === ETooltipDisplay.VisibleTouch) return
    this.setState({ display: ETooltipDisplay.VisibleMouse })
  }

  handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({ display: ETooltipDisplay.None })
  }

  handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    window.addEventListener('scroll', this.handleScroll)
    this.setState({ display: ETooltipDisplay.VisibleTouch })
  }

  handleScroll = () => {
    window.removeEventListener('scroll', this.handleScroll)
    this.setState({ display: ETooltipDisplay.None })
  }

  handleCloseTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    window.removeEventListener('scroll', this.handleScroll)
    this.setState({ display: ETooltipDisplay.None })
    e.stopPropagation()
  }

  render() {
    const {
      tooltip,
      children,
      tooltipAnchor,
      position = ETooltipAnchor.Bottom,
      outerClassName = '',
      innerClassName = '',
    } = this.props

    const { display } = this.state

    const tooltipAnchorPosition: ETooltipAnchor =
      tooltipAnchor || this.defineTooltipAnchor(position)

    let domTooltip: JSX.Element | null = null
    if (display !== ETooltipDisplay.None) {
      let domClose
      if (display === ETooltipDisplay.VisibleTouch)
        domClose = (
          <div
            className="Tooltip__closer"
            onTouchStart={this.handleCloseTouchStart}
          >
            <div className="Tooltip__closer-visible">
              <Icon path={mdiClose} className="Tooltip__closer-icon" />
            </div>
          </div>
        )

      domTooltip = (
        <div className={`Tooltip__container ${position}`}>
          <div className={`Tooltip__inner-container ${tooltipAnchorPosition}`}>
            <div className={`Tooltip__visible`}>
              {domClose}
              {tooltip}
            </div>
          </div>
        </div>
      )
    }
    return (
      <div
        className={`Tooltip ${outerClassName}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onTouchStart={this.handleTouchStart}
      >
        {domTooltip}
        <div className={`Tooltip__children ${innerClassName}`}>{children}</div>
      </div>
    )
  }
}

export default Tooltip
