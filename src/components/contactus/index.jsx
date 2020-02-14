import React, { Component } from 'react'
import {ReactTitle} from 'react-meta-tags';
import Header from '../header'
import ContactInner from '../contactus/contactus.jsx'
import SendMessage from '../contactus/message.jsx'
import './styles/contactus.css'
import GoogleMapReact from 'google-map-react';
import { contact_header, contact_hdr, contact_container, contactpart, contact_inner, contact_title, contact_map, contact_map_inner } from './styles/contact.module.scss'
import Footer from 'components/footer'
import Connect from './connect'
import { MAKER } from '../../common/images'


const AnyReactComponent = ({ text }) => 
<div className="map_part">
  <img className="image_contact_maker" src={MAKER} />
  <b className="area_title">1201 Second Avenue, Seattle, Washington, 98101.</b></div>;
class ContactUs extends Component {

  constructor(props) {
    super(props)

    this.state = {

      center: {
        lat: 47.6066227,
        lng: -122.338936817
      },
      zoom: 10
    }

  }

  render() {

    return (
      <div className={contactpart}>
        <ReactTitle title="Contact Us | TechSpecs"/>
        <Header
          headerClass={contact_header} hdrClass={contact_hdr} checked="contact" />
        <div className={contact_container}>
          <div className={contact_inner}>
            <div className={contact_title}>
              <ContactInner />
              <SendMessage />
            </div>
            <div className={contact_map}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyANz2mEffa8KYOWeDQXWVyV3ueUcVBSGt4' }}
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}
              >
                <AnyReactComponent
                  lat={47.610378}
                  lng={-122.200676}
                  text="14205 SE 36th Street, Bellevue, WA 98006"
                />
              </GoogleMapReact>
              <Connect />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default ContactUs