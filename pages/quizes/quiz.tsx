import styles from './quiz.module.css'
import { RadioGroup, FormControlLabel, Radio, Button } from '@mui/material'
import CircularWithValueLabel from '@/src/components/progressBar/progressBar'
import { quizTypes } from '@/src/store/features/quizes/quizUtils/quizTypes'
import { FunctionComponent } from 'react'
import { useBooks } from '@/src/store/features/books/books'
import { useQuizes } from '@/src/store/features/quizes/quizes'
import QuizInfo from '@/src/components/quizInfo/quizInfo'
import Result from '@/src/components/result/result'
import { useEffect } from 'react'



const Quiz = ({infoIndex}:{infoIndex: number}) =>{
   const {questions, currentQuestionIndex,selectOption, nextQuestion, result, setQuestions} = useQuizes()
   const dropdown = useBooks((state)=>state.dropdown)
   let currentQuestion = useQuizes((state)=> state.questions[currentQuestionIndex]) 


   
    useEffect(()=> {
    const getQuestions = localStorage.getItem('questions')
    if(getQuestions){
        const quiz = JSON.parse(getQuestions)
        setQuestions(quiz.questions, quiz.id-1)
    }
    },[])

   
   const handleCheckboxChange = (event:any)=>{  
       selectOption(event.target.value)
       
   }

   

   const handleNextQuestion = ()=>{
       nextQuestion()
   }

   if (currentQuestionIndex > 9) {
    return( 
        <>
            <Result/>
        </>
        
    ) 
}

   return (
       <>
           {currentQuestion === undefined ? <h1>Loading...</h1> :
               <div className={dropdown ? `${styles.jsQuiz_wrapper} ${styles.dropdown_active}` : styles.jsQuiz_wrapper}>
                   <div className={styles.quiz_container}>
                       <QuizInfo />
                       <div className={styles.quiz_content}>
                           <div className={styles.quiz_header}>
                               <div className={styles.question}>
                                   <span className={styles.q}>Question:</span><span className={styles.id}>{currentQuestion.id}</span><span className={styles.length}> | {questions.length}</span>
                               </div>
                               <CircularWithValueLabel progress={result} />
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
                                           control={<Radio checked={currentQuestion.selected === variant} color="error" />}
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
           }


       </>
       
      
   )
}

export default Quiz