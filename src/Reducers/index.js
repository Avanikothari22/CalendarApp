import { combineReducers } from 'redux';
import commonReducer from './commonReducer';
import login from './login';
export default combineReducers({
  commonReducer,
  login,
});