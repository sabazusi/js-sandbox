import React from 'react';
import ReactDOM from 'react-dom';
import {SortableContainer, SortableElement, SortableHandle, arrayMove} from 'react-sortable-hoc';

const Handle =SortableHandle(() => <div>ハンドル</div>);
const Task = SortableElement(({value}) => (
  <div style={{
    backgroundColor: '#f2c8ee',
    userSelect: 'none',
    minHeight: 500,
    marginRight: 10,
    display: 'flex',
    flexDirection: 'column'
  }}>
    <Handle />
    <span>{value.name}</span>

  </div>
));
const PhaseList = SortableContainer(({phases}) => {
  return (
    <div style={{
      display: 'flex',
      backgroundColor: '#b2dbdb',
      userSelect: 'none'
    }}>
      {phases.map((value, index) => (
        <Task key={`phase-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});
class MainContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      phases: [
        {name: 'Todo'},
        {name: 'Doing'},
        {name: 'Done'}
      ]
      /**
      tasks: [
        {id: 1, title: 'title-1', description: 'desc-1'},
        {id: 2, title: 'title-2', description: 'desc-2'},
        {id: 3, title: 'title-3', description: 'desc-3'},
        {id: 4, title: 'title-4', description: 'desc-4'},
        {id: 5, title: 'title-5', description: 'desc-5'},
        {id: 6, title: 'title-6', description: 'desc-6'},
        {id: 7, title: 'title-7', description: 'desc-7'},
        {id: 8, title: 'title-8', description: 'desc-8'},
        {id: 9, title: 'title-9', description: 'desc-9'},
        {id: 10, title: 'title-10', description: 'desc-10'}
      ]
      */
    };
  }

  onDraggingEnded = ({oldIndex, newIndex}) => {
    this.setState({
      phases: arrayMove(this.state.phases, oldIndex, newIndex)
    });
  };

  render() {
    return (
      <PhaseList
        axis='x'
        phases={this.state.phases}
        onSortEnd={this.onDraggingEnded}
        useDragHandle
      />
    );
  }
}

ReactDOM.render(<MainContainer />, document.querySelector('#root'));
