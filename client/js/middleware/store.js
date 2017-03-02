import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import locationData from './locationDataReducer';

export default function configureStore(intialState) {

  return createStore(
    combineReducers({
      locationData
    }),
    intialState,
    applyMiddleware(thunkMiddleware)
  );

}
