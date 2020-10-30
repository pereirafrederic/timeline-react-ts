// App external
import React, { memo, ReactNode } from 'react'
import MediaQuery from 'react-responsive'

// App internal

// Module internal
import './LayoutMobile.scss'

interface ILayoutMobileProps {
  children: ReactNode
}

const LayoutMobile = memo((props: ILayoutMobileProps) => {
  const { children } = props
  return (
    <MediaQuery query={'(max-width: 767px)'}>
      <div className="LayoutMobile">{children}</div>
    </MediaQuery>
  )
})

export default LayoutMobile
