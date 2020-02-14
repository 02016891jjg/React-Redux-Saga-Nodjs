//@flow

import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import { SHARE_IMG } from 'common/images'

type Props = {
  breadCrumbData: Array<string>,
  onClick: () => any
}
const BreadCrum = (props: Props) => {
  const { breadCrumbData, onClick } = props
  return (
    <section className="vs-section">
      <div className="vs-container">
        <div className="vs-img">
          <span className="wrap_arrow">
            <Link to="" className="arrow_lft">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </Link>
            <Link to="" className="arrow_rgt">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </Link>
          </span>
          <ul className="cstm_bredcum">
            {breadCrumbData.map((item, i) => {
              return (
                i != 2 ?
                  <li key={i}>
                    <Link to={item.breadroute} >
                      {' '}
                      {item.breadname}{' '}
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </Link>
                  </li> : <li key={i}>
                    <Link to={item.breadroute} className="content_style">
                      {' '}
                      <b>{item.breadname}</b>{' '}
                    </Link>
                  </li>
              )
            })}
          </ul>
        </div>
        {/* <div>
          <img src={SHARE_IMG} />
          <p>Share This Comparison</p>
        </div> */}
      </div>
    </section>
  )
}

export default BreadCrum
