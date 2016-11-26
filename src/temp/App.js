import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      red: 0,
      green: 0,
      blue: 0
    };
    this.update = this.update.bind(this);
  }
  update(e) {
    this.setState({
      text: e.target.value,
      red: ReactDOM.findDOMNode(this.refs.red).value,
      green: ReactDOM.findDOMNode(this.refs.green).value,
      blue: 0
    });
  }
  render() {
    return (
      <div>
        <Slider ref="red" update={this.update}></Slider>
        {this.state.red}
        <hr/>
        <Slider ref="green" update={this.update}></Slider>
        {this.state.green}
      </div>
    )
  }
}

class Slider extends React.Component {
  render() {
    return (
      <input type="range"
             min="0"
             max="255"
             onChange={this.props.update}/>
    )
  }
}

const Widget = (props) => {
  return (
    <div>
      <input type="text" onChange={props.update}/>
      <h1>{props.text}</h1>
    </div>
  )
};

App.propTypes = {
  text: React.PropTypes.string.isRequired,
  val: React.PropTypes.string
};

export default App;