// App external
import React, { memo } from 'react'
import Icon from '@mdi/react'
import { Link } from 'react-router-dom'

// App internal
import Spinner from '../spinner/Spinner'

// Module internal
import './Button.scss'

// Redux State Management

export enum EButtonTheme {
  Dark = 'dark',
  Light = 'light',
}

enum EPosition {
  EC = 'EC',
  OK = 'OK',
  KO = 'KO',
}

interface IButtonProps {
  label: string
  onAction?: () => void
  href?: string
  theme?: EButtonTheme
  type?: string
  iconPath?: string
  position?: EPosition
  isTabbable?: boolean
  isDisabled?: boolean
}

const Button = memo(
  ({
    label,
    theme = EButtonTheme.Dark,
    type,
    iconPath,
    onAction,
    href,
    position,
    isTabbable = true,
    isDisabled = false,
  }: IButtonProps) => {
    let className = `Button ${theme} ${isDisabled ? 'disabled' : 'enabled'}`
    className += iconPath ? ' with-icon' : ' without-icon'

    let icon
    if (iconPath) {
      if (position === EPosition.EC) icon = <Spinner />
      else icon = <Icon className="mdi-icon" path={iconPath} />
    }

    const content = (
      <div className="button-container">
        {icon && <div className="icon-container">{icon}</div>}
        <div className="label">{label}</div>
      </div>
    )

    if (isDisabled) {
      return (
        <button
          className={className}
          disabled={true}
          type="button"
          tabIndex={-1}
        >
          {content}
        </button>
      )
    } else if (type === 'submit') {
      return (
        <button
          className={className}
          type="submit"
          tabIndex={isTabbable ? undefined : -1}
        >
          {content}
        </button>
      )
    } else if (onAction) {
      return (
        <button
          className={className}
          type="button"
          onClick={onAction}
          tabIndex={isTabbable ? undefined : -1}
        >
          {content}
        </button>
      )
    } else if (href) {
      return (
        <Link
          to={href}
          className={className}
          tabIndex={isTabbable ? undefined : -1}
        >
          {content}
        </Link>
      )
    } else {
      return null
    }
  }
)

export default Button
