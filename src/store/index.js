import { createStore, combineReducers } from 'redux';
import HomeReducer from './Home/reducers';

const reducers = combineReducers({
  home: HomeReducer,
});

const configureStore = preloadedState => createStore(reducers, preloadedState);

export default configureStore;
