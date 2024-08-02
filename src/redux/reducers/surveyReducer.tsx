import { createSlice } from "@reduxjs/toolkit";


interface SurveyState {
    dataForm: any[];
    lastNumber: number;
}

const initialState: SurveyState = {
    dataForm: [0],
    lastNumber: 0
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
            state.lastNumber = 0;
        },
        changePage(state, value) {
            state.lastNumber = value.payload;
        }
    }
})

export const { changeAnswer, resetForm, changePage } = surveyReducer.actions
export default surveyReducer.reducer