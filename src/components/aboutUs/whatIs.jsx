//@flow

import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import {
  text,
  description,
  photos,
  cards,
  mocup,
  what_is_part,
  text_tag,
  see_brand_button,
  inner,
  description_p
} from './styles/whatIs.module.scss'

import {
  CARDS,
  MOCUP,
  WHATISPHOTO
} from 'common/images'

const WhatIs = () => {
  return (
    <div className={inner}>
      <div className={what_is_part}>
        <div className={text}>
          <p>About Us</p>
          <div className={description}>
            <p className={description_p}>
            TechSpecs is a staggered AI platform dedicated to improving the way the world does business. 
            </p>
            <p className={description_p} style={{marginTop:10}}>
            Our innovative, industry-leading technology makes it easy for consumers to find, compare and generate standardized technical specifications of consumer electronics in just seconds.
            </p>
            </div>
          <div className={text_tag}>
            <span>Our mission </span>is to standardize the technical specifications of the world’s consumer electronics and make it easily accessible to consumers across the entire globe.

            </div>
          <div className={text_tag}>
            {/* <span>Our vision is </span>to become the global leader of the specs economy. */}
            </div>
          <div className={see_brand_button}><Link to="/guideline">See Our Brand Guidelines</Link></div>

        </div>
        <div className={photos}>
          {/* <img className={cards} src={WHATISPHOTO} alt="CARDS"></img> */}
          {/*<img className={mocup} src={MOCUP} alt="MOCUP"></img>*/}
        </div>
      </div>
    </div>
  )
}

export default WhatIs
