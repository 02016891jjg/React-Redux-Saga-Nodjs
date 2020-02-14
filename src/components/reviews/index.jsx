//@flow

import React, { useState } from 'react'
import { ICON_STAR_EMPTY, AVATAR } from 'common/images'
import StarRatings from 'react-star-ratings'
import moment from "moment";
import { review, review_info, review_text, reviewName, review_star, review_time, edit_review, left_review } from './styles.module.scss'

type Props = {
  className: string,
  reviews: Array<Object>
}

const Reviews = (props: Props) => {
  const { review } = props
  let filteredData
  if (review.index == 0) {
    filteredData = review.reviews;
  } else {
    filteredData = review.reviews.filter(item => item.rate == 6 - review.index);
  }
  return (
    <div className={review}>
      {filteredData.length > 0 &&
        filteredData.map((review, index) => {

          // const date = moment(review.created_at)
          //  var test = moment(date).fromNow()
          //  const val = moment(review.created_at).isValid()
          return (
            <div className={review_info} style={{ marginBottom: 41}} id={index}>
              <div className={review_text} style={{ flexDirection: 'row' }}>
                <img src={AVATAR} className="img-avatar" />
                <span className={reviewName} style={{
                  textAlign: 'center',
                  marginTop: 10,
                  fontSize: 14,
                  fontFamily: 'Semibold Proxima Nova',
                  color: '#242B2E'
                }} >Eugene Diaz</span>
                <span></span>
                <span style={{
                  textAlign: 'center',
                  marginTop: 10,
                  fontSize: 10,
                  paddingLeft:7,
                  fontFamily: 'Semibold Proxima Nova',
                  color: '#91A8BF'
                }}>{"7 hours ago"}</span>
              </div>
              <div className={review_star} style={{ paddingLeft: 25, marginTop: -15 }}>
                <StarRatings
                  rating={review.rate}
                  isSelectable={true}
                  starRatedColor="rgb(3, 169, 244)"
                  numberOfStars={5}
                  name='rating'
                  svgIconPath="M24.331,22.222a.468.468,0,0,0-.139.418l.719,4.245a1.7,1.7,0,0,1-2.459,1.809l-3.827-2.018a.491.491,0,0,0-.441,0l-3.827,2.018A1.7,1.7,0,0,1,11.9,26.884l.719-4.245a.489.489,0,0,0-.139-.418L9.392,19.206a1.729,1.729,0,0,1-.441-1.74,1.68,1.68,0,0,1,1.369-1.16l4.268-.626a.446.446,0,0,0,.348-.255l1.9-3.874a1.708,1.708,0,0,1,3.062,0h0l1.9,3.874a.446.446,0,0,0,.348.255l4.268.626a1.68,1.68,0,0,1,1.369,1.16,1.637,1.637,0,0,1-.441,1.74Z"
                  svgIconViewBox='0 0 30 30'
                  starDimension="30"
                  starSpacing="0px"
                />
              </div>
              <p className={left_review} style={{
                paddingLeft: 32,
                marginTop: 19,
                fontSize:14,
                fontFamily:'Regular Proxima Nova'
              }}>
                {review.text}
              </p>
            </div>
          )
        })}
    </div >
  )
}

export default Reviews
