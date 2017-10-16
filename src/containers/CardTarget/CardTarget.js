import * as actions from '../../actions/currentQuiz';

import { DragSource, DropTarget } from 'react-dnd';

import Card from '../../components/Card/Card';
import React from 'react';
import { connect } from 'react-redux';

const cardSource = {
    beginDrag(props, monitor, component) {
      return {
          data: props.data,
          fromID: props.id,
      };
    },
    endDrag(props, monitor, component) {
      if (!monitor.didDrop()) {
          // You can check whether the drop was successful
          // or if the drag ended but nobody handled the drop
          return;
        }

        props.onDropEnd(props.data);
    },
    canDrag(props, monitor) {
      return !!props.data;
    },
    isDragging(props, monitor, component) {
      return props.data && props.data.id === monitor.getItem().data.id;
    }
};

const squareTarget = {
  drop(props, monitor, component) {
    let dropData = monitor.getItem().data;
    dropData.answerIndex = props.id;
    dropData.fromID = monitor.getItem().fromID;

    props.onDrop(dropData);
  }
};

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function collectTarget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

class CardTargetContainer extends React.Component {
    render() {
      const { connectDropTarget, connectDragSource, data, isDragging } = this.props;

      return connectDragSource(connectDropTarget(
        <Card data={data} isDragging={isDragging} />
      ));
    }
}

const CardTargetContainerSource = DragSource('CARD', cardSource, collectSource)(CardTargetContainer);
const CardTargetContainerTargetAndSource = DropTarget('CARD', squareTarget, collectTarget)(CardTargetContainerSource)

export default connect()(CardTargetContainerTargetAndSource);