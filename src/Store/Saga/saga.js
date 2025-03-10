
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { fetchAPI} from 'API/index';
import { GET_USER_SUCCES, GET_USER_FETCH, userAction, LOGIN_USER_FETCH,LOGIN_USER_SUCCES,LOGIN_USER_FAIL } from 'Store/Action/action'
import { HISTORY_USER_FETCH, userHistoryAction } from 'Store/Action/HistoryAction';
import { getToken } from 'Store/selector/index';


function* workGetUserFetch() {
  const token = yield select(getToken)
  try {
    const user = yield call(fetchAPI, "/api/users/currentUser","get", token);
    yield put(userAction.success(user))
  } catch (error) {
    yield put(userAction.failure(error.message))
  }
}
function* history(action) {
  const { payload } = action;
  const token = yield select(getToken);
  try {
    const response = yield call(fetchAPI, "/api/order/history","post", token, payload);
    yield put(userHistoryAction.success(response))
  } catch (error) {
    yield put(userHistoryAction.failure(error.message))
  }
}

function* login(action) {

  const {payload} = action;
  try {
    const response = yield call(fetchAPI, "/auth/signin","post", undefined, payload);
    localStorage.setItem("APP_TOKEN", `${response.data.tokenType} ${response.data.accessToken}`)

    yield put(userAction.success(`${response.data.tokenType} ${response.data.accessToken}`))
    yield put({ type: LOGIN_USER_SUCCES });

  } catch (error) {

    yield put({ type: LOGIN_USER_FAIL })
  }
}


function* mysaga() {

  yield takeLatest(GET_USER_FETCH, workGetUserFetch);
  yield takeLatest(LOGIN_USER_FETCH, login);
  yield takeLatest(HISTORY_USER_FETCH, history);
}

export default (mysaga)
