import { Button } from '@mui/material'
import styles from './index.module.css'
import useSelectorHook from '@/src/hooks/selectorHook'
import useDispatchHook from '@/src/hooks/dispatchHook'
import { removeFavCourse, setFavCourse } from '@/src/store/features/courses/courses'
import CourseModal from '@/src/components/enterCourseModal/enterCourse'
import { coursesType } from '@/src/store/features/courses/coursesType'
import { setCourseModal } from '@/src/store/features/courses/courses'

const MyCourses = ()=>{
    const dispatch = useDispatchHook()
    const favCourses = useSelectorHook((state)=> state.courses.favoriteCourses)
    const handelRemove = (currentCourse:coursesType) =>{
        dispatch(removeFavCourse(currentCourse))
    }

    return (
        <>
            <CourseModal/>
            <div className={styles.myCourses_wrapper}>
                <h1>My courses</h1>
                <span className={styles.courses_amount}>{favCourses.length} in cart</span>
                <div className={styles.favCourses_container}>
                    
                    {favCourses.length < 1 ?
                    <div className={styles.empty_wrapper}>
                        <img src='empty.jpg' alt="empty cart" />
                        <span><center>Your cart is empty.</center><br/>Go to humo courses and choose your favorite</span>
                    </div>
                    :
                    
                    favCourses.map((course, id) => {
                        return <div key={id + 1} className={styles.card}>
                            <div className={styles.card_left}>
                                <h2>{course.name}</h2>
                                <span className={styles.mentor}>{course.mentor}</span>
                                <div className={styles.languages_wrap}>
                                    <p>You will learn &darr;</p>
                                    <div className={styles.language_img}>
                                        {course.languages.map((language, id) =>
                                            <img src={language} alt="altf4" key={id + 1} />
                                        )}
                                    </div>
                                </div>
                                <div className={styles.orange}>
                                    <span>start {course.courseStart}</span>
                                </div>
                            </div>
                            <div className={styles.card_right}>
                                <img src={course.image} alt="" />
                                <div className={styles.card_buttons}>
                                    <Button variant='outlined' color='secondary'
                                    onClick={()=> dispatch(setCourseModal(true))}
                                    >sign up</Button>
                                    <Button variant='outlined' color='error' onClick={()=>handelRemove(course)}>remove</Button>
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