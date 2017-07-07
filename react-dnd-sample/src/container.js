import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Phase from './Phase';
import Task from './Task';
import Modal from 'react-modal';

const modalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.75)'
  },
  content : {
    position                   : 'absolute',
    width: 100,
    height: 100,
    margin: 'auto',
    border                     : 'none',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
    backgroundColor   : 'rgba(0, 0, 0, 0)'
  }
};

@DragDropContext(HTML5Backend)
export default class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpenModal: false,
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
    this.setState({isOpenModal: true});
    setTimeout(() => {
      const tasks = this.state.tasks.map((task) => task.id === item.id ? Object.assign({}, task, {type}) : task);
      this.setState({tasks, isOpenModal: false});
    }, 1000);
  }

  render() {
    const {phases, tasks, isOpenModal} = this.state;
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Modal
          isOpen={isOpenModal}
          style={modalStyle}
        />
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
