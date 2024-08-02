import { createSlice } from "@reduxjs/toolkit";


interface SurveyState {
    dataForm: any[];
}

const initialState: SurveyState = {
    dataForm: [0],
}

const surveyReducer = createSlice({
    name: 'surveyReducer',
    initialState,
    reducers: {
        changeAnswer(state, value) {
            const index = value.payload.index;
            state.dataForm[index] = value.payload.answer;
        },
        resetForm(state) {
            state.dataForm = [0];
        }
    }
})

export const { changeAnswer, resetForm } = surveyReducer.actions
export default surveyReducer.reducer