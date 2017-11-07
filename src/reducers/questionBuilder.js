import * as types from '../actions/questionBuilder';
import * as ANSWER_TYPE from '../constants/answerTypes';

const defaultState = {
  isLoading: false,
  data: {
    title: `Question`,
    level: 'elementary', 
    type: 'grammar',
    answerType: ANSWER_TYPE.SINGLE_CHOICE,
    theme: '',
    answers: [],
    trueAnswer: [],
  },
}

const questionBuilder = (state = defaultState, action) => {
  switch (action.type) {
    case types.QUESTION_REQUEST_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.QUESTION_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };
    case types.QUESTION_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case types.QUESTION_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case types.UPDATE_QUESTION:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.data,
        },
      };
    case types.RESET_QUESTION:
      return defaultState;
    default:
      return state;
  }
};

export default questionBuilder;