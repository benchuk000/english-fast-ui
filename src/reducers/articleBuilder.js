import * as types from '../actions/articleBuilder';
import * as ANSWER_TYPE from '../constants/answerTypes';

const defaultState = {
  isLoading: false,
  data: {
    name: `Article`,
    theme: '',
  },
}

const articleBuilder = (state = defaultState, action) => {
  switch (action.type) {
    case types.ARTICLE_REQUEST_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.ARTICLE_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };
    case types.ARTICLE_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case types.ARTICLE_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case types.UPDATE_ARTICLE:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.data,
        },
      };
    case types.RESET_ARTICLE:
      return defaultState;
    default:
      return state;
  }
};

export default articleBuilder;