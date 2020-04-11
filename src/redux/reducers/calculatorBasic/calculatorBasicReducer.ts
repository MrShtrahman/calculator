import * as actions from "../../actions/calculatorBasic";

import { ActionType, getType } from "typesafe-actions";

export type CalcBasicAction = ActionType<typeof actions>;

export type CalcBasicState = {
  display: string;
  left: number;
  right: number;
  operator: string;
};

const initialState = {
  display: "0",
  left: 0,
  right: 0,
  operator: "",
};

export const calculatorBasicReducer = (
  state: CalcBasicState = initialState,
  action: CalcBasicAction
): CalcBasicState => {
  switch (action.type) {
    case getType(actions.setRight):
      return {
        ...state,
        right: Number(action.payload),
        display: action.payload.toString(),
      };
    case getType(actions.setLeft):
      return {
        ...state,
        left: Number(action.payload),
        display: action.payload.toString(),
      };
    case getType(actions.setDisplay):
      return { ...state, display: action.payload.toString() };
    case getType(actions.setOperator):
      return { ...state, operator: action.payload.toString() };

    case getType(actions.clear):
      return initialState;

    default:
      return state;
  }
};
