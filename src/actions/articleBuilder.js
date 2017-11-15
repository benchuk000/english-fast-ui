import { toastr } from 'react-redux-toastr';
import { 
  getArticle,
  createArticle as create,
  updateArticle as update,
} from '../services/articleService';

export const ARTICLE_REQUEST_START = 'ARTICLE_REQUEST_START';
export const ARTICLE_REQUEST_SUCCESS = 'ARTICLE_REQUEST_SUCCESS';
export const ARTICLE_REQUEST_FAIL = 'ARTICLE_REQUEST_FAIL';

export const RESET_ARTICLE = 'RESET_ARTICLE'; 
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';

export const startArticleRequest = () => ({ type: ARTICLE_REQUEST_START });

export const articleRequestSuccess = data => ({ 
  type: ARTICLE_REQUEST_SUCCESS,
  data
});

export const articleRequestFail = data => ({ type: ARTICLE_REQUEST_FAIL });

export const fetchArticle = id => dispatch => {
  dispatch(startArticleRequest());
  getArticle(id)
    .then(({ data }) => dispatch(articleRequestSuccess(data)))
    .catch(() => dispatch(articleRequestFail()));
}

export const saveArticle = () => (dispatch, getState) => {
  dispatch(startArticleRequest());

  const data = getState().articleBuilder.data;

  if (data._id) {
    update(data._id, data)
      .then(({ data }) => {
        dispatch(articleRequestSuccess(data));
        toastr.success('Article has been updated');
      })
      .catch(() => dispatch(articleRequestFail()));
  } else {
    create(data)
      .then(({ data }) => {
        dispatch(articleRequestSuccess(data));
        toastr.success('Article has been created');
      })
      .catch(() => dispatch(articleRequestFail()));
  }
}

export const resetArticle = () => ({ type: RESET_ARTICLE });

export const updateArticle = data => ({
  type: UPDATE_ARTICLE,
  data,
});