import styles from './quiz.module.css'
import { RadioGroup, FormControlLabel, Radio, Button } from '@mui/material'
import useDispatchHook from '@/src/hooks/dispatchHook'
import useSelectorHook from '@/src/hooks/selectorHook'
import QuizInfo from '../quizInfo/quizInfo'
import CircularWithValueLabel from '../progressBar/progressBar'
import { quizTypes } from '@/src/store/features/quizes/quizUtils/quizTypes'
import { FunctionComponent } from 'react'

interface Props{
    questions:quizTypes[],
    currentQuestion:quizTypes,
    selectOption:Function,
    nextQuestion: Function,
    checkAnswer: Function,
    infoIndex: number,
    result: number

}

const Quiz:FunctionComponent<Props> = ({questions, currentQuestion, 
    selectOption, nextQuestion,checkAnswer,infoIndex,
    result}) =>{
   
   const dropdown = useSelectorHook((state)=>state.books.dropdown)
   const dispatch = useDispatchHook()
  

   
   const handleCheckboxChange = (event:any)=>{  
       dispatch(selectOption(event.target.value))
       
   }

   

   const handleNextQuestion = ()=>{
       const isCorrect = currentQuestion.selected === currentQuestion.correct
       dispatch(checkAnswer(isCorrect));
       dispatch(nextQuestion());
   }

   return (
       <>
          
               <div className={dropdown ? `${styles.jsQuiz_wrapper} ${styles.dropdown_active}` : styles.jsQuiz_wrapper}>
                   <div className={styles.quiz_container}>
                       <QuizInfo infoIndex={infoIndex}/>         
                       <div className={styles.quiz_content}>
                           <div className={styles.quiz_header}>
                               <div className={styles.question}>
                                   <span className={styles.q}>Question:</span><span className={styles.id}>{currentQuestion.id}</span><span className={styles.length}> | {questions.length}</span>
                               </div>
                               <CircularWithValueLabel progress={result}/>
                           </div>
                           <div>
                               <p>{currentQuestion.question}</p>
                           </div>
                           <div className={styles.quiz_body}>
                               <RadioGroup
                                   aria-labelledby="quiz-options"
                                   defaultValue="quiz"
                                   name="quiz-options"
                                   value={currentQuestion.selected || ''}
                                   onChange={handleCheckboxChange}
                                   className={styles.options_wrap}
                               >

                                   {currentQuestion.variants.map((variant, ind) => {
                                       return <FormControlLabel
                                           key={ind + 1}
                                           value={variant} 
                                           control={<Radio checked={currentQuestion.selected === variant} color="error"/>}
                                           label={variant}
                                           className={styles.quiz_options}
                                           
                                       />
                                   })}
                               </RadioGroup>

                           </div>
                           <div className={styles.quiz_footer}>
                               <Button disabled={!currentQuestion.selected} variant="contained" color="success" onClick={handleNextQuestion}>
                                   {currentQuestion.id == questions.length ? 'Finish' : `Next`}

                               </Button>   
                           </div>
                       </div>

                   </div>
               </div>
           
       </>
       
      
   )
}

export default Quiz