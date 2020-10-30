// App external
import React, { memo, ReactNode } from 'react'

// Module internal
import './Tile.scss'

export enum ETileTheme {
  Internal = 'INTERNAL',
  External = 'EXTERNAL',
}

interface ITileProps {
  children: ReactNode
  className?: string
  theme?: ETileTheme
}

const Tile = memo((props: ITileProps) => {
  const { children, className = '', theme = ETileTheme.Internal } = props

  return <div className={`Tile ${className} theme-${theme}`}>{children}</div>
})

export default Tile
