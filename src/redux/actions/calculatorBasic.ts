import { calculatorBasic as actionTypes } from "./actionTypes";
import { createAction } from "typesafe-actions";

export const setDisplay = createAction(actionTypes.SET_LEFT)<number>();

export const setRight = createAction(actionTypes.SET_RIGHT)<number>();

export const setLeft = createAction(actionTypes.SET_LEFT)<number>();

export const setOperator = createAction(actionTypes.SET_OPERATOR)<string>();

export const clear = createAction(actionTypes.CLEAR)<string>();
