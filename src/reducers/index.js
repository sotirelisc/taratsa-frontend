import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import taratsaReducer from './taratsaReducer';
import chefReducer from './chefReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  taratses: taratsaReducer,
  chefs: chefReducer
});