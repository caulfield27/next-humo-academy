import { IUserItem } from "../auth/auth";
import { IFavCourse } from "./coursesType";
import { create } from "zustand";
import { setToStorage } from "@/src/utils/getFromStorage";

interface ICourses{
    favoriteCourses:IFavCourse[],
    courseModal: boolean,
    favCounter: number,
}

interface Actions{
    setCourseModal: (payload: boolean) => void,
    getUserCourses: (payload: IFavCourse[] ) => void,
    resetCourses: ()=> void,
    incrementFavCounter: (payload: number)=> void,
    decrementGFavCounter: (payload: number)=> void,
    resetFavCounter:() => void,
    getCounter: (payload: number)=> void,
    
    

}

export const useCourseStore = create<ICourses & Actions>((set)=>({
    favoriteCourses: [],
    courseModal: false,
    favCounter: 0,
    setCourseModal: (payload)=> set(()=> ({courseModal: payload})),
    getUserCourses: (payload)=> set(()=> ({favoriteCourses: payload})),
    resetCourses: ()=> set(()=> ({favoriteCourses: []})),
    incrementFavCounter: (payload)=> {
        setToStorage('favCourseCounter', payload === null ? 0 : payload)
        set(()=> ({favCounter:payload}))
    },
    decrementGFavCounter: (payload)=> {
        setToStorage('favCourseCounter', payload)
        set(()=> ({favCounter:payload}))
    },
    getCounter: (payload)=> set(()=> ({favCounter: payload})),
    resetFavCounter: ()=> set((state)=> ({favCounter: 0}))

}))

export const setUserFavCourse = (favCourses:IFavCourse[], currentUser:IUserItem[], getUserCourses:Function)=>{
    const  customFav = favCourses.filter(course => course.userToken === currentUser[0].userToken)
    getUserCourses(customFav)
}


