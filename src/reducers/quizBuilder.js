import * as types from '../actions/quizBuilder.js';

const defaultState = {
  isFetching: false,
  name: 'Quiz',
  isSkillsTest: false,
  questions: [],
}

const quizBuilder = (state = defaultState, action) => {
  switch(action.type) {
    case types.QUIZ_REQUEST_START:
      return {
        ...state,
        isFetching: true,
      }
    case types.QUIZ_REQUEST_SUCCESS:
      return {
        ...state,
        ...action.data,
        isFetching: false,
      }
    case types.QUIZ_REQUEST_FAIL:
      return {
        ...state,
        isFetching: false,
      }
    case types.RESET_QUIZ:
      return defaultState;
    case types.UPDATE_QUIZ:
      return {
        ...state,
        ...action.data
      };
    case types.ADD_QUIZ_QUESTION:
    case types.UPDATE_QUIZ_QUESTION:
    case types.REMOVE_QUIZ_QUESTION:
      return {
        ...state,
        questions: questions(state.questions, action),
      }
    default:
      return state;
  }
};

function questions (state = [], action) {
  switch(action.type) {
    case types.ADD_QUIZ_QUESTION:
      return [
        ...state,
        {
          ...getEmptyQuestion(state.length),
          ...action.question,
        },
      ];
    case types.UPDATE_QUIZ_QUESTION:
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          ...action.data,
        },
        ...state.slice(action.index + 1),
      ];
    case types.REMOVE_QUIZ_QUESTION:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
};

function getEmptyQuestion (index) {
  return {
    title: `Question ${index + 1}`,
    level: 'elementary', 
    type: 'grammar',
    theme: '',
    answers: [],
    trueAnswer: [],
  };
};

export default quizBuilder;
