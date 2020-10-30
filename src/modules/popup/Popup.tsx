// App external
import React, { PureComponent, ReactNode } from 'react'
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js'

// Module internal
import './Popup.scss'

interface IProps {
  title: string
  onClose: () => void
  children: ReactNode
}

interface IState {}

class Popup extends PureComponent<IProps, IState> {
  public componentDidMount() {
    this.toggleScroll()
  }

  public componentWillUnmount() {
    this.toggleScroll()
  }

  private toggleScroll = () => {
    document.getElementsByTagName('body')[0].classList.toggle('no-scroll')
  }

  private handleOnClose = () => {
    this.props.onClose()
  }

  public render() {
    // console.log('RENDER Popup module')

    return (
      <section className="Popup">
        <div className="Popup__container">
          <div className="Popup__header">
            <div className="major-title Popup__titre">{this.props.title}</div>
            <button className="Popup__close" onClick={this.handleOnClose}>
              <Icon className="Popup__mdi-icon" path={mdiClose} />
            </button>
          </div>
          <div className="Popup__content">{this.props.children}</div>
        </div>
      </section>
    )
  }
}

export default Popup
