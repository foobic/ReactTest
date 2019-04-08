import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { SnackbarProvider } from 'notistack';
import { MuiThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';
import App from './App';
import configureStore from './store';
import { Firebase, FirebaseContext } from './firebase';
import history from './history';
import './index.css';
import theme from './assets/theme';
import Notifier from './components/Notifier';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <FirebaseContext.Provider value={new Firebase()}>
          <MuiThemeProvider theme={theme}>
            <SnackbarProvider
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}>
              <App store={store} />
              <Notifier />
            </SnackbarProvider>
          </MuiThemeProvider>
        </FirebaseContext.Provider>
      </ConnectedRouter>
    </Provider>,

    document.getElementById('root'),
  );
};

render();

if (module.hot) module.hot.accept('./App', () => render());

serviceWorker.register();
