// App external
import React, { memo, ReactNode } from 'react'
import MediaQuery from 'react-responsive'

// App internal

// Module internal
import './LayoutTablet.scss'

interface ILayoutTabletProps {
  children: ReactNode
}

const LayoutTablet = memo((props: ILayoutTabletProps) => {
  const { children } = props
  return (
    <MediaQuery query={'(min-width: 768px) and (max-width: 1279px)'}>
      <div className="LayoutTablet">{children}</div>
    </MediaQuery>
  )
})

interface ILayoutTabletColumnsProps {
  left: ReactNode
  right: ReactNode
  sameHeight?: boolean
}

const LayoutTabletColumns = memo((props: ILayoutTabletColumnsProps) => {
  const { left, right, sameHeight = true } = props
  return (
    <div
      className={`LayoutTabletColumns ${
        sameHeight ? 'same-height' : 'own-height'
      }`}
    >
      <div className="LayoutTabletColumns__left">{left}</div>
      <div className="LayoutTabletColumns__right">{right}</div>
    </div>
  )
})

export default LayoutTablet
export { LayoutTabletColumns }
