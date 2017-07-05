import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Phase from './Phase';
import Task from './Task';

@DragDropContext(HTML5Backend)
export default class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      phases: [
        {accepts: ['NOTHING'], name: 'todo', type: 'TODO'},
        {accepts: ['TODO'], name: 'doing', type: 'DOING'},
        {accepts: ['TODO', 'DOING'], name: 'done', type: 'DONE'}
      ],
      tasks: [
        {id: 1, name: 'first task', type: 'TODO'},
        {id: 2, name: 'second task', type: 'TODO'},
        {id: 3, name: 'third task', type: 'TODO'},
      ]
    };
  }

  updateItem(item, type) {
    const tasks = this.state.tasks.map((task) => task.id === item.id ? Object.assign({}, task, {type}) : task);
    this.setState({tasks});
  }

  render() {
    const {phases, tasks} = this.state;
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex'}}>
          {
            phases.map(({accepts, name, type}, index) => (
              <Phase
                accepts={accepts}
                name={name}
                key={index}
                tasks={tasks.filter(task => task.type === type)}
                onDrop={(item) => this.updateItem(item, type)}
              />
            ))
          }
        </div>
      </div>
    );
  }
}
