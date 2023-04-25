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
        },
        addingAppointment: (state, action) =>{
            state.lawyers.filter(res => +res.id === +action.payload.companyId)[0].lawyers.filter(res => +res.id === +action.payload.lawyerId)[0].availability[action.payload.index] = 0
        } 
    }
})

export const { assignLawyers, addingAppointment } = lawyersSlice.actions

export default lawyersSlice