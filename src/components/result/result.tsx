import styles from './result.module.css'
import ResultModal from "../resultModal/resultModal";
import useSelectorHook from "@/src/hooks/selectorHook";
import useDispatchHook from "@/src/hooks/dispatchHook";
import { setQuizModal } from "@/src/store/features/quizes/quizUtils/quizModal";
import { Button, Rating } from "@mui/material";
import ChecklistIcon from '@mui/icons-material/Checklist';
import CircularWithValueLabel from "../progressBar/progressBar";
import { quizes } from '@/src/utils/quizInfo';
import { quizTypes } from '@/src/store/features/quizes/quizUtils/quizTypes';
import { FunctionComponent } from 'react';

interface Props{
    infoIndex: number,
    result: number,
    questions: quizTypes[],
    resetQuiz: Function


}


const Result:FunctionComponent<Props> = ({questions, infoIndex, result,resetQuiz}) => {
    const dropdown = useSelectorHook((state)=> state.books.dropdown)
    const dispatch = useDispatchHook()
    
    const handleReset =  ()=>{
        dispatch(resetQuiz())
    }

    let maxPoint = 0;
    for(let i = 0; i < questions.length; i++){
        maxPoint += 10
    }

    return( 
        <>
            <ResultModal questions={questions} />
            <div className={dropdown ? `${styles.completed} ${styles.dropdown_active}` : styles.completed}>
                <div className={styles.completed_image}>
                    <img src='/completeOrange.jpg' alt="" />
                    <div className={styles.quiz_info}>
                        <img src={quizes[infoIndex].img} alt="js" />
                        <div className={styles.info_text}>
                            <span className={styles.name_info}>name:<span className={styles.name}>{quizes[infoIndex].name}</span></span>
                            <div className={styles.complex}>
                                <span className={styles.complex_text}>complexity:</span>
                                <Rating className={styles.raiting} name="quiz-complex" value={quizes[infoIndex].complexity} precision={0.5} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.completed_result}>
                    <h1>Quiz completed! Your final result</h1>
                    <span className={styles.final_result}>{`${result} of ${maxPoint} points`}</span>
                    <CircularWithValueLabel progress={result} />
                    <div className={styles.complete_button_wrap}>
                        <Button variant="contained" color="success" onClick={() => dispatch(setQuizModal(true))}>
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