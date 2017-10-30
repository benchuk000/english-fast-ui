import * as types from '../actions/currentQuiz.js';

const defaultState = {
  data: null,
  answers: {},
  currentAnswer: [],
  currentQuiestionIndex: 0,
  response: null
};

const currentQuiz = (state = defaultState, action) => {
  let currentQuiestionIndex = 0;
  let currentAnswer = [];
  let answerKey = null;

  switch (action.type) {
      case types.SET_CURRENT_QUIZ:
        return {
          ...state,
          data: action.quiz,
          answers: {},
          currentAnswer: []
        }
      case types.RESET_CURRENT_QUIZ:
        return {
          ...state,
          answers: {},
          currentAnswer: [],
          currentQuiestionIndex: 0,
          response: null
        }
      case types.SET_CURRENT_ANSWER:
        return {
          ...state,
          currentAnswer: action.currentAnswer
        }
      case types.ADD_CURRENT_ANSEWER_TO_ANSWERS:
        answerKey = state.data.questions[state.currentQuiestionIndex]._id;

        return {
          ...state,
          answers: { 
            ...state.answers,
            [answerKey]: state.currentAnswer
          }
        }
      case types.TO_NEXT_QUESTION:
        currentQuiestionIndex = state.currentQuiestionIndex + 1;
        answerKey = state.data.questions[currentQuiestionIndex]._id;
        currentAnswer = state.answers[answerKey] ? state.answers[answerKey]: [];

        return {
          ...state,
          currentAnswer: [ ...currentAnswer ],
          currentQuiestionIndex,
        }
      case types.TO_PREV_QUESTION:
        currentQuiestionIndex = state.currentQuiestionIndex - 1;
        answerKey = state.data.questions[currentQuiestionIndex]._id;
        currentAnswer = state.answers[answerKey] ? state.answers[answerKey]: [];

        return {
          ...state,
          currentAnswer: [ ...currentAnswer ],
          currentQuiestionIndex,
        }
      case types.QUIZ_RESPONSE_RECIEVED:
        return {
          ...state,
          response: action.response
        }
      default:
        return state;
  }
}

export default currentQuiz;