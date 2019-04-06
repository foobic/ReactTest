import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { MuiThemeProvider } from '@material-ui/core/styles';
import history from './history';
import App from './App';
import { configureStore } from './store';
import './index.css';
import { Firebase, FirebaseContext } from './firebase';
import theme from './assets/theme';
import { SnackbarProvider } from 'notistack';

const store = configureStore();

ReactDOM.render(
  // <BrowserRouter>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <FirebaseContext.Provider value={new Firebase()}>
        <MuiThemeProvider theme={theme}>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}>
            <App store={store} />
          </SnackbarProvider>
        </MuiThemeProvider>
      </FirebaseContext.Provider>
    </ConnectedRouter>
  </Provider>,
  // </BrowserRouter>,

  document.getElementById('root'),
);
