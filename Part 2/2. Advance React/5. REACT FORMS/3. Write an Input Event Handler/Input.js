import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
  constructor(props){
    super(props);
    this.state = {userInput: ""};
    
  }
  
  handleUserInput(e){
    this.setState({
      userInput: e.target.value
    });
  }
  
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} />
        <h1>I am an {this.state.userInput}.</h1>
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);