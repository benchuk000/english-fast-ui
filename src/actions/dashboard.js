import { actions as toastrActions, actions } from 'react-redux-toastr';

import * as skillsTest from './skillsTest';

import * as userService from '../services/userService';

export const GET_ARTICLES_REQUEST_START = 'GET_ARTICLES_REQUEST_START';
export const GET_ARTICLES_REQUEST_SUCCESS = 'GET_ARTICLES_REQUEST_SUCCESS';
export const GET_ARTICLES_REQUEST_FAIL = 'GET_ARTICLES_REQUEST_FAIL';

export const GET_QUIZ_REQUEST_START = 'GET_QUIZ_REQUEST_START';
export const GET_QUIZ_REQUEST_SUCCESS = 'GET_QUIZ_REQUEST_SUCCESS';
export const GET_QUIZ_REQUEST_FAIL = 'GET_QUIZ_REQUEST_FAIL';

export const RESET_DATA = 'RESET_DATA';

export const resetData = () => ({ type: RESET_DATA });

const getArticlesRequestStart = () => ({ type: GET_ARTICLES_REQUEST_START });
const getArticlesRequestSuccess = data => ({
  type: GET_ARTICLES_REQUEST_SUCCESS,
  data,
});
const getArticlesRequestFail = () => ({ type: GET_ARTICLES_REQUEST_FAIL });

export const getArticles = () => (dispatch, getState) => {
  dispatch(getArticlesRequestStart());

  userService.getUserArticles()
    .then(({ data }) => {
      dispatch(getArticlesRequestSuccess(data));
      dispatch(skillsTest.setParams({
        level: data.length ? [ getState().auth.currentUser.level ] : [],
        theme: data.map(article => article.theme),
      }))
    })
    .catch(err => dispatch(getArticlesRequestFail()));
};

const getQuizRequestStart = () => ({ type: GET_ARTICLES_REQUEST_START });
const getQuizRequestSuccess = data => ({
  type: GET_ARTICLES_REQUEST_SUCCESS,
  data,
});
const getQuizRequestFail = () => ({ type: GET_ARTICLES_REQUEST_FAIL });

export const getQuiz = () => (dispatch, getState) => {
  // dispatch(getQuizRequestStart());

  // userService.getQuiz()
  //   .then(({ data }) => dispatch(getQuizRequestSuccess(data)))
  //   .catch(err => dispatch(getQuizRequestFail()));
};