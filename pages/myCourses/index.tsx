import { Button } from '@mui/material'
import styles from './index.module.css'
import CourseModal from '@/src/components/enterCourseModal/enterCourse'
import { IFavCourse, coursesType } from '@/src/store/features/courses/coursesType'
import React from 'react'
import { useCourseStore } from '@/src/store/features/courses/courses'

const MyCourses = ()=>{
    const {favoriteCourses, getUserCourses, setCourseModal} = useCourseStore((state)=> state)
    
    const handelRemove = (currentCourse: coursesType)=>{
        const filtered = favoriteCourses.filter((course) => course.favCourse.id !== currentCourse.id)
        const getFavStorage = localStorage.getItem('favCourses')
        if(getFavStorage){
            const removeCourse = JSON.parse(getFavStorage).filter((removeCourse: IFavCourse)  => removeCourse.favCourse.id !== currentCourse.id)
            localStorage.setItem('favCourses', JSON.stringify(removeCourse))
        }
        getUserCourses(filtered)
    }

    return (
        <>
            <CourseModal/>
            <div className={styles.myCourses_wrapper}>
                <h1>My courses</h1>
                <span className={styles.courses_amount}>{favoriteCourses.length} in cart</span>
                <div className={styles.favCourses_container}>
                    
                    {favoriteCourses.length < 1 ?
                    <div className={styles.empty_wrapper}>
                        <img src='empty.jpg' alt="empty cart" />
                        <span><center>Your cart is empty.</center><br/>Go to humo courses and choose your favorite</span>
                    </div>
                    :
                    
                    favoriteCourses.map((course, id) => {
                        return <div key={id + 1} className={styles.card}>
                            <div className={styles.card_left}>
                                <h2>{course.favCourse.name}</h2>
                                <span className={styles.mentor}>{course.favCourse.mentor}</span>
                                <div className={styles.languages_wrap}>
                                    <p>You will learn &darr;</p>
                                    <div className={styles.language_img}>
                                        {course.favCourse.languages.map((language, id) =>
                                            <img src={language} alt="altf4" key={id + 1} />
                                        )}
                                    </div>
                                </div>
                                <div className={styles.orange}>
                                    <span>start {course.favCourse.courseStart}</span>
                                </div>
                            </div>
                            <div className={styles.card_right}>
                                <img src={course.favCourse.image} alt="" />
                                <div className={styles.card_buttons}>
                                    <Button variant='outlined' color='secondary'
                                    onClick={()=> setCourseModal(true)}
                                    >sign up</Button>
                                    <Button variant='outlined' color='error' onClick={()=>handelRemove(course.favCourse)}>remove</Button>
                                </div>
                            </div>


                        </div>

                    })}
            
                </div>

            </div>
            
        </>
    )
}

export default MyCourses