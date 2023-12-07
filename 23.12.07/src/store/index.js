import { createStore } from "redux";
import { reducer } from "../reducer";
// reducer method
export const store = createStore(reducer);
