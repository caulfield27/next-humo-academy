
import Sidebar from "../sidebar/sidebar";
import React, { useEffect } from "react";
import { setUserFavCourse, useCourseStore } from "@/src/store/features/courses/courses";
import { setUserFavBooks } from "@/src/store/features/books/books";
import useAuth from "@/src/store/features/auth/auth";
import { useBooks } from "@/src/store/features/books/books";
import { getFromStorage } from "@/src/utils/getFromStorage";


const Layouts = ({children}:{children:React.ReactNode}) => {
    const isAuth = useAuth((state)=> state.isAuth)
    const {getUserFavorites} = useBooks()
    const {getUserCourses} = useCourseStore()
    const currentUser = useAuth((state)=> state.currentUser)

    useEffect(() => {
        if (isAuth) {
            setUserFavBooks(getFromStorage('favorites'),getUserFavorites, currentUser)
            setUserFavCourse(getFromStorage('favCourses'),currentUser, getUserCourses, )
        }

    }, [isAuth])
    

    return (
        <div className='app-container'>
            <Sidebar/>
            <div className="pages-content">
                {children}    
            </div>
            
        </div>  
        
    );
}
 
export default Layouts;