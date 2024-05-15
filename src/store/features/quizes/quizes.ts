import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { IGlobalQuestions, IQuizState, quizTypes } from "./quizUtils/quizTypes";
import { devtools } from "zustand/middleware";

interface Actions{
    selectOption: (payload: string)=> void,
    nextQuestion: ()=> void,
    resetQuiz: ()=> void,
    setQuestions: (quiz:IGlobalQuestions)=> void
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
        setQuestions: (quiz) => set((state)=> {
        state.questions = quiz.questions;
        state.currentQuiz = quiz.id-1;
    }),
    setQuizModal: (payload)=> set((state)=>{
        state.quizModal = payload
    })

}))))   

