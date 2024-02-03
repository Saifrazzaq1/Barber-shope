import {store} from './ConfigureStore';

export const getRedux = () => {
  const dispatch = store.dispatch;
  const state = store.getState();
  return {dispatch, state};
};
export const ADD_ITEM = 'ADD_ITEM';
