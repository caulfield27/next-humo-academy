import useSelectorHook from '@/src/hooks/selectorHook'
import { htmlSelectOption, htmlCheckAnswer, htmlNextQuestion, htmlResetQuiz } from '@/src/store/features/quizes/htmlQuiz'
import Result from '@/src/components/result/result'
import Quiz from '@/src/components/quiz/quiz'

const HtmlQuiz = () =>{
    const htmlQuestions = useSelectorHook((state)=> state.htmlQuiz.htmlQuestions) 
    const currentQuestion = useSelectorHook((state)=> state.htmlQuiz.htmlQuestions[state.htmlQuiz.currentQuestionIndex])
    const result = useSelectorHook((state)=> state.htmlQuiz.result)

    if (!currentQuestion) {
        return( 
            <>
                <Result questions={htmlQuestions} infoIndex={2} 
                result={result} resetQuiz={htmlResetQuiz}/>
            </>
            
        ) 
    }

    return (
       <>
            <Quiz questions={htmlQuestions} currentQuestion={currentQuestion}
                selectOption={htmlSelectOption} nextQuestion={htmlNextQuestion} checkAnswer={htmlCheckAnswer}
                infoIndex={2} result={result}
            />
       </> 
       
    )
}

export default HtmlQuiz