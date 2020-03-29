import {
  CalcBasicAction,
  CalcBasicState,
  calculatorBasicReducer
} from "./calculatorBasic/calculatorBasicReducer";
import { MemoAction, MemoState, memoReducer } from "./memo/memoReducer";
import {
  MetadataAction,
  MetadataState,
  calculatorMetadataReducer
} from "./calculatorMetadata/calculatorMetadataReducer";

import { combineReducers } from "redux";

export type RootAction = MemoAction | CalcBasicAction | MetadataAction;

export type RootState = {
  calcBasic: CalcBasicState;
  memo: MemoState;
  calcMetadata: MetadataState;
};

const rootReducer = combineReducers({
  calcBasic: calculatorBasicReducer,
  memo: memoReducer,
  calcMetadata: calculatorMetadataReducer
});

export default rootReducer;
