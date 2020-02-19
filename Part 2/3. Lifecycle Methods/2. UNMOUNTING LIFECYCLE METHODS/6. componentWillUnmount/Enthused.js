import React from 'react';

export class Enthused extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.addText('!');
    }, 15);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }
  render() {
    return (
      <button onClick={this.props.toggle}>
        Stop!
      </button>
    );
  }
}