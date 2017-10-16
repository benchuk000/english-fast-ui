import * as types from '../actions/auth';

const defaultState = {
  currentUser: null,
  isUserLoading: false
} 

const auth = (state = defaultState, action) => {
  switch(action.type) {
    case types.SET_CURRENT_USER: 
      return Object.assign({}, state, { currentUser: action.user });
    case types.START_USER_LOADING:
      return Object.assign({}, state, { isUserLoading: true });
    case types.FINISH_USER_LOADING:
      return Object.assign({}, state, { isUserLoading: false });
    default: 
      return state;
  }
}

export default auth;