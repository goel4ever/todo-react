import React from 'react';

class Task extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.data.taskName}</h3>
        <p>{this.props.data.taskDescription}</p>
        <button>Edit</button>
        <button>Delete</button>
        <hr/>
      </div>
    );
  }
}

export default Task;