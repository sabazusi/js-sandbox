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
        {accepts: ['NOTHING'], name: 'todo'},
        {accepts: ['TODO'], name: 'doing'},
        {accepts: ['TODO', 'DOING'], name: 'done'}
      ],
      tasks: [
        {name: 'first task', type: 'TODO'},
        {name: 'second task', type: 'TODO'},
        {name: 'third task', type: 'TODO'},
      ]
    };
  }
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex'}}>
          {
            this.state.phases.map(({accepts, name}, index) => (
              <Phase
                accepts={accepts}
                name={name}
                key={index}
                onDrop={() => alert('dropped')}
              />
            ))
          }
        </div>
        <div style={{display: 'flex'}}>
          {
            this.state.tasks.map(({name, type}, index) => (
              <Task
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
