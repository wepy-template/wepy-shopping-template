import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import reducers from './reducers'

export default function configStore() {
  return createStore(reducers, applyMiddleware(promiseMiddleware))
};
