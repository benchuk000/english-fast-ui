import { List, ListItem } from 'material-ui/List';

import QuizAnswers from '../QuizAnswers/QuizAnswers';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';

const Quiz = ({
  name,
  currentQuiestionIndex,
  questionTitle,
  answers,
  data,
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
        <h1>{name}</h1>
    </div>
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
          label={isQuestionLast() && !!response ? 'Reset' :'Back'}
          secondary={true}
          onClick={onPrevButtonClick}
          disabled={isQuestionFirst() && !response}
        />
        <RaisedButton
          label={isQuestionLast() ? 'Submit' : 'Next'}
          primary={true}
          onClick={onNextButtonClick}
          disabled={currentAnswer.length === 0 || !!response}
        />
    </div>

    <div>
        <h3>
            {response ? `Your result is ${this.props.response.result}% !` : ''}
        </h3>
    </div>
  </div>
);

export default Quiz;