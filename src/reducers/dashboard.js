import * as types from '../actions/dashboard';

const defaultState = {
  isLoading: false,
  articles: {},
};

const dashboard = (state = defaultState, action) => {
  switch(action.type) {
    case types.GET_ARTICLES_REQUEST_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_ARTICLES_REQUEST_SUCCESS: {
      let articles = {};
      
      action.data.forEach((article) => { articles = { ...articles, [article._id]: article } });

      return {
        ...state,
        articles,
        isLoading: false,
      };
    }
    case types.GET_ARTICLES_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case types.RESET_DATA:
      return defaultState;
    default:
      return state;
  }
}

export default dashboard;