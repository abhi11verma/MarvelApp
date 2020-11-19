import {combineReducers} from 'redux';
import counterReducer from 'src/reducer/counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;


