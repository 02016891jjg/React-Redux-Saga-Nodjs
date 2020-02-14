//@flow

import React from 'react'
import { Link } from 'react-router-dom'
import { SHARE_IMG, ICON_ARROW_RIGHT_GREY } from 'common/images'

import './styles.scss'

type Props = {
  breadCrumbData: Array<string>,
  onReturnHome: () => any,
  isBanner: boolean
}
const BreadCrum1 = (props: Props) => {
  const { breadCrumbData, onReturnHome, isBanner } = props
  return (
    <section className="vs-section">
      <div className="vs-container">
        <div className="vs-img">
          <span className="wrap_arrow">
            <Link to="" className="arrow_lft" onClick={onReturnHome}>
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </Link>
            <Link to="" className="arrow_rgt">
              {/* <i className="fa fa-angle-right" aria-hidden="true"></i> */}
              <img src={ICON_ARROW_RIGHT_GREY} />
            </Link>
          </span>
          <ul className="cstm_bredcum">
            {breadCrumbData.map((item, i) => {
              return (
                i != 2 ?
                  <li key={i}>
                    <Link to={item.breadcrumroute} className="arrow_rgt">

                      {' '}
                      {item.breadcrumname}{' '}
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </Link>
                  </li> : <li key={i}>
                    <Link to={item.breadcrumroute} className="content_style">
                      {' '}
                      <b>{item.breadcrumname}</b>{' '}
                    </Link>
                  </li>
              )
            })}
          </ul>
        </div>
        {
          isBanner && (
            <div className="share_vs_compare">
              <img src={SHARE_IMG} />
              <p className="vs_share_txt">Share This Comparison</p>
            </div>
          )
        }

      </div>
    </section>
  )
}

export default BreadCrum1
