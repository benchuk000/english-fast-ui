import React from 'react';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import RemoveIcon from 'material-ui/svg-icons/content/remove';

import './Question.css';
import * as LEVEL_TYPE from '../../../constants/levelTypes';
import * as ENGLISH_TYPE from '../../../constants/englishTypes';
import * as answerTypes from '../../../constants/answerTypes';
import EditableField from '../../EditableField/EditableField';
import {
  CharacteristicField,
  CharacteristicKey,
  CharacteristicValue
} from '../../CharacteristicField/CharacteristicField';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';

const ANSWER_TYPE = {
  [answerTypes.SINGLE_CHOICE]: 'Signle choice',
  [answerTypes.MULTI_CHOICE]: 'Multi choice',
  [answerTypes.DRAG_AND_DROP]: 'Drag and drop',
};

const Question = ({ title, answerType, level, type, theme, answers, trueAnswer, onChange, onTrueAnswerChange }) => (
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
      <CharacteristicKey>Answer Type</CharacteristicKey>
      <CharacteristicValue>
        <EditableField
          input={{ 
            value: answerType,
            name: 'answerType',
            type: 'select',
            options: [
              {
                title: ANSWER_TYPE[answerTypes.SINGLE_CHOICE],
                value: answerTypes.SINGLE_CHOICE
              },
              {
                title: ANSWER_TYPE[answerTypes.MULTI_CHOICE],
                value: answerTypes.MULTI_CHOICE
              },
              {
                title: ANSWER_TYPE[answerTypes.DRAG_AND_DROP],
                value: answerTypes.DRAG_AND_DROP
              }
            ],
          }}
          onSubmit={onChange}
        >
          {ANSWER_TYPE[answerType]}
        </EditableField>
      </CharacteristicValue>
    </CharacteristicField>

    <CharacteristicField>
      <CharacteristicKey>Level</CharacteristicKey>
      <CharacteristicValue>
        <EditableField
          input={{ 
            value: level,
            name: 'level',
            type: 'select',
            options: [
              {
                title: LEVEL_TYPE.ELEMENTARRY,
                value: LEVEL_TYPE.ELEMENTARRY
              },
              {
                title: LEVEL_TYPE.PRE_INTERMEDIATE,
                value: LEVEL_TYPE.PRE_INTERMEDIATE
              },
              {
                title: LEVEL_TYPE.INTERMEDIATE,
                value: LEVEL_TYPE.INTERMEDIATE
              }
            ],
          }}
          onSubmit={onChange}
        >
          {level}
        </EditableField>
      </CharacteristicValue>
    </CharacteristicField>

    <CharacteristicField>
      <CharacteristicKey>Type</CharacteristicKey>
      <CharacteristicValue>
        <EditableField
          input={{ 
            value: type,
            name: 'type',
            type: 'select',
            options: [
              {
                title: ENGLISH_TYPE.GRAMMAR,
                value: ENGLISH_TYPE.GRAMMAR
              },
              {
                title: ENGLISH_TYPE.READING,
                value: ENGLISH_TYPE.GRAMMAR.READING
              },
              {
                title: ENGLISH_TYPE.LISTENING,
                value: ENGLISH_TYPE.LISTENING
              }
            ],
          }}
          onSubmit={onChange}
        >
          {type}
        </EditableField>
      </CharacteristicValue>
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
                answer={answer}
                onTrueAnswerChange={value => onTrueAnswerChange(index, value)}
                onAnswerChange={({ value }) => onChange({
                  name: 'answers',
                  value: [...answers.slice(0, index), value, ...answers.slice(index + 1)]
                })}
              />
            </div>
          ))
        }

        <IconButton
          onClick={() => onChange({ name: 'answers', value: [ ...answers, { title: `Answer ${answers.length + 1}` } ]})}
        >
          <AddIcon/>
        </IconButton>
      </CharacteristicValue>
    </CharacteristicField>
  </div>
);

export default Question;