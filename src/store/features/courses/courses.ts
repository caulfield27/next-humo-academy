import { IUserItem } from "../auth/auth";
import { IFavCourse } from "./coursesType";
import { create } from "zustand";

interface ICourses{
    favoriteCourses:IFavCourse[],
    courseModal: boolean,
}

interface Actions{
    setCourseModal: (payload: boolean) => void,
    getUserCourses: (payload: IFavCourse[] ) => void,
    resetCourses: ()=> void

}

export const useCourseStore = create<ICourses & Actions>((set)=>({
    favoriteCourses: [],
    courseModal: false,
    setCourseModal: (payload)=> set(()=> ({courseModal: payload})),
    getUserCourses: (payload)=> set(()=> ({favoriteCourses: payload})),
    resetCourses: ()=> set(()=> ({favoriteCourses: []}))

}))

export const setUserFavCourse = (favCourses:IFavCourse[], currentUser:IUserItem[], getUserCourses:Function)=>{
    const  customFav = favCourses.filter(course => course.userToken === currentUser[0].userToken)
    getUserCourses(customFav)
}


