import { RootAction, RootState } from "../reducers/rootReducer";
import { addToHistory, resetHistory } from "../actions/calculatorMetadata";
import { catchError, filter, map } from "rxjs/operators";
import { clear, setOperator } from "../actions/calculatorBasic";

import { Epic } from "redux-observable";
import { isActionOf } from "typesafe-actions";

const addToHistoryEpic: Epic<RootAction, RootAction, RootState> = (
  action$,
  state$
) =>
  action$.pipe(
    filter(isActionOf(setOperator)),
    map(() => addToHistory(state$.value.calcBasic.operator)),
    catchError(error => clear)
  );

const resetHistoryEpic = (
  action$: any
) =>
  action$.pipe(
    filter(isActionOf(clear)),
    map(() => resetHistory("")),
    catchError(error => clear)
  );

export default [addToHistoryEpic, resetHistoryEpic];
