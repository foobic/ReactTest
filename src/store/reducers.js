import { combineReducers } from 'redux';
import HomeReducer from './Home/reducers';
import SigninReducer from './Signin/reducers';
import SignupReducer from './Signup/reducers';
import UploadReducer from './Upload/reducers';

export default combineReducers({
  home: HomeReducer,
  signin: SigninReducer,
  signup: SignupReducer,
  upload: UploadReducer,
});
