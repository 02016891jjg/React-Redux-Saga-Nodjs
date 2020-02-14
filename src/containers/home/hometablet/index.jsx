import * as React from 'react'
import './styles.scss'
import Header from 'tabletcomponents/header/index.jsx'

type Props = {

}
type State = {


}

class TabletHome extends React.Component<Props, State>{

  constructor(props: Props) {
    super(props)


  }

  render() {

    return (
      <div className="t_wrapper">
        <Header onFeedBackClick={this.onFeedBackClick} />

        <div className="t_container">

          <div className="t_find">

          </div>
          <div className="t_trending">

          </div>
          <div className="t_references">

          </div>

        </div>
        <div className="t_welcome">

        </div>

      </div>
    )
  }

}

export default TabletHome