import * as actions from "../../actions/settings";

import { ActionType, getType } from "typesafe-actions";

export type SettingsAction = ActionType<typeof actions>;

export type settingsType = {
  isDarkMode: boolean;
};

const initialState = {
  isDarkMode: false,
};

export const settingsReducer = (
  state: settingsType = initialState,
  action: SettingsAction
): settingsType => {
  switch (action.type) {
    case getType(actions.setDarkMode):
      return {
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
};
