import React, { Component } from 'react';
import TestComponent from '../components/TestComponent';

class App extends Component {
  state: {};

  render() {
    return (
      <div className="App">
        <i className="material-icons">accessibility</i>
        <TestComponent />
      </div>
    );
  }
}

export default App;
