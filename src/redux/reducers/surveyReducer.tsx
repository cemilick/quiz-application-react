import { createSlice } from "@reduxjs/toolkit";


interface SurveyState {
    dataForm: any[];
    lastNumber: number;
    minutes: number | null;
    seconds: number | null;
}

const defaultMinutes = 5;
const defaultSeconds = 0;

const initialState: SurveyState = {
    dataForm: [],
    lastNumber: 0,
    minutes: defaultMinutes,
    seconds: defaultSeconds
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
            state.dataForm = [];
            state.lastNumber = 0;
        },
        changePage(state, value) {
            state.lastNumber = value.payload;
        },
        updateTimer(state, value) {
            state.minutes = value.payload.minutes;
            state.seconds = value.payload.seconds;
        },
        resetAll(state) {
            state.dataForm = [];
            state.lastNumber = 0;
            state.minutes = defaultMinutes;
            state.seconds = defaultSeconds;
        },
    }
})

export const { changeAnswer, resetAll, changePage, updateTimer, resetForm } = surveyReducer.actions
export default surveyReducer.reducer