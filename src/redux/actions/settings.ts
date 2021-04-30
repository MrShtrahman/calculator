import { settings as actionTypes } from "./actionTypes";
import { createAction } from "typesafe-actions";

export const setDarkMode = createAction(actionTypes.IS_DARK_MODE)();