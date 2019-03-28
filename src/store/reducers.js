import { combineReducers } from 'redux';
import HomeReducer from './Home/reducers';
import AuthReducer from './Auth/reducers';
import UploadReducer from './Upload/reducers';

export default combineReducers({
  home: HomeReducer,
  auth: AuthReducer,
  upload: UploadReducer,
});
