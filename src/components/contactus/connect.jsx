import React, { Component } from 'react'
import './styles/connect.scss'

class Connect extends Component {

  constructor(props) {
    super(props)

  }

  render() {

    return (
      <div className="connect_part">
        <div className="connect_title">
          <p className="point_text">1201 Second Avenue, Seattle, Washington, 98101.</p>
          <p className="point_text1">Vaci Ut 91, Budapest, 1139.</p>
          <p className="point_text2">Parnu mnt 158/2 -88, Tallinn, 11317.</p>
          <b>support@techspecs.io</b>
        </div>
        <div className="social_contact_part">
          <a target="_blank" href="https://facebook.com/realtechspecs">
            <div className="face_style">
              <i className="fa fa-facebook-f face_name social_in"></i>
            </div>
          </a>
          <a target="_blank" href="https://twitter.com/realtechspecs">
            <div className="face_style1">
              <i className="fa fa-twitter face_name social_in"></i>
            </div>
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/techspecs/about">
            <div className="face_style2">
              <i className="fa fa-linkedin face_name social_in"></i>
            </div>
          </a>
          <a target="_blank" href="https://instagram.com/realtechspecs">
            <div className="face_style3">
              <i className="fa fa-instagram face_name social_in"></i>
            </div>
          </a>
          <a target="_blank" href="https://github.com/techspecs/">
            <div className="face_style4">
              <i className="fa fa-github-alt face_name social_in"></i>
            </div>
          </a>

        </div>
      </div>

    )
  }

}

export default Connect