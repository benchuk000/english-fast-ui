import React, { PropTypes } from 'react';

import Card from '../../components/Card/Card';
import { DragSource } from 'react-dnd';

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props, monitor, component) {
    return {
        data: props.data
    };
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      // You can check whether the drop was successful
      // or if the drag ended but nobody handled the drop
      return;
    }
  },
  canDrag(props, monitor) {
    return !!props.data && props.canDrag;
  },
  isDragging(props, monitor, component) {
    return props.data && props.data.id === monitor.getItem().data.id;
  }
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const propTypes = {
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
};

class CardDraggableContainer extends React.Component {
  render() {
    const { isDragging, connectDragSource, data, canDrag } = this.props;

    return connectDragSource(
      <Card data={data} isDragging={isDragging} isEnabled={canDrag}/>
    );
  }
}

CardDraggableContainer.propTypes = propTypes;

// Export the wrapped component:
export default DragSource('CARD', cardSource, collect)(CardDraggableContainer);