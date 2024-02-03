import {combineReducers} from 'redux';
import auth from './Reducers/Auth/reducers';
const reducers = combineReducers({
  auth,
});
export const reducersArray = ['colorSelection', 'images', 'effects', 'addText'];
export default reducers;
