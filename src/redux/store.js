import { createStore, combineReducers,applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import { createLogger } from 'redux-logger'

const reducers = combineReducers({
  form
  // your other reducers
});

const logger = createLogger()

export default createStore(reducers, applyMiddleware(logger));
