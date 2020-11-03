import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './reducers';
import counterReducer from './reducers/counter';

const store = createStore(counterReducer, applyMiddleware(thunk));

export default store;
