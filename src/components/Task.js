import React from 'react';

class Task extends React.Component {
  render() {
    return (
      <div>
        <h3>Task Heading</h3>
        <p>Task details to go here...</p>
        <button>Edit</button>
        <button>Delete</button>
        <hr/>
      </div>
    );
  }
}

export default Task;