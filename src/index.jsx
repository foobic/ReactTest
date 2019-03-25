import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store';
import './index.css';

const store = configureStore();
const AppContext = React.createContext();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store} context={AppContext}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById('root'),
);
