import * as actions from "../../actions/calculatorMetadata";

import { ActionType, getType } from "typesafe-actions";

export type MetadataAction = ActionType<typeof actions>;
const initialState = {
  isLeft: true,
  equalClicked: false,
  operatorClicked: false,
  history: ""
};

export type MetadataState = {
  isLeft: boolean;
  equalClicked: boolean;
  operatorClicked: boolean;
  history: string;
};

export const calculatorMetadataReducer = (
  state: MetadataState = initialState,
  action: MetadataAction
): MetadataState => {
  switch (action.type) {
    case getType(actions.setEqualClicked):
      return { ...state, equalClicked: action.payload ? true : false };
    case getType(actions.setOperatorClicked):
      return { ...state, operatorClicked: action.payload ? true : false };
    case getType(actions.setIsLeft):
      return { ...state, isLeft: action.payload ? true : false };
    case getType(actions.addToHistory):
      return { ...state, history: action.payload.toString() };
    case getType(actions.resetHistory):
      return { ...state, history: "" };
    default:
      return state;
  }
};
