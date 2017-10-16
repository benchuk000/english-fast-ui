import { API_URL } from '../config.js';
import axios from 'axios';
import { toastr } from 'react-redux-toastr';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const START_USER_LOADING = 'START_USER_LOADING';
export const FINISH_USER_LOADING = 'FINISH_USER_LOADING';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user,
});

export const startUserLoading = () => ({
  type: START_USER_LOADING
});

export const finishUserLoading = () => ({
  type: FINISH_USER_LOADING
});

export const signIn = (data, callback = () => {}) => dispatch => {
  axios.post(`${API_URL}/signin`, data)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;

      dispatch(setCurrentUser(res.data.user));
      callback(res.data);
    })
    .catch(error => toastr.error('Email or password do not match'))
};

export const signInUserByToken = (data, callback = () => {}) => dispatch => {
  dispatch(startUserLoading());
  axios.get(`${API_URL}/me`)
    .then(res => {
      dispatch(setCurrentUser(res.data.user));
      dispatch(finishUserLoading());
    })
    .catch(({ response }) => toastr.error(response.data))
};

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  delete axios.defaults.headers.common['Authorization'];
  dispatch(setCurrentUser(null));
}
