import styles from './resultModal.module.css'
import { quizTypes } from '@/src/store/features/quizes/quizUtils/quizTypes'
import { useQuizes } from '@/src/store/features/quizes/quizes'

const ResultModal = ()=>{
    const {questions, setQuizModal, quizModal} = useQuizes()
    

   
    const handleAnswersModal = () =>{
        setQuizModal(false)
    }

   


    return (
       
        <div className={quizModal ? styles.modal_wrapper : styles.modal_close}>
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