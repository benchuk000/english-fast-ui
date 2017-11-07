import { toastr } from 'react-redux-toastr';
import { 
  getQuestion,
  createQuestion as create,
  updateQuestion as update,
} from '../services/questionService';

export const QUESTION_REQUEST_START = 'QUESTION_REQUEST_START';
export const QUESTION_REQUEST_SUCCESS = 'QUESTION_REQUEST_SUCCESS';
export const QUESTION_REQUEST_FAIL = 'QUESTION_REQUEST_FAIL';

export const RESET_QUESTION = 'RESET_QUESTION'; 
export const UPDATE_QUESTION = 'UPDATE_QUESTION';

export const startQuestionRequest = () => ({ type: QUESTION_REQUEST_START });

export const questionRequestSuccess = data => ({ 
  type: QUESTION_REQUEST_SUCCESS,
  data
});

export const questionRequestFail = data => ({ type: QUESTION_REQUEST_FAIL });

export const fetchQuestion = id => dispatch => {
  dispatch(startQuestionRequest());
  getQuestion(id)
    .then(({ data }) => dispatch(questionRequestSuccess(data)))
    .catch(() => dispatch(questionRequestFail()));
}

export const saveQuestion = () => (dispatch, getState) => {
  dispatch(startQuestionRequest());

  const data = getState().questionBuilder.data;

  if (data._id) {
    update(data._id, data)
      .then(({ data }) => {
        dispatch(questionRequestSuccess(data));
        toastr.success('Question has been updated');
      })
      .catch(() => dispatch(questionRequestFail()));
  } else {
    create(data)
      .then(({ data }) => {
        dispatch(questionRequestSuccess(data));
        toastr.success('Question has been created');
      })
      .catch(() => dispatch(questionRequestFail()));
  }
}

export const resetQuestion = () => ({ type: RESET_QUESTION });

export const updateQuestion = data => ({
  type: UPDATE_QUESTION,
  data,
});