import { combineEpics } from "redux-observable";
import historyEpic from "./HistoryEpic";

const epics = combineEpics(...historyEpic);

export default epics;
