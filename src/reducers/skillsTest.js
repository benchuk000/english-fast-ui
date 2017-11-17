import * as actions from '../actions/skillsTest';

const defaultState = {
  params: {},
};

const skillsTest = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SET_PARAMS:
      return {
        ...state,
        params: action.params,
      }
    default:
      return state;
  }
};

export default skillsTest;