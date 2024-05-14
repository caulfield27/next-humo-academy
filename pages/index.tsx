
import styles from './index.module.css'
import useSelectorHook from '@/src/hooks/selectorHook'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { setUserFavBooks } from '@/src/store/features/books/books'
import { setUserFavCourse } from '@/src/store/features/courses/courses'
import useDispatchHook from '@/src/hooks/dispatchHook'

const Home = ()=>{
    const navigate = useRouter()
    const dropdown = useSelectorHook((state)=> state.books.dropdown)
    const isAuth = useSelectorHook((state)=> state.auth.isAuth)
    const dispatch = useDispatchHook()

    

    return (
        <>
            <div className={dropdown ? `${styles.home_wrapper} ${styles.dropdown_adaptive}` : styles.home_wrapper}>
                <div className={styles.home_container}>
                    <div className={styles.header_text}>
                        <h1>Unlock Your Coding Potential with Humo Academy's Programming Courses</h1>
                        <p>Welcome to Humo Academy, where we empower you to master the art of programming. Discover our diverse range of courses designed to cater to beginners and seasoned coders alike. Whether you're interested in web development, data science, or mobile app creation, we have the resources and expertise to guide you towards success. Join us on a journey of learning and innovation today!</p>
                        <button onClick={() => navigate.push('/courses')}>Start to learn free</button>
                    </div>
                    <div className={styles.header_img}>
                        <img src="https://cdn2.hexlet.io/assets/main_landing_hero-a0ae296e0b9f2395c6c442b2104000ddc260fabd559bef2b779e5fa039619192.svg" alt="" />
                    </div>
                </div>
            </div>




        </>
        
        
    )
}

export default Home