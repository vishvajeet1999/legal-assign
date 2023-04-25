import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    history: []
}

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        saveHistory: (state, action) =>{
            state.history.push(action.payload)
        }
    }
})

export const { saveHistory } = historySlice.actions

export default historySlice