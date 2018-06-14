import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import reducer from './reducer';
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk'
import authReducer from './reducers/auth'
import {loadAuthToken} from './local-storage'
import {setAuthToken, refreshAuthToken} from './actions/auth'
import protectedDataReducer from './reducers/protected-data'
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const combinedReducers = combineReducers({form: formReducer, auth: authReducer, protectedData: protectedDataReducer, game: reducer})

const store = createStore(
    combinedReducers,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
);

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token))
  store.dispatch(refreshAuthToken())
}

export default store;