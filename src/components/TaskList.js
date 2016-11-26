import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
  render() {
    const rows = [];
    this.props.data.forEach((task) => {
      rows.push(<Task key={task.uniqueId} data={task}/>);
    });

    return (
      <div>
        {rows}
      </div>
    );
  }
}

export default TaskList;
