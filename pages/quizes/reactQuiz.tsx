import useSelectorHook from '@/src/hooks/selectorHook'
import { reactSelectOption, reactCheckAnswer, reactNextQuestion,resetReactQuiz } from '@/src/store/features/quizes/reactQuiz'
import Quiz from '@/src/components/quiz/quiz'
import Result from '@/src/components/result/result'

const ReactQuiz = () =>{
    const reactQuestions = useSelectorHook((state)=> state.reactQuiz.reactQuestions) 
    const currentQuestion = useSelectorHook((state)=> state.reactQuiz.reactQuestions[state.reactQuiz.currentQuestionIndex])
    const result = useSelectorHook((state)=> state.reactQuiz.result)

    if (!currentQuestion) {
        return( 
            <>
                <Result questions={reactQuestions} infoIndex={1} 
                result={result} resetQuiz={resetReactQuiz}/>
            </>
            
        ) 
    }

    return (
       <>
            <Quiz questions={reactQuestions} currentQuestion={currentQuestion}
                selectOption={reactSelectOption} nextQuestion={reactNextQuestion} checkAnswer={reactCheckAnswer}
                infoIndex={1} result={result}
            />
       </> 
       
    )
}

export default ReactQuiz