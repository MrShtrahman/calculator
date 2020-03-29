import * as actions from "../../actions/memo";

import { ActionType, getType } from "typesafe-actions";

export type MemoAction = ActionType<typeof actions>;

export type MemoState = {
  memo: number;
  isMemoShown: boolean;
};

const initialState = {
  memo: 0,
  isMemoShown: false
};

export const memoReducer = (
  state: MemoState = initialState,
  action: MemoAction
): MemoState => {
  switch (action.type) {
    case getType(actions.addToMemo):
      return {
        memo: state.memo + Number(action.payload),
        isMemoShown: true
      };
    case getType(actions.subFromMemo):
      return {
        memo: state.memo - Number(action.payload),
        isMemoShown: true
      };
    case getType(actions.resetMemo()):
      return initialState;
    default:
      return state;
  }
};
