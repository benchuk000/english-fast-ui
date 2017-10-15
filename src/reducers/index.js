import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';

import auth from './auth';
import currentQuiz from './currentQuiz';
import headerModal from './headerModal';

const rootReducer = combineReducers({
  toastr,
  auth,
  currentQuiz,
  headerModal
});

export default rootReducer;