import { combineReducers } from 'redux';
import reducer from './reducer';

const reducers = {
    itemStore: reducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
