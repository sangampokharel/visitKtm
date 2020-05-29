import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
const createStoreWithMiddleware = applyMiddleware(thunk)
import reducer from './reducers';

export const store = createStore(reducer, createStoreWithMiddleware);

