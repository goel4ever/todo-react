import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './components/TaskList';
import data from '../data/sample';

// import App from './temp/App';

// ReactDOM.render(<App text="Hello World!"/>, document.getElementById('app'));

ReactDOM.render(<TaskList data={data.agoel.taskList}/>, document.getElementById('root'));
