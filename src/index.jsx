import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from './App';
import configureStore from './store';
import './index.css';
import { Firebase, FirebaseContext } from './firebase';
import theme from './assets/theme';

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <FirebaseContext.Provider value={new Firebase()}>
          <App store={store} />
        </FirebaseContext.Provider>
      </Provider>
    </MuiThemeProvider>
  </BrowserRouter>,

  document.getElementById('root'),
);
