import { put, takeEvery, call } from 'redux-saga/effects';
// import { put, takeEvery, call } from 'redux-saga/effects'
import post from '../postApiCaller';
import {
    POST_REVIEW_STARTED,
    POST_REVIEW_SUCCESS,
    POST_REVIEW_FAILED
} from '../../common/action';



const API_DATA = payload => {
    const data = new FormData();
    data.append('product_id', "aHFVTlpmaXQxTnY1eWVVZ2QraXZPZz09"); // you can append anyone.
    data.append('user_id', 2);
    data.append('text', "this is test");
    data.append('rate', 5);
    return post(payload.url, 'POST',data ,true).then(response => {
      console.log("testresponse----------", response)
    return response;
  });
};

export const POST_REVIEW = function* postReview() {
    console.log("start....")
    yield takeEvery('POST_REVIEW', function*(action) {
    yield put({ type: POST_REVIEW_STARTED });
    try {
     // const DATA = yield call(API_DATA.bind(this, action.payload));
      console.log(action.payload)
      yield put({ type: POST_REVIEW_SUCCESS, payload: action.payload });
    } catch (error) {
        console.log(error)
      yield put({ type: POST_REVIEW_FAILED, payload: error });
    }
  });
};
