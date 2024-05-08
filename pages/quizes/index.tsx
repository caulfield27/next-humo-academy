import styles from './index.module.css'
import { quizInterfaces, quizes } from '../../src/utils/quizInfo';
import useSelectorHook from '@/src/hooks/selectorHook';
import { useRouter } from 'next/navigation';
import { Rating } from '@mui/material';



const Quizes = () => {
    const navigate = useRouter()
    const dropdown = useSelectorHook((state)=> state.books.dropdown)
    
    const OpenQuiz = (quiz:quizInterfaces) =>{
        navigate.push(quiz.path)
    }

    return (
        <>
            <div className={dropdown ? `${styles.quiz_wrapper} ${styles.dropdown_active}` : styles.quiz_wrapper}>
                <div className={styles.quizes_container}>
                    {quizes.map((quiz, ind) => {
                        return <div className={styles.quiz_card} key={ind + 1} onClick={() => OpenQuiz(quiz)}>
                            <span className={styles.quiz_name}>{quiz.name}</span>
                            <img src={quiz.img} alt={quiz.name} />
                            <span>complexity:</span>
                            <Rating className={styles.raiting} name="quiz-complex" value={quiz.complexity} precision={0.5} readOnly />
                        </div>
                    })}
                </div>
            </div>
           
            
        </>
    )
}
 
export default Quizes;