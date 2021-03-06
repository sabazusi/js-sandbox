import React from 'react';
import { DropTarget } from 'react-dnd';
import Task from './Task';

const spec = {
  drop(props, monitor) {
    props.onDrop(monitor.getItem());
  },
};

@DropTarget(props => props.accepts, spec, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
export default class Phase extends React.Component {
  render() {
    const { name, isOver, canDrop, connectDropTarget, tasks } = this.props;
    const isActive = isOver && canDrop;

    return connectDropTarget(
      <div style={{minWidth: 300, minHeight: 600, backgroundColor: isActive ? '#d99563' : '#fff'}}>
        {name}
        <div>
          {
            tasks.map(({id, name, type}, index) => (
              <Task
                id={id}
                name={name}
                type={type}
                key={index}
              />
            ))
          }
        </div>
      </div>
    );
  }
}
