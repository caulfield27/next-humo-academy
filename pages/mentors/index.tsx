import styles from './index.module.css'
import useSelectorHook from '@/src/hooks/selectorHook'
import { useBooks } from '@/src/store/features/books/books'
import { mentors } from '@/src/utils/mentorsInfo'


const Mentors = ()=>{

    const dropdown = useBooks((state)=> state.dropdown)


    return (
        <>

                <div className={dropdown ? `${styles.mentors_wrapper} ${styles.adaptive_wrapper}` : styles.mentors_wrapper}>
                    <div className={styles.mentors_header}>
                        <img src='/mentors.jpg' alt="mentors" />
                        <h1>Humo academy mentors</h1>
                    </div>
                    <hr className={styles.hr} />
                    <div className={styles.mentors_container}>
                        {mentors.map((mentor, id) =>
                            <div key={id + 1} className={styles.mentors_card}>
                                <div>
                                    <img src={mentor.img} alt="mentor" />
                                </div>
                                <span className={styles.name}>{mentor.name}</span>
                                <span className={styles.role}>{mentor.role}</span>
                                <div className={styles.mentor_description}>{mentor.description}</div>
                            </div>
                        )}

                    </div>
                </div>

           

        </>
        
    )
}

export default Mentors