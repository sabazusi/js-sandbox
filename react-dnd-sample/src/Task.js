import React from 'react';
import { DragSource } from 'react-dnd';

const spec = {
  beginDrag(props) {
    return {
      name: props.name,
    };
  },
};

@DragSource(props => props.type, spec, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export default class Task extends React.Component {
  render() {
    const { name, isDragging, connectDragSource } = this.props;
    const backgroundColor = isDragging ? '#9992f1' : '#adadad';
    return connectDragSource(
      <div style={{width: 100, height: 100, backgroundColor}}>
        {name}
      </div>
    );
  }
}
