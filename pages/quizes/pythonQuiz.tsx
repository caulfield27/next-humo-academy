import useSelectorHook from '@/src/hooks/selectorHook'
import { pySelectOption, pyNextQuestion, pyCheckAnswer, pyResetQuiz } from '@/src/store/features/quizes/pyQuiz'
import Quiz from '@/src/components/quiz/quiz'
import Result from '@/src/components/result/result'

const PyQuiz = () =>{
    const pyQuestions = useSelectorHook((state)=> state.pyQuiz.pyQuestions) 
    const currentQuestion = useSelectorHook((state)=> state.pyQuiz.pyQuestions[state.pyQuiz.currentQuestionIndex])
    const result = useSelectorHook((state)=> state.pyQuiz.result)

    if (!currentQuestion) {
        return( 
            <>
                <Result questions={pyQuestions} infoIndex={3} 
                result={result} resetQuiz={pyResetQuiz}/>
            </>
            
        ) 
    }

    return (
       <>
            <Quiz questions={pyQuestions} currentQuestion={currentQuestion}
                selectOption={pySelectOption} nextQuestion={pyNextQuestion} checkAnswer={pyCheckAnswer}
                infoIndex={3} result={result}
            />
       </> 
       
    )
}

export default PyQuiz