// App external
import React, { memo, ReactNode } from 'react'
import MediaQuery from 'react-responsive'

// App internal

// Module internal
import './LayoutDesktop.scss'

interface ILayoutDesktopProps {
  left: ReactNode
  right: ReactNode
  top?: ReactNode
}

const LayoutDesktop = memo((props: ILayoutDesktopProps) => {
  const { left, right, top } = props
  return (
    <MediaQuery query={'(min-width: 1280px)'}>
      {top}
      <div className="LayoutDesktop">
        <div className="LayoutDesktop__left">{left}</div>
        <div className="LayoutDesktop__right">{right}</div>
      </div>
    </MediaQuery>
  )
})

interface ILayoutDesktopColumnsProps {
  left: ReactNode
  right: ReactNode
}

const LayoutDesktopColumns = memo((props: ILayoutDesktopColumnsProps) => {
  const { left, right } = props
  return (
    <div className="LayoutDesktopColumns">
      <div className="LayoutDesktopColumns__left">{left}</div>
      <div className="LayoutDesktopColumns__right">{right}</div>
    </div>
  )
})

export default LayoutDesktop
export { LayoutDesktopColumns }
