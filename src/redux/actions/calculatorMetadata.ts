import { calculatorMetadata as actionTypes } from "./actionTypes";
import { createAction } from "typesafe-actions";

export const setIsLeft = createAction(actionTypes.SET_IS_LEFT)<boolean>();

export const setEqualClicked = createAction(actionTypes.SET_EQUAL_CLICKED)<boolean>();

export const setOperatorClicked = createAction(actionTypes.SET_OPERATOR_CLICKED)<boolean>();

export const addToHistory = createAction(actionTypes.ADD_TO_HISTORY)<string | number>();

export const resetHistory = createAction(actionTypes.RESET_HISTORY)<string>();
