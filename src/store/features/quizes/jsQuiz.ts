import { createSlice } from "@reduxjs/toolkit";
import { jsQuestions } from "./quizUtils/questions";
import { jsQuizInit } from "./quizUtils/quizTypes";

const initialState:jsQuizInit = {
    jsQuestions,
    currentQuestionIndex: 0,
    result: 0,
}


const jsQuizSlice = createSlice({
    name: 'jsQuiz',
    initialState,
    reducers:{
        selectOption: (state, {payload})=>{
            state.jsQuestions[state.currentQuestionIndex].selected = payload
        },
        checkAnswer: (state, {payload})=>{
            state.jsQuestions[state.currentQuestionIndex].isCorrect = payload
        },
        nextQuestion: (state)=>{
            const correctAnser = 
            state.jsQuestions[state.currentQuestionIndex].selected ===
            state.jsQuestions[state.currentQuestionIndex].correct
            state.currentQuestionIndex++;
            state.result += correctAnser ? 10 : 0

        },
        resetQuiz: (state) => {
            state.currentQuestionIndex = 0;
            state.result = 0;
            state.jsQuestions.forEach((question) => {
                question.selected = null; 
                question.isCorrect = false;
            });
        },
       
    }
})




export const {selectOption, nextQuestion, checkAnswer, resetQuiz} = jsQuizSlice.actions



export default jsQuizSlice