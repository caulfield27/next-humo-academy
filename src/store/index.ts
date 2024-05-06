import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./features/books/books";
import jsQuizSlice from "./features/quizes/jsQuiz";
import quizModalSlice from "./features/quizes/quizUtils/quizModal";
import reactQuizSlice from "./features/quizes/reactQuiz";
import htmlQuizSlice from "./features/quizes/htmlQuiz";
import pyQuizSlice from "./features/quizes/pyQuiz";
import getCoursesSlice from "./features/courses/Getcourses";
import coursesSlice from "./features/courses/courses";
import authSlice from "./features/auth/auth";

const store = configureStore({
    reducer:{
        books: booksSlice.reducer,
        jsQuiz:jsQuizSlice.reducer,
        quizModal: quizModalSlice.reducer,
        reactQuiz: reactQuizSlice.reducer,
        htmlQuiz: htmlQuizSlice.reducer,
        pyQuiz: pyQuizSlice.reducer,
        getCourses: getCoursesSlice.reducer,
        courses: coursesSlice.reducer,
        auth: authSlice.reducer,
    }
})

export type RootDispatch = typeof store.dispatch
export type RootSelector = ReturnType<typeof store.getState>
export default store