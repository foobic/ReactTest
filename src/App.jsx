import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';
import {db, auth} from './firebase/main'


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
