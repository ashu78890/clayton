export const GET_USER_FETCH = 'GET_USER_FETCH';
export const GET_USER_SUCCES = 'GET_USER_SUCCES';
export const GET_USER_FAIL = 'GET_USER_FAIL';

export const LOGIN_USER_FETCH = 'LOGIN_USER_FETCH';
export const LOGIN_USER_SUCCES='LOGIN_USER_SUCCES';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
export const LOGIN_USER_LOGOUT = 'LOGIN_USER_LOGOT';


export const userLoginAction = {
  fetch: (payload) => ({
    type: LOGIN_USER_FETCH,
    payload
  }),
  success: (token) => (
    {
      type: LOGIN_USER_SUCCES,
      payload: {
        token
      }
    }),
  failure: (error) => ({
    type: LOGIN_USER_FAIL,
    payload:{
      error
    }
  }),
  logout: () =>{
    localStorage.removeItem("APP_TOKEN");
    return{
    type: LOGIN_USER_LOGOUT
  }},
  
  
}


export const userAction = {
  fetch: (user) => ({
    type: GET_USER_FETCH,
    user
  }),
  success: (user) => (
    {
      type: GET_USER_SUCCES,
      user
      }),
  failure: (error) => ({
    type: GET_USER_FAIL,
    pyload:{
      error
    }
  })
}

