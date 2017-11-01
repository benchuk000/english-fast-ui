import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';

import QuestionsList from './QuestionsList/QuestionsList';
import QuestionsToolList from './QuestionsToolList/QuestionsToolList';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import './QuizBuilder.css';
import {
  CharacteristicField,
  CharacteristicKey,
  CharacteristicValue
} from '../CharacteristicField/CharacteristicField';
import EditableField from '../EditableField/EditableField';

const QuizBuilder = ({
  name,
  isSkillsTest,
  questions = [],
  onDrop,
  onDropEnd,
  onChange,
  onQuestionChange,
  onSave
}) => (
  <div>
    <Toolbar>
      <ToolbarGroup>
        <ToolbarTitle text={name}/>
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

    <div className="grid">
      <div className="col-9">
        <div className="quiz-data">
          <CharacteristicField>
            <CharacteristicKey>Name</CharacteristicKey>
            <CharacteristicValue>
              <EditableField input={{ name: 'name', value: name }} onSubmit={onChange}>{name}</EditableField>
            </CharacteristicValue>
          </CharacteristicField>
          <CharacteristicField>
            <CharacteristicKey>Skills Test</CharacteristicKey>
            <CharacteristicValue>
              <Checkbox
                checked={isSkillsTest}
                onCheck={(event, isChecked) => onChange({ name: 'isSkillsTest', value: isChecked })}
              />
            </CharacteristicValue>
          </CharacteristicField>

          <CharacteristicField>
            <QuestionsList
              onDrop={onDrop}
              onDropEnd={onDropEnd}
              questions={questions}
              onChange={onQuestionChange}
            />
          </CharacteristicField>
        </div>
      </div>

      <div className="col-3">
        <QuestionsToolList />
      </div>
    </div>
  </div>
);

export default DragDropContext(HTML5Backend)(QuizBuilder);