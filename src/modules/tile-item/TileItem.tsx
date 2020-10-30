// App external

import React, { memo, ReactNode, Fragment } from 'react'
import { mdiSync } from '@mdi/js'
import Icon from '@mdi/react'
import MediaQuery from 'react-responsive'

// App internal

// Module internal
import './TileItem.scss'
import { Link } from 'react-router-dom'
import LayoutDesktop from '../visuel/layout/layout-desktop/LayoutDesktop'

export enum ETileItemTheme {
  Normal = 'NORMAL',
  Accent = 'ACCENT',
  Error = 'ERROR',
}

interface ITileItemProps {
  // Use contentValue alone, or contentValue and contentLabel
  contentValue: ReactNode
  contentLabel?: string
  // contentTooltip is set on contentValue hover
  contentTooltip?: string
  // buttonIcon is displayed alone on mobile
  buttonIcon?: string
  // buttonLabel and buttonIcon are both displayed on tablet/dektop
  buttonLabel?: string
  onButtonAction?: () => void

  theme?: ETileItemTheme
  info?: string
  inProgress?: string
  href?: string
}

const TileItem = memo(
  ({
    contentValue,
    contentLabel,
    contentTooltip,
    buttonIcon,
    buttonLabel,
    onButtonAction,
    theme,
    info,
    inProgress,
    href,
  }: ITileItemProps) => {
    const render = (): JSX.Element => {
      return renderContainer(renderContent())
    }

    const renderContainer = (content: ReactNode): JSX.Element => {
      const className = `TileItem ${theme ? theme : ''} ${
        onButtonAction || href ? 'reactive' : 'not-reactive'
      }`

      if (onButtonAction) {
        return (
          <button className={className} onClick={onButtonAction}>
            {content}
          </button>
        )
      } else {
        const element = <div className={className}>{content}</div>
        if (href) return <Link to={href}>{element}</Link>
        return element
      }
    }

    const renderContent = (): ReactNode => {
      return (
        <Fragment>
          <div className="TileItem__data">
            {renderLabel()}
            {renderValue()}
          </div>
          {renderSideElement()}
        </Fragment>
      )
    }

    const renderLabel = (): ReactNode => {
      if (!contentLabel) return null
      return <div className="TileItem__label">{contentLabel}</div>
    }

    const renderValue = (): ReactNode => {
      return (
        <div className="TileItem__value" title={contentTooltip}>
          {contentValue}
        </div>
      )
    }

    const renderSideElement = (): ReactNode => {
      if (inProgress) return renderInProgress()
      else if (info) return renderInfo()
      else if (buttonIcon) return renderActions()
      else return null
    }

    const renderInfo = (): ReactNode => {
      if (!info) return null
      return <div className="TileItem__info">{info}</div>
    }

    const renderInProgress = (): ReactNode | null => {
      return (
        <div className="TileItem__in-progress">
          <div className="text">{inProgress}</div>
          <Icon className="icon" path={mdiSync} />
        </div>
      )
    }

    const renderActions = (): ReactNode => {
      if (!(buttonIcon && onButtonAction)) return null
      return (
        <div className="TileItem__actions">
          <Icon className="icon" path={buttonIcon as string} />
          {buttonLabel && <div className="text">{buttonLabel}</div>}
        </div>
      )
    }

    return render()
  }
)

export default TileItem
