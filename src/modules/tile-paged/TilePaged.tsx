// App external
import React, { PureComponent, ReactNode } from 'react'
import Icon from '@mdi/react'
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js'

// App internal

// Module Internal
import './TilePaged.scss'

// Redux State Management

interface IProps {
  elements: Array<ReactNode>
  aucunElement: string
  paginationSize: number
}

interface IState {
  pagination: number
  paginationMax: number
}

class TilePaged extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      pagination: 1,
      paginationMax: 0,
    }
  }

  componentDidMount() {
    const { elements, paginationSize } = this.props
    let blockCounter = 0
    if (elements && elements.length) {
      if (elements.length > paginationSize) {
        blockCounter = Math.trunc(elements.length / paginationSize)
        if (blockCounter % paginationSize !== 0) {
          blockCounter = blockCounter + 1
        }
      }
    }
    this.setState({ paginationMax: blockCounter })
  }

  private handlePagination = (page: number) => {
    this.setState({ pagination: page })
  }

  private handlePageNext = () => {
    const { pagination, paginationMax } = this.state
    if (pagination < paginationMax)
      this.setState({ pagination: pagination + 1 })
  }

  private handlePagePrev = () => {
    const { pagination } = this.state
    if (pagination > 1) this.setState({ pagination: pagination - 1 })
  }

  public render() {
    const { pagination, paginationMax } = this.state
    const { elements, aucunElement, paginationSize } = this.props

    const minSlice = (pagination - 1) * paginationSize
    const maxSlice = minSlice + paginationSize

    let domItems: Array<ReactNode> | ReactNode

    if (elements && elements.length > 0) {
      domItems = elements.slice(minSlice, maxSlice).map((element: any) => {
        return element
      })
    } else domItems = <div>{aucunElement}</div>

    return (
      <div className="TilePaged">
        <div className="TilePaged__content">{domItems}</div>
        {paginationMax > 1 && this.renderPaginationDocument()}
      </div>
    )
  }

  private renderPaginationDocument(): ReactNode {
    const { pagination, paginationMax } = this.state
    const blockLinks: Array<ReactNode> = []

    const nextActive = pagination < paginationMax
    const nextButton: ReactNode = nextActive ? (
      <div
        className="TilePaged__paginator__icon primary"
        onClick={this.handlePageNext}
      >
        <Icon path={mdiChevronRight} />
      </div>
    ) : (
      <div className="TilePaged__paginator__icon alpha" />
    )

    const previousButton =
      pagination > 1 ? (
        <div
          className="TilePaged__paginator__icon primary"
          onClick={this.handlePagePrev}
        >
          <Icon path={mdiChevronLeft} />
        </div>
      ) : (
        <div className="TilePaged__paginator__icon alpha" />
      )

    if (paginationMax > 1) {
      for (let i = 1; i <= paginationMax; i++) {
        const classActive = pagination === i ? 'primary' : 'alpha'
        blockLinks.push(
          <div
            className={`TilePaged__paginator__dot ${classActive}`}
            key={`ContratDocuments-${i}`}
            onClick={this.handlePagination.bind(this, i)}
          />
        )
      }
    }
    return (
      <div className="TilePaged__paginator">
        {previousButton}
        <div className="TilePaged__paginator__dots">{blockLinks}</div>
        {nextButton}
      </div>
    )
  }
}

export default TilePaged
