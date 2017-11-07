import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

import './QuestionBuilder.css';
import Question from './Question/Question';

const QuestionBuilder = ({
  title,
  answerType,
  level,
  type,
  theme,
  answers,
  trueAnswer,
  onChange,
  onTrueAnswerChange,
  onSave,
}) => (
  <div className="question-builder">
    <Toolbar>
      <ToolbarGroup>
        <ToolbarTitle text="Question Builder" />
      </ToolbarGroup>
      <ToolbarGroup lastChild={true}>
        {
          onSave && (
            <RaisedButton
              label="Save"
              primary={true}
              onClick={onSave}
            />
          )
        }
      </ToolbarGroup>
    </Toolbar>

    <Question
      title={title}
      answerType={answerType}
      level={level}
      type={type}
      theme={theme}
      answers={answers}
      trueAnswer={trueAnswer}
      onChange={onChange}
      onTrueAnswerChange={onTrueAnswerChange}
    />
  </div>
);

export default QuestionBuilder;
