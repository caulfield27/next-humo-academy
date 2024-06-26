"use client"
import styles from './index.module.css'
import useSWR from 'swr';
import { CircularProgress } from '@mui/material';
import {Button} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import CourseModal from '@/src/components/enterCourseModal/enterCourse';
import Swal from 'sweetalert2'
import { IFavCourse, coursesType } from '@/src/store/features/courses/coursesType';
import { getCourses } from '@/src/utils/api';
import { useEffect, useState } from 'react';
import { useBooks } from '@/src/store/features/books/books';
import useAuth from '@/src/store/features/auth/auth';
import { useCourseStore } from '@/src/store/features/courses/courses';
import { getFromStorage, setToStorage } from '@/src/utils/getFromStorage';

const CoursesCard = () => {
    const dropdown = useBooks((state)=> state.dropdown)
    const favoriteCourses = useCourseStore((state)=> state.favoriteCourses)
    const setCourseModal = useCourseStore((state)=> state.setCourseModal)
    const getUserCourses = useCourseStore((state)=> state.getUserCourses)
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const isAuth = useAuth((state)=> state.isAuth)
    const incrementFavCounter = useCourseStore((state)=> state.incrementFavCounter)
    const getCounter = useCourseStore((store)=> store.getCounter)
    const decrementFavCounter = useCourseStore((state)=> state.decrementGFavCounter)
    const currentUser = useAuth((state)=> state.currentUser)
    const {data,isLoading } = useSWR<coursesType[]>('http://localhost:3002/courses', getCourses)
    let favCounter = useCourseStore((state)=> state.favCounter)
    const courses = data 
    const filteredCourses = courses === undefined ? [] : courses.filter((course) => {
        const matchesSearch = course.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = !selectedCategory || course.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleFavoriteCourse = (currentCourse:coursesType)=>{
        const getFavStorage = getFromStorage('favCourses')
    
        if (isAuth) {
            if (favoriteCourses.some(favCourse => favCourse.favCourse.id === currentCourse.id)) {
                const filtered = favoriteCourses.filter((course) => course.favCourse.id !== currentCourse.id)
                getUserCourses(filtered)
                if(getFavStorage){
                    const removeCourse = getFavStorage.filter((curCourse:IFavCourse)  => curCourse.favCourse.id !== currentCourse.id)
                    setToStorage('favCourses',removeCourse)
                }
                if(favCounter !== 0){
                    decrementFavCounter(favCounter-=1)
                }
                

            } else {
                if (getFavStorage) {
                    const favCourse = { userToken: currentUser[0].userToken, favCourse : currentCourse }
                    getFavStorage.push(favCourse)
                    setToStorage('favCourses', getFavStorage)
                    const newFavList = [...favoriteCourses, favCourse]
                    getUserCourses(newFavList)
                    incrementFavCounter(favCounter+=1)
                    
                }

            
                Swal.fire({
                    text: 'added to favorite courses',
                    icon: 'success'
                })

            }
        } else {
            Swal.fire({
                text:'Log in or sign up to adding favovrite courses',
                icon:'info',
                footer: '<a href="/login">log in?</a>',
                showConfirmButton: false
                
            })
        }
       
    }

    const handleCourseModal = ()=>{
        setCourseModal(true)
        document.body.classList.add('open_modal')
    }

    return (
        <>

                <CourseModal />
                <div className={dropdown ? `${styles.cards_wrapper} ${styles.adaptive_wrapper}` : styles.cards_wrapper}>
                    <div className={styles.courses_header}>
                        <h1>Humo academy programming courses</h1>
                    </div>
                    <div className={styles.courses_filter}>
                        <input type="text"
                            placeholder='search'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="">All Categories</option>
                            <option value="Front-end">Front-end</option>
                            <option value="python">Python</option>
                            <option value="golang">Golang</option>
                            <option value="android">Android</option>
                        </select>

                    </div>
                    <div className={styles.cards_container}>
                        {isLoading ? <div className={styles.loading}><CircularProgress /></div> :

                            filteredCourses.map((course, id) =>
                                <div key={id + 1} className={styles.card}>
                                    <span className={styles.favoriteCardText}>Add to favorites</span>
                                    <FavoriteIcon onClick={() => handleFavoriteCourse(course)} className={favoriteCourses.some(favcourse => favcourse.favCourse.id === course.id) ? `${styles.favCard_active} ${styles.cards_favorites}` : styles.cards_favorites} />
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
                                            <Button variant='outlined'
                                                color='secondary'
                                                onClick={handleCourseModal}
                                            >sign up</Button>
                                        </div>
                                    </div>


                                </div>

                            )
                        }
                    </div>
                </div>


        </>


    )
    
}
 
export default CoursesCard;