import { configureStore } from "@reduxjs/toolkit";
import myReducer from '../features/mySlice'
import Details from '../features/detailsSlice'
import tokenSlice from "../features/tokenSlice";

export const store = configureStore({
    reducer: {
        counter: myReducer,
        details: Details,
        tokenSlice: tokenSlice
    },
  })