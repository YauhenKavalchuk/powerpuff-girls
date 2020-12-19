import {
  call,
  put,
  takeLatest,
  all,
} from 'redux-saga/effects';

import {
  REQUEST_API_DETAILS,
  REQUEST_API_EPISODES,
  receiveApiDetails,
  receiveApiEpisodes,
} from './actions';
import { fetchDetails, fetchShowEpisodes } from './api';

function* getShowDetails({ id }) {
  try {
    const data = yield call(fetchDetails, id);
    yield put(receiveApiDetails(data));
  } catch (e) {
    console.log(e);
  }
}

function* getShowEpisodes({ id }) {
  try {
    const data = yield call(fetchShowEpisodes, id);
    yield put(receiveApiEpisodes(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(REQUEST_API_DETAILS, getShowDetails),
    takeLatest(REQUEST_API_EPISODES, getShowEpisodes),
  ]);
}
