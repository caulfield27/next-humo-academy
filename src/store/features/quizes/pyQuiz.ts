import { createSlice } from "@reduxjs/toolkit";
import { pyQuestions } from "./quizUtils/questions";
import { pythonQuizInit } from "./quizUtils/quizTypes";

const initialState:pythonQuizInit = {
    pyQuestions,
    currentQuestionIndex: 0,
    result: 0,
}


const pyQuizSlice = createSlice({
    name: 'htmlQuiz',
    initialState,
    reducers:{
        pySelectOption: (state, {payload})=>{
            state.pyQuestions[state.currentQuestionIndex].selected = payload
        },
        pyCheckAnswer: (state, {payload})=>{
            state.pyQuestions[state.currentQuestionIndex].isCorrect = payload
        },
        pyNextQuestion: (state)=>{
            const correctAnser = 
            state.pyQuestions[state.currentQuestionIndex].selected ===
            state.pyQuestions[state.currentQuestionIndex].correct
            state.currentQuestionIndex++;
            state.result += correctAnser ? 10 : 0

        },
        pyResetQuiz: (state) => {
            state.currentQuestionIndex = 0;
            state.result = 0;
            state.pyQuestions.forEach((question) => {
                question.selected = null; 
                question.isCorrect = false;
            });
        },
       
    }
})




export const {pySelectOption,pyNextQuestion,pyCheckAnswer,pyResetQuiz} = pyQuizSlice.actions



export default pyQuizSlice