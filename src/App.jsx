import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';

class App extends Component {
  state: {};

  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
