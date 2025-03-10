import { GET_USER_SUCCES, GET_USER_FETCH, GET_USER_FAIL,LOGIN_USER_FETCH,
    LOGIN_USER_SUCCES,
    LOGIN_USER_FAIL,
    LOGIN_USER_LOGOUT } from "Store/Action/action";

const INITIAL_STATE = {
    user: undefined,
    token: localStorage.getItem("APP_TOKEN"),
    isAuthenticated: false,
    fetching: false,
    error: undefined
}

const AuthReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
      case LOGIN_USER_FETCH:
        return { ...INITIAL_STATE, fetching: true};
      case LOGIN_USER_SUCCES:
        return { ...state, fetching: false, ...payload }
      case LOGIN_USER_FAIL:
        return { ...state, fetching: false, ...payload }
  
      case GET_USER_FETCH:
        return { ...state, fetching: true, error: undefined}
      case GET_USER_SUCCES:
        return { ...state, fetching: false, isAuthenticated: true, ...payload}
      case GET_USER_FAIL: 
        return { ...state, fetching: false, token: undefined, ...payload}
      default: return state;
    }
  }
  export default AuthReducer;