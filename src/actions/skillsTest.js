import * as currentQuiz from './currentQuiz';
import * as testService from '../services/testService';

export const getSkillsTest = () => dispatch => {
  testService.getSkillsTest()
    .then(res => dispatch(currentQuiz.setCurrentQuiz(res.data)))
}