import React, { Component } from 'react';

import './App.css';
import firebase from './firebase/main'
import Button from '@material-ui/core/Button';


class App extends Component {
  state: {};

  render() {
    return (
      <div className="App">
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default App;
