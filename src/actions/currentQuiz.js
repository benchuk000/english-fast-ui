import * as testService from '../services/testService';

export const SET_QUIZZES = 'SET_QUIZZES';
export const SET_CURRENT_QUIZ = 'SET_CURRENT_QUIZ';
export const RESET_CURRENT_QUIZ = 'RESET_CURRENT_QUIZ';
export const SET_CURRENT_ANSWER = 'SET_CURRENT_ANSWER';
export const TO_NEXT_QUESTION = 'TO_NEXT_QUESTION';
export const TO_PREV_QUESTION = 'TO_PREV_QUESTION';
export const ADD_CURRENT_ANSEWER_TO_ANSWERS = 'ADD_CURRENT_ANSEWER_TO_ANSWERS';
export const SUBMIT_QUIZ = 'SUBMIT_QUIZ';
export const QUIZ_RESPONSE_RECIEVED = 'QUIZ_RESPONSE_RECIEVED';

const setQuizzes = data => ({
  type: SET_QUIZZES,
  data
});

export const setCurrentQuiz = quiz => ({
  type: SET_CURRENT_QUIZ,
  quiz
});

const quizResponseRecieved = (response) => ({
  type: QUIZ_RESPONSE_RECIEVED,
  response,
});

export const addCurrentAnswerToAnswers = () => ({
  type: ADD_CURRENT_ANSEWER_TO_ANSWERS
});

export const resetCurrentQuiz = () => ({
  type: RESET_CURRENT_QUIZ,
});

export const fetchQuizzes = () => dispatch => {
  dispatch(resetCurrentQuiz());

  testService.getTests()
    .then(res => dispatch(setQuizzes(res.data)));
};

export const fetchQuiz = id => dispatch => {
  testService.getTest(id)
    .then(res => dispatch(setCurrentQuiz(res.data)));
};

export const submitQuiz = () => (dispatch, getState) => {
  dispatch(addCurrentAnswerToAnswers());

  testService.submitTest(getState().currentQuiz.data._id, { answers : getState().currentQuiz.answers })
    .then(res => dispatch(quizResponseRecieved(res.data)));
};

export const setCurrentAnswer = (currentAnswer) => dispatch => {
  dispatch({
    type: SET_CURRENT_ANSWER,
    currentAnswer
  });
  dispatch(addCurrentAnswerToAnswers());
};

export const toNextQuestion = () => ({
  type: TO_NEXT_QUESTION
});

export const toPrevQuestion = () => ({ type: TO_PREV_QUESTION });