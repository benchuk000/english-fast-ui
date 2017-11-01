import React from 'react';
import { List } from 'material-ui/List';

import * as answerTypes from '../../../constants/answerTypes';
import QiestionsToolListItem from '../QiestionsToolListItem/QiestionsToolListItem';

import './QuestionsToolList.css';

const QuestionTypes = [
  {
    primaryText: 'Single Answer',
    data: {
      type: answerTypes.SINGLE_CHOICE,
    }
  },
  {
    primaryText: 'Multiple Answer',
    data: {
      type: answerTypes.MULTI_CHOICE,
    }
  },
  {
    primaryText: 'Drag and drop',
    data: {
      type: answerTypes.DRAG_AND_DROP,
    }
  }
];

const QuestionsToolList = ({ }) => (
  <div className="questions-list grid-column-noGutter">
    <List>
      { QuestionTypes.map(type => <QiestionsToolListItem {...type} key={type.data.type} />)}
    </List>
  </div>
);

export default QuestionsToolList;