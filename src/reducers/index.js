import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';

import auth from './auth';
import currentQuiz from './currentQuiz';
import headerModal from './headerModal';
import manageUsers from './manageUsers';
// import quizBuilder from './quizBuilder';
import questionBuilder from './questionBuilder';
import manage from './manage';

const rootReducer = combineReducers({
  toastr,
  auth,
  currentQuiz,
  headerModal,
  manageUsers,
  // quizBuilder,
  questionBuilder,
  manage,
});

export default rootReducer;