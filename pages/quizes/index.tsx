import styles from './index.module.css'
import { useRouter } from 'next/navigation';
import { Rating } from '@mui/material';
import { useBooks } from '@/src/store/features/books/books';
import { quizes } from '@/src/store/features/quizes/quizUtils/questions';
import { IGlobalQuestions } from '@/src/store/features/quizes/quizUtils/quizTypes';
import { useQuizes } from '@/src/store/features/quizes/quizes';




const Quizes = () => {
    const navigate = useRouter()
    const dropdown = useBooks((state)=> state.dropdown)
    const setQuestions = useQuizes((state)=> state.setQuestions)
    const resetQuiz = useQuizes((state)=> state.resetQuiz)
    

    
    const OpenQuiz = (quiz:IGlobalQuestions) =>{
        navigate.push('/quizes/quiz')
        setQuestions(quiz)
        localStorage.setItem('questions', JSON.stringify(quiz))
        resetQuiz()
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