import { combineReducers } from 'redux';
import UsernameReducer from './UsernameReducer.js';
import MessagesReducer from './MessagesReducer.js';

const reducers = combineReducers({
   UsernameReducer,
   MessagesReducer
})

export default reducers;