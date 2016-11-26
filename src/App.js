import React from 'react';
import TaskList from './components/TaskList'
import sample from '../data/sample';

class App extends React.Component {
  constructor() {
    super();
    this.counter = 5;
    this.state = {
      data: sample.agoel.taskList
    };
    this.update = this.update.bind(this);
  }
  update() {
    let test = this.state.data;
    test.push({
      uniqueId: this.counter++,
      taskName: 'New Task',
      taskDescription: 'Sample description . . .',
      taskStatus: 'OPEN'
    });

    this.setState({
      data: test
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.update}>Add New Task</button>
        <TaskList data={this.state.data}/>
      </div>
    );
  }
}

export default App;