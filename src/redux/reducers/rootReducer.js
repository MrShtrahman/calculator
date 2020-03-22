import calculatorBasicReducer from './calculatorBasicReducer';
import calculatorMetadataReducer from './calculatorMetadataReducer';
import { combineReducers } from 'redux';
import memoReducer from './memoReducer';

const rootReducer = combineReducers({
    calculatorBasicReducer,
    memoReducer,
    calculatorMetadataReducer
})

export default rootReducer;