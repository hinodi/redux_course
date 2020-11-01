import {createStore} from 'redux';
// import rootReducer from './reducers';
import counterReducer from './reducers/counter';

export default createStore(counterReducer);
