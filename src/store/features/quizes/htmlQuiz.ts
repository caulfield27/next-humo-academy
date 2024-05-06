import { createSlice } from "@reduxjs/toolkit";
import { htmlQuestions } from "./quizUtils/questions";
import { htmlQuizInit } from "./quizUtils/quizTypes";

const initialState:htmlQuizInit = {
    htmlQuestions,
    currentQuestionIndex: 0,
    result: 0,
}


const htmlQuizSlice = createSlice({
    name: 'htmlQuiz',
    initialState,
    reducers:{
        htmlSelectOption: (state, {payload})=>{
            state.htmlQuestions[state.currentQuestionIndex].selected = payload
        },
        htmlCheckAnswer: (state, {payload})=>{
            state.htmlQuestions[state.currentQuestionIndex].isCorrect = payload
        },
        htmlNextQuestion: (state)=>{
            const correctAnser = 
            state.htmlQuestions[state.currentQuestionIndex].selected ===
            state.htmlQuestions[state.currentQuestionIndex].correct
            state.currentQuestionIndex++;
            state.result += correctAnser ? 10 : 0

        },
        htmlResetQuiz: (state) => {
            state.currentQuestionIndex = 0;
            state.result = 0;
            state.htmlQuestions.forEach((question) => {
                question.selected = null; 
                question.isCorrect = false;
            });
        },
       
    }
})




export const {htmlSelectOption,htmlNextQuestion, htmlCheckAnswer, htmlResetQuiz} = htmlQuizSlice.actions



export default htmlQuizSlice