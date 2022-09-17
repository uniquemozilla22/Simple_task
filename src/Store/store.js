import { configureStore } from "@reduxjs/toolkit";
import KinoReducer from "./reducers/kino.reducer";
import thunk from "redux-thunk";

const store = configureStore({ reducer: KinoReducer, middleware: [thunk] });

export default store;
