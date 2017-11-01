import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';

import './QuestionsList.css';
import Question from '../Question/Question';

const squareTarget = {
  drop(props, monitor, component) {
    let dropData = monitor.getItem().data;

    props.onDrop(dropData);
  }
};

function collectTarget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

const QuestionsList = ({ questions, connectDropTarget, onChange }) => connectDropTarget(
  <div className="quiz-questions-list">
    {
      questions.map((question, index) => (
        <Question {...question} key={index} onChange={(data) => onChange(index, data)}/>
      ))
    }
    {
      !questions.length && 'There are no questions'
    }
  </div>
);

export default DropTarget('CARD', squareTarget, collectTarget)(QuestionsList)