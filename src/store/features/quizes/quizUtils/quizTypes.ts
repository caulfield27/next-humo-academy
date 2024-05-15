export interface quizTypes{
    id:number,
    question: string,
    variants: string[],
    correct:string,
    selected: null | string,
    isCorrect: boolean
}

export interface IGlobalQuestions{
    id:number,
    name:string,
    complexity: number,
    img: string,
    questions: quizTypes[]
}

export interface IQuizState{
    questions:quizTypes[],
    currentQuestionIndex: number,
    currentQuiz: number,
    result: number,
    quizModal: boolean

}