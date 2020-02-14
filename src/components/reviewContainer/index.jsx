//@flow

import React, { useState } from 'react'
import './styles.scss'
import {
  reviewcontainer,
  content,
  titles,
  comment,
  signRecommend,
  inputComment,
  emojiContent,
  ratyButton,
  forgetText,
  btnComment,
  posted,
  reviewArray,
  borderLine
} from './styles.module.scss'
import {
  AVATAR,
  ICON_STAR_EMPTY,
  ICON_EMOJI,
  ICON_COMMENT
} from 'common/images'
import {
  POST_REVIEW
} from 'common/constants'
import axios from 'axios'
import StarRatings from 'react-star-ratings'
import Picker from 'emoji-picker-react';
import Reviews from 'components/reviews'

type Props = {
  prduct_id: string,
  onPostReviewClick: () => Any,
  review: Object
}

const ReviewContainer = (props: Props) => {
  const { prduct_id, onPostReviewClick, review } = props

  const emojisArray = ["❤️", "😊", "👌", "👍", "😩", "😂", "😁", "💕", "😍", "😘",
    "😒", "😭", "😔", "😳", "✌️", "😉", "😑", "😴", "😄", "😜",
    "😋", "👏", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😧", "😮", "😴", "🤤", "😪", "😵", "🤐",
    "🥴", "🤢", "😻", "😼", "😽", "🙀", "😿", "😾", "🤲", "👐", "🙌"]
  const [rating, setRating] = useState(0)

  const changeRating = (newRating, name) => {
    setRating(newRating)
  }

  const [comment, setComment] = useState('')

  const [emojisShow, setEmojisShow] = useState(false)

  const [postComment, setPostComment] = useState(false)
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setComment({ comment: comment + emojiObject.emoji })
    setChosenEmoji(emojiObject);
  }
  const updateText = event => {
    setComment(event.target.value)
    event.stopPropagation()
  }

  const emoji = event => {
    setEmojisShow(!emojisShow)
    event.stopPropagation()
  }

  const post = event => {
    if (comment == '' || rating == 0) return
    const data = {
      'product_id': prduct_id,
      'text': comment,
      'rate': rating,
    }
    axios.post('https://admin.techspecs.io/api/putReview', data)
      .then(res => {

        if (!res.data.error) {
          onPostReviewClick(res.data.result);
        }
        else {
          console.log("error")
        }
      })
    setPostComment(!postComment)
    event.stopPropagation()
  }

  return (
    <div className={reviewcontainer}>
      <div className={content}>
        <p className={titles}>
          <b> {review.reviews.length} Reviews </b>
        </p>
        <div className={signRecommend}>
          <p >
            <b>You can review products anonymously. But we recommend you to </b>
            <b style={{ color: '#03A9F4' }}>sign up.</b>
          </p>
        </div>
        {!postComment && (
          <div className="form-group" style={{ paddingTop: 11 }}>
            <div className="avatar-input">
              <img src={AVATAR} className="img-avatar" />
              <textarea
                className={inputComment}
                type="text"
                placeholder="Do you have anything to say about this product? Say here..."
                onClick={updateText}
                onChange={updateText}
              />
              <div className={emojiContent} style={{ zIndex: 999 }}>
                <img src={ICON_EMOJI} className="img-emoji" onClick={emoji} />
                {emojisShow && (
                  <div >
                    {/* {
                      chosenEmoji
                        ? (<span>You chose: {chosenEmoji.emoji}</span>)
                        : <span>No emoji Chosen</span>

                    } */}
                    <Picker onEmojiClick={onEmojiClick} />
                  </div>
                )}
              </div>
            </div>
            <div className={ratyButton} style={{ zIndex: -99 }}>
              <span className={forgetText}>Don't forget to rate.</span>
              <StarRatings
                rating={rating}
                starRatedColor="rgb(3, 169, 244)"
                changeRating={changeRating}
                numberOfStars={5}
                name="rating"
                svgIconPath="M24.331,22.222a.468.468,0,0,0-.139.418l.719,4.245a1.7,1.7,0,0,1-2.459,1.809l-3.827-2.018a.491.491,0,0,0-.441,0l-3.827,2.018A1.7,1.7,0,0,1,11.9,26.884l.719-4.245a.489.489,0,0,0-.139-.418L9.392,19.206a1.729,1.729,0,0,1-.441-1.74,1.68,1.68,0,0,1,1.369-1.16l4.268-.626a.446.446,0,0,0,.348-.255l1.9-3.874a1.708,1.708,0,0,1,3.062,0h0l1.9,3.874a.446.446,0,0,0,.348.255l4.268.626a1.68,1.68,0,0,1,1.369,1.16,1.637,1.637,0,0,1-.441,1.74Z"
                svgIconViewBox="0 0 30 30"
                starHoverColor="rgb(3, 169, 244)"
                starDimension="25"
                starSpacing="0px"
              />
              <button className={btnComment} onClick={post}>
                <p> Post Comment</p>
              </button>
            </div>
          </div>
        )}
        {postComment && (
          <div className={posted}>
            <img src={ICON_COMMENT} />
            <p classNa me="posted-text">
              Thank you for reviewing. If you want to edit your review you can
              find it below or 'my reviews' section on your profile settings
            </p>
          </div>
        )}
        <div className={reviewArray}>
          <Reviews
            review={review}
            className={reviewArray} />
        </div>

      </div>
    </div>
  )
}

export default ReviewContainer
