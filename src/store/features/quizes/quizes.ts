// import { createSlice } from "@reduxjs/toolkit";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { IQuizState, quizTypes } from "./quizUtils/quizTypes";
import { devtools } from "zustand/middleware";

interface Actions{
    selectOption: (payload: string)=> void,
    nextQuestion: ()=> void,
    resetQuiz: ()=> void,
    setQuestions: (questionList: quizTypes[], questionId: number)=> void
    setQuizModal: (payload: boolean)=> void

}


export const useQuizes=  create<IQuizState & Actions>()(devtools(immer((set)=>({
    questions: [],
    currentQuestionIndex: 0,
    currentQuiz:0,
    result: 0,
    quizModal: false,
    selectOption: (payload) => set((state)=> {state.questions[state.currentQuestionIndex].selected = payload}),
    nextQuestion: ()=> set((state)=>{
    const isCOrrect = 
    state.questions[state.currentQuestionIndex].selected ===
    state.questions[state.currentQuestionIndex].correct
    state.currentQuestionIndex++
    state.result += isCOrrect ? 10 : 0
    }),
    resetQuiz: ()=> set((state)=>{
    state.currentQuestionIndex = 0;
    state.result = 0;
    state.questions.forEach((question) => {
        question.selected = null; 
        question.isCorrect = false;
    });
    }),
        setQuestions: (questionList, questionId) => set((state)=> {
        state.questions = questionList;
        state.currentQuiz = questionId;
    }),
    setQuizModal: (payload)=> set((state)=>{
        state.quizModal = payload
    })

}))))   

// const initialState:htmlQuizInit = {
//     htmlQuestions,
//     currentQuestionIndex: 0,
//     result: 0,
// }


// const htmlQuizSlice = createSlice({
//     name: 'htmlQuiz',
//     initialState,
//     reducers:{
//         htmlSelectOption: (state, {payload})=>{
//             state.htmlQuestions[state.currentQuestionIndex].selected = payload
//         },
//         htmlCheckAnswer: (state, {payload})=>{
//             state.htmlQuestions[state.currentQuestionIndex].isCorrect = payload
//         },
//         htmlNextQuestion: (state)=>{
//             const correctAnser = 
//             state.htmlQuestions[state.currentQuestionIndex].selected ===
//             state.htmlQuestions[state.currentQuestionIndex].correct
//             state.currentQuestionIndex++;
//             state.result += correctAnser ? 10 : 0

//         },
//         htmlResetQuiz: (state) => {
//             state.currentQuestionIndex = 0;
//             state.result = 0;
//             state.htmlQuestions.forEach((question) => {
//                 question.selected = null; 
//                 question.isCorrect = false;
//             });
//         },
       
//     }
// })




// export const {htmlSelectOption,htmlNextQuestion, htmlCheckAnswer, htmlResetQuiz} = htmlQuizSlice.actions



// export default htmlQuizSlice