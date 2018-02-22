import React from 'react';
import QuizAnswers from '../QuizAnswers/QuizAnswers';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import './Quiz.css';

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
  <div className="quiz-container">
    <Card>
      <CardHeader
        title={`${currentQuiestionIndex + 1}. ${questionTitle}`}
      />
      
      <CardText>
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
      </CardText>

      {
        response && (
          <CardText>
            {`Количесвто правильных ответов: ${response.result.filter(item => item.isCorrect).length}`}
          </CardText>
        )
      }

      <CardActions>
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
      </CardActions>
    </Card>
  </div>
);

export default Quiz;