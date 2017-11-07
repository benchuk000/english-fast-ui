import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';

import EditableField from '../../EditableField/EditableField';

const QuestionAnswer = ({ type, name, answer, isChecked, onAnswerChange, onTrueAnswerChange }) => (
  <div className="question__answer">
    <Checkbox
      onCheck={(event, value) => onTrueAnswerChange(value)}
      checked={answer.isCorrect}
      labelStyle={{ display: 'none' }}
      style={{ width: 'auto' }}
    />
    <EditableField
      input={{ value: answer.title, name }}
      onSubmit={({ name, value }) => onAnswerChange({ name, value: { ...answer, title: value, }})}
    >
      {answer.title}
    </EditableField>
  </div>
);

export default QuestionAnswer;