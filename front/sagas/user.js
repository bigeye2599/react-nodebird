import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  LOAD_USER_REQUEST,
} from "../reducers/user";

axios.defaults.baseURL = "http://localhost:3065/api";

function logInAPI(loginData) {
  return axios.post("/user/login", loginData, {
    withCredentials: true,
  });
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function signUpApi(signUpData) {
  return axios.post("/user/", signUpData);
}

function* signUp(action) {
  try {
    yield call(signUpApi, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e,
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function logOutApi() {
  return axios.post(
    "/user/logout",
    {},
    {
      withCredentials: true,
    }
  );
}

function* logOut() {
  try {
    yield call(logOutApi);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOG_OUT_FAILURE,
      error: e,
    });
  }
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function loadUserApi() {
  return axios.get("/user/", {
    withCredentials: true,
  });
}

function* loadUser() {
  try {
    const result = yield call(loadUserApi);
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOAD_USER_FAILURE,
      error: e,
    });
  }
}

function* watchLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

export default function* userSage() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchLoadUser),
    fork(watchSignUp),
  ]);
}
