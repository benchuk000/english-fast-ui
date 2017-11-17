import * as currentQuiz from './currentQuiz';
import * as testService from '../services/testService';

export const SET_PARAMS = 'SET_PARAMS';

export const getTest = () => (dispatch, getState) => {
  const params = getState().skillsTest.params;

  testService.getTest({ params, })
    .then(res => dispatch(currentQuiz.setCurrentQuiz(res.data)))
}

export const resetData = () => (dispatch) => dispatch(currentQuiz.resetCurrentQuiz());

export const setParams = params => ({ type: SET_PARAMS, params });