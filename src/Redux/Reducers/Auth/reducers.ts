import {TAuth} from '../types';
import {USER_LOGIN, USER_LOGOUT} from './actions';

const initialState: TAuth = {
  isLoggedIn: false,
  user: null,
  token: null,
  counter: 0,
};
const authReducers = (state: TAuth = initialState, action: any): TAuth => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};
export default authReducers;
