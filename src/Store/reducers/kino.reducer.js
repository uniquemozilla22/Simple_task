import { createReducer } from "@reduxjs/toolkit";
import { fetch_data } from "../actions/constants.action";

const initialState = {
  kino: [
    {
      gameNumber: "541525",
      gameDate: {
        d: "08",
        m: "09",
        year: "2022",
      },
      bonus: 0,
      drawNumbers: [
        "64",
        "51",
        "35",
        "52",
        "05",
        "40",
        "46",
        "47",
        "57",
        "72",
        "61",
        "21",
        "25",
        "68",
        "30",
        "07",
        "77",
        "22",
        "20",
        "26",
      ],
    },
    {
      gameNumber: "541526",
      gameDate: {
        d: "08",
        m: "09",
        year: "2022",
      },
      bonus: 0,
      drawNumbers: [
        "40",
        "04",
        "02",
        "18",
        "41",
        "34",
        "22",
        "20",
        "17",
        "12",
        "66",
        "35",
        "09",
        "16",
        "54",
        "36",
        "48",
        "46",
        "80",
        "73",
      ],
    },
  ],
};

const KinoReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetch_data, (state, action) => ({
    ...state,
    kino: action.payload,
  }));
});

export default KinoReducer;
