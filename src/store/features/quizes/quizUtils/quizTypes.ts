export interface quizTypes{
    id:number,
    question: string,
    variants: string[],
    correct:string,
    selected: null | string,
    isCorrect: boolean
}

export interface jsQuizInit{
    jsQuestions:quizTypes[],
    currentQuestionIndex: number,
    result: number
}
export interface reactQuizInit{
    reactQuestions:quizTypes[],
    currentQuestionIndex: number,
    result: number
}
export interface htmlQuizInit{
    htmlQuestions:quizTypes[],
    currentQuestionIndex: number,
    result: number
}
export interface pythonQuizInit{
    pyQuestions:quizTypes[],
    currentQuestionIndex: number,
    result: number
}