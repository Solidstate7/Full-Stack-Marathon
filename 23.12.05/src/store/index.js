// creates an instance for managing global states
import { createStore } from "redux";
import reducer from "../reducer";

// store instance, takes a reducer, middlewares, etc. as parameters
const store = createStore(reducer);

export default store;
