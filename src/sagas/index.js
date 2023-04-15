import {all} from 'redux-saga/effects';
import SearchScreenSaga from './SearchScreen.saga';

export default function* rootSaga() {
  yield all([SearchScreenSaga()]);
}
