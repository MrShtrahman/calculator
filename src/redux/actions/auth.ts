import { auth as actionTypes } from "./actionTypes";
import { createAction } from "typesafe-actions";

export const setIsAuth = createAction(actionTypes.SET_IS_AUTH)<boolean>();

export const setName = createAction(actionTypes.SET_NAME)<string>();
