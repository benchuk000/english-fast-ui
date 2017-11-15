import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';

import auth from './auth';
import currentQuiz from './currentQuiz';
import headerModal from './headerModal';
import manageUsers from './manageUsers';
// import quizBuilder from './quizBuilder';
import questionBuilder from './questionBuilder';
import articleBuilder from './articleBuilder';
import manage from './manage';

const rootReducer = combineReducers({
  toastr,
  auth,
  currentQuiz,
  headerModal,
  manageUsers,
  // quizBuilder,
  questionBuilder,
  articleBuilder,
  manage,
});

export default rootReducer;