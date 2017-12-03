import { List, ListItem } from 'material-ui/List';

import QuizAnswers from '../QuizAnswers/QuizAnswers';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';

const Quiz = ({
  data,
  currentQuiestionIndex,
  questionTitle,
  answers,
  type,
  currentAnswer,
  response,
  
  onChange,
  onCheck,
  onDrop,
  onDropEnd,
  onNextButtonClick,
  onPrevButtonClick,
  isQuestionFirst,
  isQuestionLast
}) => (
  <div>
    <div>
        <h3>{`${currentQuiestionIndex + 1}. ${questionTitle}`}</h3>
    </div>

    <QuizAnswers
      answers={answers.length ? answers : []}
      data={data ? data : []}
      type={type}
      onChange={onChange}
      onCheck={onCheck}
      onDrop={onDrop}
      onDropEnd={onDropEnd}
      currentAnswer={currentAnswer}
    />

    <div>
        <RaisedButton
          label={response ? 'Готово' : 'Назад'}
          secondary={true}
          onClick={onPrevButtonClick}
          disabled={isQuestionFirst() || !response}
        />
        <RaisedButton
          label={isQuestionLast() ? 'Отправить' : 'Вперед'}
          primary={true}
          onClick={onNextButtonClick}
          disabled={currentAnswer.length === 0 || !!response}
        />
    </div>

    {
      response && (
        <div>
          {`Количесвто правильных ответов: ${response.result.filter(item => item.isCorrect).length}`}
        </div>
      )
    }
  </div>
);

export default Quiz;