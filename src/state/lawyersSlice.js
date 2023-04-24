import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lawyers: []
}

const lawyersSlice = createSlice({
    name: 'lawyers',
    initialState,
    reducers: {
        assignLawyers: (state, action) =>{
            state.lawyers = action.payload
        }
    }
})

export const { assignLawyers } = lawyersSlice.actions

export default lawyersSlice