import { createSlice } from "@reduxjs/toolkit";
import { coursesType } from "./coursesType";

const coursesFromLocalStorage = typeof window !== 'undefined' ? localStorage.getItem('favCourses') : null;

interface courses{
    favoriteCourses:coursesType[],
    courseModal: boolean,
}

const initialState:courses = {
    favoriteCourses:coursesFromLocalStorage ? JSON.parse(coursesFromLocalStorage) : [],
    courseModal: false
}

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers:{
        setFavCourse: (state, {payload})=>{
            state.favoriteCourses.push(payload)
            localStorage.setItem('favCourses', JSON.stringify(state.favoriteCourses))
        },
        removeFavCourse: (state, {payload})=>{
            state.favoriteCourses = state.favoriteCourses.filter((course)=> course.id !== payload.id)
            localStorage.setItem('favCourses', JSON.stringify(state.favoriteCourses))
        },
        setCourseModal:(state, {payload})=>{
            state.courseModal = payload
        }
    }
})

export const {setFavCourse, removeFavCourse, setCourseModal} = coursesSlice.actions

export default coursesSlice