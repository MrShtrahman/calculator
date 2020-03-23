import calculatorBasicReducer from './calculatorBasic/calculatorBasicReducer';
import calculatorMetadataReducer from './calculatorMetadata/calculatorMetadataReducer';
import { combineReducers } from 'redux';
import memoReducer from './memo/memoReducer';

const rootReducer = combineReducers({
    calculatorBasicReducer,
    memoReducer,
    calculatorMetadataReducer
})

export default rootReducer;