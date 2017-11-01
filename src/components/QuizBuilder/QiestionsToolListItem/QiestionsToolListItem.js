import React from 'react';
import { ListItem } from 'material-ui/List';
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
    return true;
  },
  isDragging(props, monitor, component) {
    return true;
    // return props.data && props.data.id === monitor.getItem().data.id;
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

const DraggableListItem = props => props.connectDragSource(
  <div>
    {props.primaryText}
  </div>
);

export default DragSource('CARD', cardSource, collect)(DraggableListItem);