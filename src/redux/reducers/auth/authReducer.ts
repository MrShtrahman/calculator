import * as actions from "../../actions/auth";

import { ActionType, getType } from "typesafe-actions";

export type AuthAction = ActionType<typeof actions>;

export type AuthType = {
  isAuth: boolean;
  name?: string;
};

const initialState = {
  isAuth: false,
  name: undefined,
};

export const authReducer = (
  state: AuthType = initialState,
  action: AuthAction
): AuthType => {
  switch (action.type) {
    case getType(actions.setIsAuth):
      return typeof action.payload === "boolean"
        ? {
            ...state,
            isAuth: action.payload,
          }
        : initialState;
    case getType(actions.setName):
      return typeof action.payload === "string"
        ? {
            ...state,
            name: action.payload,
          }
        : initialState;
    default:
      return state;
  }
};
