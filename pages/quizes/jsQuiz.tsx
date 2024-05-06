import useSelectorHook from '@/src/hooks/selectorHook'
import { selectOption,nextQuestion, checkAnswer, resetQuiz } from '@/src/store/features/quizes/jsQuiz'
import Quiz from '@/src/components/quiz/quiz'
import Result from '@/src/components/result/result'

const JsQuiz = () =>{
    const jsQuestions = useSelectorHook((state)=> state.jsQuiz.jsQuestions) 
    const currentQuestion = useSelectorHook((state)=> state.jsQuiz.jsQuestions[state.jsQuiz.currentQuestionIndex])
    const result = useSelectorHook((state)=> state.jsQuiz.result)

    if (!currentQuestion) {
        return( 
            <>
                <Result questions={jsQuestions} infoIndex={0} 
                result={result} resetQuiz={resetQuiz}/>
            </>
            
        ) 
    }

    return (
       <>
            <Quiz questions={jsQuestions} currentQuestion={currentQuestion}
                selectOption={selectOption} nextQuestion={nextQuestion} checkAnswer={checkAnswer}
                infoIndex={0} result={result}
            />
       </> 
       
    )
}

export default JsQuiz