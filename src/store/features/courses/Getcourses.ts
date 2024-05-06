import { Action, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { coursesType } from "./coursesType";

const api = 'http://localhost:3002/courses' 
export const fetchCourses = ():
ThunkAction<void, unknown,unknown,Action<string>>=>
    async (dispatch:any)=>{
        try{
            dispatch(setDownload(true))
            const response = await fetch(api);
            const data = await response.json()
            dispatch(getCourses(data))
            console.log(data)
            
        }catch(error){
            console.log('error:', error )
        }finally{
            dispatch(setDownload(false))
        }
    }


interface courses{
    courses: coursesType[],
    isLoading: boolean
} 

const initialState:courses = {
    courses:[],
    isLoading:false
}

const getCoursesSlice = createSlice({
    name:'getCourses',
    initialState,
    reducers:{
        getCourses: (state,{payload})=>{
            state.courses = payload
        },
        setDownload: (state, {payload})=>{
            state.isLoading = payload
        }
    }

})

export const {getCourses,setDownload} = getCoursesSlice.actions

export default getCoursesSlice