import { configureStore } from "@reduxjs/toolkit";
import lawyersSlice from "./lawyersSlice";
import historySlice from "./historySlice";

const store = configureStore({
    reducer: {
        lawyers: lawyersSlice.reducer,
        history: historySlice.reducer
    }
})

export default store