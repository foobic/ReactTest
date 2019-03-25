import { createStore } from 'redux';
import reducers from './reducers';

const configureStore = preloadedState => createStore(reducers, preloadedState);

export default configureStore;
