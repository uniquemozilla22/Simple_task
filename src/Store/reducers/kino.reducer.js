import { createReducer } from "@reduxjs/toolkit";
import { fetch_data } from "../actions/constants.action";

const initialState = {
  kino: [],
};

const KinoReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetch_data, (state, action) => ({
    ...state,
    kino: action.payload,
  }));
});

export default KinoReducer;
