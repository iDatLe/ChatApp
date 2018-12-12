import { combineReducers } from 'redux';
import UsernameReducer from './UsernameReducer.js';
import MessagesReducer from './MessagesReducer.js';

const appReducers = combineReducers({
   UsernameReducer,
   MessagesReducer
})

const reducers = (state, action) => {
   if (action.type === 'RESET') {
      state = undefined
   }

   return appReducers(state, action);
}



export default reducers;