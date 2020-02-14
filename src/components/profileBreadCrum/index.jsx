//@flow

import React from 'react'
import { Link } from 'react-router-dom'
import { SHARE_IMG, ICON_ARROW_RIGHT_GREY } from 'common/images'

import './styles.scss'

type Props = {
  breadCrumData: Array<string>,
  onReturnHome: () => any,
}
const ProfileBreadCrum = (props: Props) => {
  const { breadCrumData, onReturnHome } = props
  return (
    <div className="vs-section">
 
      <div className="vs-container">
        <div style={{width:'100%',margin:'auto',maxWidth:1440,paddingRight:79,paddingLeft:79}}>
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
          <li>      
           <Link to="/" className="content_style" style={{color: '#242B2ECC'}}>
               Homepage
            </Link>
          </li>
          <img src={ICON_ARROW_RIGHT_GREY} style={{marginRight:5,marginLeft:5}} />
          <li>
            <Link to="/" className="content_style" style={{color:'#242B2ECC',fontFamily:'Semibold Proxima Nova'}}>
                MyProfile
            </Link>
          </li>       
          </ul>
        </div>
      
        </div>
      </div>
  
    </div>
  )
}

export default ProfileBreadCrum
