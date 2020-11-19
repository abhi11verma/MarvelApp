import {combineReducers} from 'redux';
import characterReducer from 'src/reducer/characterListingReducer';

const rootReducer = combineReducers({
  characters: characterReducer,
});

export default rootReducer;


