import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import reducer from './reducer';
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk'
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const combinedReducers = combineReducers({form: formReducer, game: reducer})

export default createStore(
    combinedReducers,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );