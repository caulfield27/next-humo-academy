export interface quizInterfaces{
    name:string,
    path: string,
    complexity: number,
    img: string

}


export const quizes:quizInterfaces[] = [
    {
        name:'Java Script basics',
        path:'/quizes/jsQuiz',
        complexity: 2,
        img: 'https://itproger.com/img/tests/node-js.svg'
    },
    {
        name:'React quiz',
        path:'/quizes/reactQuiz',
        complexity: 3.5,
        img: 'https://itproger.com/img/tests/react-js.svg'
    },
    {
        name:'HTML & CSS',
        path:'/quizes/htmlQuiz',
        complexity:2.5,
        img: 'https://itproger.com/img/tests/html.svg'
    },
    {
        name:'Python',
        path:'/quizes/pythonQuiz',
        complexity: 5,
        img: 'https://itproger.com/img/tests/python.svg'
    },
]