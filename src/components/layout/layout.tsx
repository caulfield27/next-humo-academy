import useSelectorHook from "@/src/hooks/selectorHook";
import Sidebar from "../sidebar/sidebar";
import React, { useEffect } from "react";
import useDispatchHook from "@/src/hooks/dispatchHook";
import { setUserFavBooks } from "@/src/store/features/books/books";
import { setUserFavCourse } from "@/src/store/features/courses/courses";


const Layouts = ({children}:{children:React.ReactNode}) => {
    const isAuth = useSelectorHook((state)=> state.auth.isAuth)
    const dispatch = useDispatchHook()
    useEffect(()=>{
        const getBooks = localStorage.getItem('favorites')
        const getCourse = localStorage.getItem('favCourses')
        if(getBooks){
            localStorage.setItem('favorites',getBooks)
        }else{
            localStorage.setItem('favorites', JSON.stringify([])) 
        }
        if(getCourse){
            localStorage.setItem('favCourses',getCourse)
        }else{
            localStorage.setItem('favCourses', JSON.stringify([])) 
        }

        
    })

    useEffect(() => {
        if (isAuth) {
            const getStorageBooks = localStorage.getItem('favorites')
            const getStorageCourses = localStorage.getItem('favCourses')
            if (getStorageBooks) {
                const parsedBooks = JSON.parse(getStorageBooks)
                dispatch(setUserFavBooks(parsedBooks))
            }
            if(getStorageCourses){
                const parsedCourses = JSON.parse(getStorageCourses)
                dispatch(setUserFavCourse(parsedCourses))
            }
        }

    }, [dispatch, isAuth])
    

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