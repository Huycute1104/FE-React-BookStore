// actions/authActions.js
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});
