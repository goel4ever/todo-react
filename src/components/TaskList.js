import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
  render() {
    const task = {
      taskName: 'TaskHeading',
      taskDescription: 'Task details goes here...',
      taskStatus: 'OPEN',
      creationDate: '20161201'
    };

    return (
      <div>
        <Task data={task}/>
        <Task data={task}/>
        <Task data={task}/>
      </div>
    );
  }
}

export default TaskList;
