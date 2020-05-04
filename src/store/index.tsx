import {
  DispatchAction,
  IUniversState,
  UniversReducer,
} from "./reducers/UniversReducer";
import { createStore } from "redux";

export const store = createStore<IUniversState, DispatchAction, null, null>(
  UniversReducer
);
