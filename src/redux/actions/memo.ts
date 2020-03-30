import { memo as actionTypes } from "./actionTypes";
import { createAction } from "typesafe-actions";

export const addToMemo = createAction(actionTypes.ADD_TO_MEMO)<number>();

export const subFromMemo = createAction(actionTypes.SUB_FROM_MEMO)<number>();

export const resetMemo = createAction(actionTypes.RESET_MEMO)<string>();
