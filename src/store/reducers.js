import { combineReducers } from 'redux';
import HomeReducer from './Home/reducers';

export default combineReducers({
  home: HomeReducer,
});
