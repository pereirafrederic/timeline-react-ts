// App external
import React, { memo } from 'react'

// App internal

// Module internal
import './Spinner.scss'

export enum ESpinnerTheme {
  Dark = 'DARK',
  Light = 'LIGHT',
}

interface ISpinnerProps {
  size?: string
  theme?: ESpinnerTheme
}

function pxToNumber(px: string) {
  return parseFloat(px.replace('px', ''))
}

const Spinner = memo(
  ({ size = '16px', theme = ESpinnerTheme.Light }: ISpinnerProps) => {
    const spinnerSize = pxToNumber(size)
    const borderSize = (spinnerSize * 2) / 16

    const spinnerStyle = {
      width: spinnerSize,
      height: spinnerSize,
    }

    const circleStyle = {
      borderWidth: borderSize,
    }

    return (
      <div className={`Spinner ${theme}`} style={spinnerStyle}>
        <div className="spinner-container">
          <div className="spinner-layer spinner-layer">
            <div className="spinner-clipper spinner-clipper--left">
              <div className="spinner-circle" style={circleStyle} />
            </div>
            <div className="spinner--patch">
              <div className="spinner-circle" style={circleStyle} />
            </div>
            <div className="spinner-clipper spinner-clipper--right">
              <div className="spinner-circle" style={circleStyle} />
            </div>
          </div>
        </div>
      </div>
    )
  }
)

export default Spinner
