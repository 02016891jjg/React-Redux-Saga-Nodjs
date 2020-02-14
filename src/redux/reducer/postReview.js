//@flow
import {
    POST_REVIEW_STARTED,
    POST_REVIEW_SUCCESS,
    POST_REVIEW_FAILED,
    REVIEW_INDEX_CHANGE
  } from '../../common/action';
  
  type reviewState = {
    type: string,
    payload: Object
  };
  
  type defaultState = Object;
  
  export default function reducer(
    state: defaultState = { reviews: {}, index:0},
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
      case REVIEW_INDEX_CHANGE: {
        return {
          ...state,
          changingStatus: 'success',
          index: action.payload
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
  