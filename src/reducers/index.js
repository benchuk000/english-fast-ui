import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';

import auth from './auth';
import currentQuiz from './currentQuiz';
import headerModal from './headerModal';
import questionBuilder from './questionBuilder';
import articleBuilder from './articleBuilder';
import manage from './manage';
import dashboard from './dashboard';
import skillsTest from './skillsTest';

const rootReducer = combineReducers({
  toastr,
  auth,
  currentQuiz,
  headerModal,
  questionBuilder,
  articleBuilder,
  manage,
  dashboard,
  skillsTest,
});

export default rootReducer;