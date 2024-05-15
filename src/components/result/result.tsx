import styles from './result.module.css'
import ResultModal from "../resultModal/resultModal";
import { Button, Rating } from "@mui/material";
import ChecklistIcon from '@mui/icons-material/Checklist';
import CircularWithValueLabel from "../progressBar/progressBar";
import { quizTypes } from '@/src/store/features/quizes/quizUtils/quizTypes';
import { FunctionComponent } from 'react';
import { useBooks } from '@/src/store/features/books/books';
import { useQuizes } from '@/src/store/features/quizes/quizes';
import { quizes } from '@/src/store/features/quizes/quizUtils/questions';


const Result = () => {
    const dropdown = useBooks((state)=> state.dropdown)
    const {resetQuiz, questions, result, currentQuiz, setQuizModal
    } = useQuizes()
    
    
    const handleReset =  ()=>{
        resetQuiz()
    }

    let maxPoint = 0;
    for(let i = 0; i < questions.length; i++){
        maxPoint += 10
    }

    return( 
        <>
            <ResultModal />
            <div className={dropdown ? `${styles.completed} ${styles.dropdown_active}` : styles.completed}>
                <div className={styles.completed_image}>
                    <img src='/completeOrange.jpg' alt="" />
                    <div className={styles.quiz_info}>
                        <img src={quizes[currentQuiz].img} alt="js" />
                        <div className={styles.info_text}>
                            <span className={styles.name_info}>name:<span className={styles.name}>{quizes[currentQuiz].name}</span></span>
                            <div className={styles.complex}>
                                <span className={styles.complex_text}>complexity:</span>
                                <Rating className={styles.raiting} name="quiz-complex" value={quizes[currentQuiz].complexity} precision={0.5} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.completed_result}>
                    <h1>Quiz completed! Your final result</h1>
                    <span className={styles.final_result}>{`${result} of ${maxPoint} points`}</span>
                    <CircularWithValueLabel progress={result} />
                    <div className={styles.complete_button_wrap}>
                        <Button variant="contained" color="success" onClick={() => setQuizModal(true)}>
                            <ChecklistIcon className={styles.button_icon} />show answers
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleReset}>
                            try again
                        </Button>

                    </div>

                </div>

            </div>
            
        </>
        
    ) 
}
 
export default Result;