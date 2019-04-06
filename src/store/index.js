import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import createRootReducer from './reducers';
import history from '../history';

export const configureStore = preloadedState =>
  createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
      ),
    ),
  );
