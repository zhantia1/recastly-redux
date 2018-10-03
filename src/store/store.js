import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

export default store (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}
