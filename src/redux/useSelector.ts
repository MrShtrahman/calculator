import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector
} from "react-redux";

import reducer from "./reducers/rootReducer";

type RootState = ReturnType<typeof reducer>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
