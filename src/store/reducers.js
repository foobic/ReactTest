import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import HomeReducer from './Home/reducers';
import AuthReducer from './Auth/reducers';
import UploadReducer from './Upload/reducers';

export default history =>
  combineReducers({
    router: connectRouter(history),
    home: HomeReducer,
    auth: AuthReducer,
    upload: UploadReducer,
  });
