import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';

import EditableField from '../../EditableField/EditableField';

const QuestionAnswer = ({ type, name, value, isChecked, onAnswerChange }) => (
  <div className="question__answer">
    <Checkbox
      checked={isChecked}
      labelStyle={{ display: 'none' }}
      style={{ width: 'auto' }}
    />
    <EditableField input={{ value, name }} onSubmit={onAnswerChange}>{value}</EditableField>
  </div>
);

export default QuestionAnswer;