import * as answerTypes from '../../constants/answerTypes';

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import CardDraggable from '../../containers/CardDraggable/CardDraggable';
import CardTarget from '../../containers/CardTarget/CardTarget';
import Checkbox from 'material-ui/Checkbox';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import React from 'react';

const QuizAnswers = ({ answers, data, type, onChange, onCheck, onDrop, onDropEnd, currentAnswer}) => {
    let content = null;

    switch (type) {
        case answerTypes.SINGLE_CHOICE:
            content = <RadioButtonGroup
                    name="answer"
                    onChange={onChange}
                    valueSelected={currentAnswer[0]}
            >
                {
                    answers.map((answer, index) => (
                        <RadioButton key={index}
                            value={index}
                            label={answer.title}
                        />
                    ))
                }
            </RadioButtonGroup>
            break;
        case answerTypes.MULTI_CHOICE:
            content = (<div>
                {
                    answers.map((answer, index) => (
                        <Checkbox key={index}
                            label={answer.title}
                            value={index}
                            onCheck={onCheck}
                            checked={currentAnswer.indexOf(index) >= 0}
                        />
                    ))
                }
            </div>);
            break;
        case answerTypes.DRAG_AND_DROP:
            content = (
                <div>
                    <div>
                        {
                            data.map((item) => (
                                <div key={item.id}>
                                    <CardDraggable
                                        canDrag={currentAnswer.indexOf(item.id) < 0}
                                        id={item.id}
                                        data={item}
                                    />
                                </div>
                            ))
                        }
                    </div>

                    <div>
                        {
                            answers.map((answer, index) => (
                                <div key={index}>
                                    <h4>{answer}</h4>
                                    <CardTarget
                                        onDrop={onDrop}
                                        onDropEnd={onDropEnd}
                                        id={answer.id}
                                        data={data[currentAnswer[answer.id]]}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
            break;

    }

    return (
        <div>
            { content }
        </div>
    )

};

export default DragDropContext(HTML5Backend)(QuizAnswers);