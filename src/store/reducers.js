import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import PicturesReducer from './Pictures/reducers';
import AuthReducer from './Auth/reducers';
import UIReducer from './UI/reducers';

export default history =>
  combineReducers({
    router: connectRouter(history),
    ui: UIReducer,
    pictures: PicturesReducer,
    auth: AuthReducer,
  });
