import styles from './resultModal.module.css'
import useDispatchHook from '@/src/hooks/dispatchHook'
import useSelectorHook from '@/src/hooks/selectorHook'
import { quizTypes } from '@/src/store/features/quizes/quizUtils/quizTypes'
import { FunctionComponent } from 'react'
import { setQuizModal } from '@/src/store/features/quizes/quizUtils/quizModal'

interface Props{
    questions:quizTypes[]
}

const ResultModal:FunctionComponent<Props> = ({questions})=>{
    const modal = useSelectorHook((state)=> state.quizModal.modal)
    const dispatch = useDispatchHook()

   
    const handleAnswersModal = () =>{
        dispatch(setQuizModal(false))
    }

   


    return (
       
        <div className={modal ? styles.modal_wrapper : styles.modal_close}>
            <div className={styles.modal}>
                <div className={styles.modal_content}>
                    <div className={styles.modal_header}>
                        <button onClick={handleAnswersModal}>&#10006;</button>
                    </div>
                    <div className={styles.modal_body}>
                            {questions.map((question, ind) =>
                                <div className={styles.question_wrap} key={ind + 1}>
                                    <div className={styles.modal_question}>Quesrtion {question.id} :</div>
                                    <div className={styles.question}>{question.question}</div>
                                    <div className={styles.options_wrap}>
                                        {question.variants.map((option, id) =>

                                            <div className={option === question.correct ? styles.correct_background : (option === question.selected ? styles.wrong_background : styles.variants)} key={id + 1}>
                                                <img className={option === question.correct ? styles.correct : styles.display_none} src={option === question.correct ? '/13984041.png' : ''} alt="" />
                                                <div className={styles.answer_wrap}>
                                                    <div>{option}</div>
                                                    <span className={option === question.selected ? styles.your_answer : styles.display_none}>your answer</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ResultModal