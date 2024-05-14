import { createSlice } from "@reduxjs/toolkit";
import { IFavCourse, coursesType } from "./coursesType";


interface courses{
    favoriteCourses:IFavCourse[],
    courseModal: boolean,
}

const initialState:courses = {
    favoriteCourses: [],
    courseModal: false
}

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers:{
        setFavCourse: (state, {payload})=>{
            localStorage.setItem('favCourses', JSON.stringify(payload))
        },
        removeFavCourse: (state, {payload})=>{
            localStorage.setItem('favCourses', JSON.stringify(payload))
        },
        setCourseModal:(state, {payload})=>{
            state.courseModal = payload
        },
        getUserCourses: (state, {payload})=>{
            state.favoriteCourses = payload
        },
        resetCourses: (state)=>{
            state.favoriteCourses = []
        }
    }
})


export const setUserFavCourse = (favCourses:IFavCourse[]) => (dispatch:Function, getState:Function) => {
    const {auth} = getState()
    const currentUser = auth.currentUser
    const  customFav = favCourses.filter(course => course.userToken === currentUser[0].userToken)
    dispatch(getUserCourses(customFav))
}

export const {setFavCourse, removeFavCourse, setCourseModal, getUserCourses, resetCourses} = coursesSlice.actions

export default coursesSlice