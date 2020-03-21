import calculatorReducer from './calculatorBasicReducer';
import { combineReducers } from 'redux';
import memoReducer from './memoReducer';

const rootReducer = combineReducers({
    calculatorReducer,
    memoReducer
})

export default rootReducer;