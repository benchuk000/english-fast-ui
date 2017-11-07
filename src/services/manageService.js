import * as TYPE from '../constants/types';
import * as userService from './userService';
import * as questionService from './questionService';

export const getItems = (type) => {
  switch(type) {
    case TYPE.USERS:
      return userService.getUsers()
    case TYPE.QUESTIONS:
      return questionService.getQuestions()
  }
};

export const removeItem = (type, id) => {
  switch(type) {
    case TYPE.USERS:
      return userService.removeUser(id)
    case TYPE.QUESTIONS:
      return questionService.removeQuestion(id)
  }
}