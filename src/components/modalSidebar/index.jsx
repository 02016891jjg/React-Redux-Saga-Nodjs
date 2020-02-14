//@flow

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  COMPARE_PHONE,
  SIDENAV_ICON1,
  SIDENAV_ICON2,
  SIDENAV_ICON3,
  SIDENAV_ICON4,
  LOCK_ICON,
  WHITE_ARROW_ICON,
} from 'common/images'
import { menuLists } from '../../utils/metaData'
import ButtonComponent from '../common/buttonComponent/ButtonComponent'
import './styles.scss'
import { KEY_IMG, PHONE_IMG } from 'common/images'
import { Any } from 'index'

import {OBJModel} from 'react-3d-viewer'

type SocialAppType = { socialName: string, className: string }

type Props = {
  sideBarIndex: number,
  socialApp: Array<SocialAppType>,
  sideBarMenu: Array<string>,
  parentCallback: (data: number) => any,
  login?: Boolean,
  deviceImage: string,
  Menus: Object,
  productDetailMenu2: Array<string>,
  onhandleShow: (index: number) => any,
  onVisibleMenubarClick: () => any,
  isVisibleMenubar: boolean,
  onKeyAspectClick: () => any,
  onChangeReviewIndex: () => Any,
  isKeyAspectVisible: boolean,
  isDescModalVisible: boolean,
  reviews: Array<Object>
}
const ModalSideBar = (props: Props) => {
  const {
    onChangeReviewIndex,
    sideBarIndex,
    reviews, sideBarMenu,
    socialApp, deviceImage,
    Menus, productDetailMenu2,
    onVisibleMenubarClick, isVisibleMenubar,
    isDescModalVisible, onKeyAspectClick,
    isKeyAspectVisible } = props

  const [login, setLogin] = useState(true);

  const [activeIcon, setActiveIcon] = useState(0)

  // const menulist = Object.keys(Menus).length ? Object.keys(Menus) : []
  // console.log("menuuuuuuuuuuuuuuuu")
  // console.log(menulist)
  

  const loginAction = event => {
    setLogin(true)
  }

  const sideNavClick = i => {
    setActiveIcon(i)
    props.parentCallback(i)
  }
  const getCounters = i => {
    let filteredData = [];
    if (reviews.length > 0) {
      if (i == 6) {
        filteredData = reviews;
      } else {
        filteredData = reviews.filter(item => item.rate == i);
      }

    }
    return filteredData.length
  }

 
  return (
    <div className="iphn-lft">
      <div className="iphn_out_image" onClick={onVisibleMenubarClick}>
        <div className="iphn_image_inner">
          {/* <img src={PHONE_IMG} /> */}
         
          {/* <OBJModel src={require('../../assets/images/IronMan.obj')} texPath="" width={200} height={300} position={0,20,0}/> */}
        
          
          {
            deviceImage ? <img src={deviceImage} /> : <img src={PHONE_IMG} />
          }
        </div>
      </div>
      {
        isVisibleMenubar && (
          <div className="brand-style">
            <span className="left-txt">BRAND</span>
            <span className="right-txt">Apple<span className="box-style"><img src={WHITE_ARROW_ICON} /></span></span>
          </div>
        )

      }

      <div className="modal_side_minor">
        {sideBarIndex == 0 && (
          <div className="key_part">
            <img src={KEY_IMG} />
            <b className={isKeyAspectVisible ? "aspect aspect_visible" : "aspect"} onClick={onKeyAspectClick}>key Aspects</b>
          </div>)
        }

        <ul className="iphn-spec">
          {menuLists && sideBarIndex !== 1 &&
            menuLists[sideBarIndex].map((menu, index) => {
              return (

                <li key={index} id={index} className={index == 0 && !isKeyAspectVisible ? 'paneindex active' : 'paneindex'} onClick={() => props.onhandleShow(index)}>
                  <a herf="#" >{menu.name}</a>
                </li>
              )
            })}
          {menuLists && sideBarIndex == 1 &&
            menuLists[sideBarIndex].map((menu, index) => {
              return (

                <li key={index} id={index} className={index == 0 && !isKeyAspectVisible ? 'paneindex active' : 'paneindex'} onClick={() => onChangeReviewIndex(index)}>
                  <a herf="#"
                    style={{
                      fontSize: 14,
                      fontFamily: 'Regular Proxima Nova'
                    }}>{menu.name}</a>
                  <span style={{
                    fontSize: 10,
                    fontFamily: 'Semibold Proxima Nova'
                  }}>
                    {" (" + getCounters(6 - index) + ")"}</span>
                </li>

              )
            })}
        </ul>
        {sideBarIndex == 0 && (
          <ul className="iphn-spec1">
            {productDetailMenu2 &&
              productDetailMenu2.map((menu, index) => {
                return (
                  <li className={index === 0 ? 'active' : ''} key={index}>
                    <Link to="#">{menu}</Link>
                  </li>
                )
              })}
          </ul>)}
        {sideBarIndex == 0 && (
          <div className="view_part">
            <b>Night Mode</b>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>)
        }

      </div>
      <div className="own_radio" style={{ position: 'absolute', bottom: 0 }} > <input type="radio" id="test1" name="radio-group" /><label htmlFor="test1">I Own This Device</label></div>
      {!login && (
        <ul className="social_icons">
          {socialApp.map((item, i) => {
            return (
              <li className={item.socialName} key={i}>
                <img src={item.className} alt="" />
                {/* {item.socialName !== 'specs' && (
                  <img className="lock-icon" src={LOCK_ICON} alt="" />
                )} */}
                {item.socialName !== 'specs' && (
                  <div className="social_tooltip">
                    <p>
                      This feature is available for TechSpecs users only.
                      SIgn-up for free or login to your account to gain access
                      'TechSpecs Blocks.'
                    </p>
                    <Link to="/signup">
                      <ButtonComponent
                        children="Sign Up"
                        className="btn tooltip-btn"
                        onClick={() => { }}
                      />
                    </Link>
                    <ButtonComponent
                      children="Login"
                      className="btn tooltip-btn login-btn"
                      onClick={loginAction}
                    />
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      )}

      {/* <ul className="social_login_icons">
        {socialApp.map((item, i) => {
          return (
            <li
              className={activeIcon === i ? 'active' : ''}
              key={i}
              onClick={event => sideNavClick(i)}
            >
              <img src={item.className} alt="" />
            </li>
          )
        })}
      </ul> */}

    </div>
  )
}

export default ModalSideBar
