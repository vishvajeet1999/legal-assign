import { configureStore } from "@reduxjs/toolkit";
import lawyersSlice from "./lawyersSlice";

const store = configureStore({
    reducer: {
        lawyers: lawyersSlice.reducer
    }
})

export default store