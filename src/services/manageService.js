import * as TYPE from '../constants/types';
import * as userService from './userService';
import * as questionService from './questionService';
import * as articleService from './articleService';

export const getItems = (type) => {
  switch(type) {
    case TYPE.USERS:
      return userService.getUsers()
    case TYPE.QUESTIONS:
      return questionService.getQuestions()
    case TYPE.ARTICLES:
      return articleService.getArticles()
  }
};

export const removeItem = (type, id) => {
  switch(type) {
    case TYPE.USERS:
      return userService.removeUser(id)
    case TYPE.QUESTIONS:
      return questionService.removeQuestion(id)
    case TYPE.ARTICLES:
      return articleService.removeArticle(id)
  }
}