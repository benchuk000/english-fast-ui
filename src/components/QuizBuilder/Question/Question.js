import React from 'react';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import RemoveIcon from 'material-ui/svg-icons/content/remove';

import './Question.css';
import * as answerTypes from '../../../constants/answerTypes.js';
import EditableField from '../../EditableField/EditableField';
import {
  CharacteristicField,
  CharacteristicKey,
  CharacteristicValue
} from '../../CharacteristicField/CharacteristicField';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';

const TYPES_VALUE = {
  [answerTypes.SINGLE_CHOICE]: 'Signle Choice',
  [answerTypes.MULTI_CHOICE]: 'Multiple Choice',
  [answerTypes.DRAG_AND_DROP]: 'Drag and Drop',
};

const Question = ({ title, level, type, theme, answers, trueAnswer, onChange }) => (
  <div className="question">
    <CharacteristicField>
      <CharacteristicKey>Title</CharacteristicKey>
      <CharacteristicValue>
        <EditableField input={{ value: title, name: 'title' }} onSubmit={onChange}>
          {title}
        </EditableField>
      </CharacteristicValue>
    </CharacteristicField>

    <CharacteristicField>
      <CharacteristicKey>Level</CharacteristicKey>
      <CharacteristicValue>
        <EditableField input={{ value: level, name: 'level' }} onSubmit={onChange}>
          {level}
        </EditableField>
      </CharacteristicValue>
    </CharacteristicField>

    <CharacteristicField>
      <CharacteristicKey>Type</CharacteristicKey>
      <CharacteristicValue>{TYPES_VALUE[type]}</CharacteristicValue>
    </CharacteristicField>

    <CharacteristicField>
      <CharacteristicKey>Theme</CharacteristicKey>
      <CharacteristicValue>
        <EditableField input={{ value: theme, name: 'theme' }} onSubmit={onChange}>
          {theme}
        </EditableField>
      </CharacteristicValue>
    </CharacteristicField>

    <CharacteristicField>
      <CharacteristicKey>Answers</CharacteristicKey>
      <CharacteristicValue>
        {
          answers.map((answer, index) => (
            <div className="question__answer" key={index}>
              <IconButton 
                onClick={() => onChange({
                  name: 'answers',
                  value: [...answers.slice(0, index), ...answers.slice(index + 1)]
                })}
              >
                <RemoveIcon/>
              </IconButton>
              <QuestionAnswer
                key={index}
                type={type}
                name={`${index}`}
                value={answer}
                onAnswerChange={({ value }) => onChange({
                  name: 'answers',
                  value: [...answers.slice(0, index), value, ...answers.slice(index + 1)]
                })}
              />
            </div>
          ))
        }

        <IconButton onClick={() => onChange({ name: 'answers', value: [ ...answers, `Answer ${answers.length + 1}` ]})}>
          <AddIcon/>
        </IconButton>
      </CharacteristicValue>
    </CharacteristicField>
  </div>
);

export default Question;