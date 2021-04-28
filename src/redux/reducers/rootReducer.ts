import { AuthAction, AuthType, authReducer } from "./auth/authReducer";
import {
  CalcBasicAction,
  CalcBasicState,
  calculatorBasicReducer,
} from "./calculatorBasic/calculatorBasicReducer";
import { MemoAction, MemoState, memoReducer } from "./memo/memoReducer";
import {
  MetadataAction,
  MetadataState,
  calculatorMetadataReducer,
} from "./calculatorMetadata/calculatorMetadataReducer";
import { SettingsAction, settingsReducer, settingsType } from "./settings/settingsReducer"
import { combineReducers } from "redux";

export type RootAction =
  | MemoAction
  | CalcBasicAction
  | MetadataAction
  | AuthAction
  | SettingsAction;

export type RootState = {
  calcBasic: CalcBasicState;
  memo: MemoState;
  calcMetadata: MetadataState;
  auth: AuthType;
  settings: settingsType;
};

const rootReducer = combineReducers({
  calcBasic: calculatorBasicReducer,
  memo: memoReducer,
  calcMetadata: calculatorMetadataReducer,
  auth: authReducer,
  settings: settingsReducer
});

export default rootReducer;
