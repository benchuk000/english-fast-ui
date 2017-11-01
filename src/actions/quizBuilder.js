import { toastr } from 'react-redux-toastr';
import { 
  getTest,
  createTest,
  updateTest,
} from '../services/testService';

export const QUIZ_REQUEST_START = 'QUIZ_REQUEST_START';
export const QUIZ_REQUEST_SUCCESS = 'QUIZ_REQUEST_SUCCESS';
export const QUIZ_REQUEST_FAIL = 'QUIZ_REQUEST_FAIL';

export const RESET_QUIZ = 'RESET_QUIZ'; 
export const UPDATE_QUIZ = 'UPDATE_QUIZ';

export const ADD_QUIZ_QUESTION = 'ADD_QUIZ_QUESTION';
export const UPDATE_QUIZ_QUESTION = 'UPDATE_QUIZ_QUESTION';
export const REMOVE_QUIZ_QUESTION = 'REMOVE_QUIZ_QUESTION';

export const startQuizRequest = () => ({ type: QUIZ_REQUEST_START });

export const quizRequestSuccess = data => ({ 
  type: QUIZ_REQUEST_SUCCESS,
  data
});

export const quizRequestFail = data => ({ type: QUIZ_REQUEST_FAIL });

export const fetchQuiz = id => dispatch => {
  dispatch(startQuizRequest());
  getTest(id)
    .then(({ data }) => dispatch(quizRequestSuccess(data)))
    .catch(() => dispatch(quizRequestFail()));
}

export const saveQuiz = () => (dispatch, getState) => {
  dispatch(startQuizRequest());

  const { isFetching, ...data } = getState().quizBuilder;

  if (data._id) {
    updateTest(data._id, data)
      .then(({ data }) => {
        dispatch(quizRequestSuccess(data));
        toastr.success(`${data.name} has been saved`);
      })
      .catch(() => dispatch(quizRequestFail()));
  } else {
    createTest(data)
      .then(({ data }) => {
        dispatch(quizRequestSuccess(data));
        toastr.success(`${data.name} has been saved`);
      })
      .catch(() => dispatch(quizRequestFail()));
  }
}

export const resetQuiz = () => ({ type: RESET_QUIZ });

export const updateQuiz = data => ({
  type: UPDATE_QUIZ,
  data,
});

export const addQuizQuestion = (question = {}) => ({
  type: ADD_QUIZ_QUESTION,
  question,
});

export const updateQuizQuestion = (index, data) => ({
  type: UPDATE_QUIZ_QUESTION,
  index,
  data,
});

export const removeQuizQuestion = index => ({
  type: REMOVE_QUIZ_QUESTION,
  index,
});