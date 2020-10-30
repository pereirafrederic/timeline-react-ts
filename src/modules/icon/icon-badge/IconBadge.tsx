// App external
import React, { memo } from 'react'
import Icon from '@mdi/react'

// Module internal
import './IconBadge.scss'

interface IProps {
  iconPath: string
  value: number
}

const IconBadge = memo((props: IProps) => {
  const MAX_NUMBER = 9

  return (
    <div className="IconBadge">
      <div className="icon">
        <Icon className="mdi-icon" path={props.iconPath} />
      </div>
      <div className="pin">
        {props.value > MAX_NUMBER ? `${MAX_NUMBER}+` : props.value}
      </div>
    </div>
  )
})

export default IconBadge
