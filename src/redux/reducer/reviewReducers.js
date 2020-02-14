//@flow
import {
    POST_REVIEW_STARTED,
    POST_REVIEW_SUCCESS,
    POST_REVIEW_FAILED,
    REVIEWS_SET_DATA
  } from '../../common/action';
  
  type reviewState = {
    type: string,
    payload: Object
  };
  
  type defaultState = Object;
  
  export default function reducer(
    state: defaultState = { reviews: {} },
    action: reviewState
  ) {
    switch (action.type) {
      case POST_REVIEW_STARTED: {
        return { ...state, changingStatus: 'ongoing' };
      }
      case POST_REVIEW_SUCCESS: {
        return {
          ...state,
          changingStatus: 'success',
          reviews: action.payload
        };
      }
      case REVIEWS_SET_DATA: {
          console.log("payload-----", action.payload)
        return {
          ...state,
          changingStatus: 'success',
          reviews: action.payload
        };
      }
      case POST_REVIEW_FAILED: {
        return {
          ...state,
          changingStatus: 'failed',
          reviews: action.payload
        };
      }
      default: {
        return state;
      }
    }
  }
  