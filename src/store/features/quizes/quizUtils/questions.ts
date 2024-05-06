import { quizTypes } from "./quizTypes"

export const jsQuestions:quizTypes[] = [
    {
        id: 1,
        question:'What does DOM stand for in JavaScript?',
        variants: ['Document Object Model','Data Object Model','Document Order Model','Dynamic Object Manipulation'],
        correct: 'Document Object Model',
        selected: null,
        isCorrect:false
    },
    {
        id: 2,
        question:'Which of the following is NOT a primitive data type in JavaScript?',
        variants: ['String','Array','Boolean','Number'],
        correct: 'Array',
        selected: null,
        isCorrect:false
    },
    {
        id: 3,
        question:'What does the typeof operator return for a function in JavaScript?',
        variants: ['"function"','"object"','"array"','"undefined"'],
        correct: '"object"',
        selected: null,
        isCorrect:false
    },
    {
        id: 4,
        question:'Which method is used to add a new element at the end of an array in JavaScript?',
        variants: ['push()','add()','append()','insert()'],
        correct: 'push()',
        selected: null,
        isCorrect:false
    },
    {
        id: 5,
        question:'What is the purpose of setTimeout() function in JavaScript?',
        variants: ['To pause the execution of a function for a specific time period',
                    'To execute a function after a specific time interval',
                    'To set the timeout for AJAX requests',
                    'To set the time zone of the browser'],
        correct: 'To execute a function after a specific time interval',
        selected: null,
        isCorrect:false
    },
    {
        id: 6,
        question:'Какие функции выполняет JS?',
        variants: ['Выполняет работу с сервером',
                    'Создает разметку на странице сайта',
                    'Создает стилевое оформление сайта',
                    'Отвечает за функции на стороне клиента'],
        correct: 'Отвечает за функции на стороне клиента',
        selected: null,
        isCorrect:false
    },
    {
        id: 7,
        question:'Which method is used to remove the last element from an array in JavaScript?',
        variants: ['pop()','remove()','deleteLast()','splice()'],
        correct: 'pop()',
        selected: null,
        isCorrect:false
    },
    {
        id: 8,
        question:'What does the NaN keyword represent in JavaScript?',
        variants: ['Not a Number','Null and None','Negative Number','Numeric Array'],
        correct: 'Not a Number',
        selected: null,
        isCorrect:false
    },
    {
        id: 9,
        question:'Which operator is used to concatenate two or more strings in JavaScript?',
        variants: ['+','&','||',','],
        correct: '+',
        selected: null,
        isCorrect:false
    },
    {
        id: 10,
        question:'What does the spread syntax (...) do when used with objects in JavaScript?',
        variants: ['Combines multiple objects into one object',
                    'Creates a shallow copy of an object',
                    'Converts an object into an array of its values',
                    'Adds new properties to an existing object'],
        correct: 'Creates a shallow copy of an object',
        selected: null,
        isCorrect:false
    },
]


export const reactQuestions:quizTypes[] = [
    {
        id: 1,
        question:"Which of the following best describes the purpose of React's useReducer() hook?",
        variants: ['To manage complex state logic in functional components.',
                    'To handle side effects in functional components.',
                    'To control the rendering behavior of functional components.',
                    'To create reusable components in React.'],
        correct: 'To manage complex state logic in functional components.',
        selected: null,
        isCorrect:false
    },
    {
        id: 2,
        question:'In React, what is the primary role of the key prop when rendering lists?',
        variants: ['It specifies the index of the element in the list.',
                    'It uniquely identifies each element in the list.',
                    'It defines the styling for each element in the list.',
                    'It determines the order of elements in the list.'],
        correct: 'It uniquely identifies each element in the list.',
        selected: null,
        isCorrect:false
    },
    {
        id: 3,
        question:"Which of the following accurately describes React's virtual DOM?",
        variants: ["It's an alternative to the actual DOM used in server-side rendering.",
                    "It's a lightweight version of the actual DOM used for testing purposes.",
                    "It's an in-memory representation of the actual DOM, used to improve performance.",
                    "It's a separate layer between React components and the browser's rendering engine."],
        correct: "It's an in-memory representation of the actual DOM, used to improve performance.",
        selected: null,
        isCorrect:false
    },
    {
        id: 4,
        question:"What does React's Fragment component allow you to do?",
        variants: ['Create reusable component templates.',
                    'Render multiple children without a parent wrapper.',
                    'Define custom lifecycle methods for functional components.',
                    'Implement conditional rendering in React components.'],
        correct: 'Render multiple children without a parent wrapper.',
        selected: null,
        isCorrect:false
    },
    {
        id: 5,
        question:'In React, what is the primary purpose of the React.memo() function?',
        variants: ['To memoize data fetching operations.',
                    'To create higher-order components.',
                    'To memoize the output of functional components.',
                    'To optimize rendering performance of class components.'],
        correct: 'To memoize the output of functional components.',
        selected: null,
        isCorrect:false
    },
    {
        id: 6,
        question:'Which of the following hooks is used for performing side effects in React functional components?',
        variants: ['"useState()"',
                    '"useEffect()"',
                    '"useReducer()"',
                    '"useContext()"'],
        correct: '"useEffect()"',
        selected: null,
        isCorrect:false
    },
    {
        id: 7,
        question:' What is the primary difference between controlled and uncontrolled components in React?',
        variants: ['Controlled components are stateless, while uncontrolled components manage their own state.',
                    'Controlled components manage their own state internally, while uncontrolled components rely on external state management.',
                    'Controlled components use the virtual DOM, while uncontrolled components directly manipulate the actual DOM.',
                    "Controlled components have their form elements' values controlled by React state, while uncontrolled components manage their own state internally."],
        correct: "Controlled components have their form elements' values controlled by React state, while uncontrolled components manage their own state internally.",
        selected: null,
        isCorrect:false
    },
    {
        id: 8,
        question:"Which of the following statements accurately describes React's context API?",
        variants: ['It provides a way to pass data through the component tree without using props.',
                    'It allows components to share state without using Redux or other state management libraries.',
                    "It's primarily used for routing purposes in React applications.",
                    "It's a tool for defining global CSS styles in React components."],
        correct: 'It provides a way to pass data through the component tree without using props.',
        selected: null,
        isCorrect:false
    },
    {
        id: 9,
        question:'What is the primary role of the useCallback() hook in React?',
        variants: ['To memoize functions, preventing unnecessary re-renders of components.',
                    'To manage complex state logic in functional components.',
                    'To handle asynchronous data fetching operations.',
                    'To create reusable custom hooks for React components.'],
        correct: 'To memoize functions, preventing unnecessary re-renders of components.',
        selected: null,
        isCorrect:false
    },
    {
        id: 10,
        question:'Which of the following accurately describes the difference between class components and functional components in React?',
        variants: ['Class components have access to lifecycle methods, while functional components do not. ',
                    'Functional components can have local state, while class components cannot.',
                    'Class components use arrow functions for rendering, while functional components use regular functions.',
                    'Functional components can only be used for presentational purposes, while class components are required for business logic.'],
        correct: 'Class components have access to lifecycle methods, while functional components do not.',
        selected: null,
        isCorrect:false
    },
]

export const htmlQuestions:quizTypes[] = [
    {
        id: 1,
        question:"What does HTML stand for?",
        variants: ['Hyper Text Markup Language',
                    'High Text Machine Language',
                    'Hyperlinks and Text Markup Language',
                    'Home Tool Markup Language'],
        correct: 'Hyper Text Markup Language',
        selected: null,
        isCorrect:false
    },
    {
        id: 2,
        question:'Which tag is used to define an unordered list in HTML?',
        variants: ['<ul>',
                    '<ol>',
                    '<li>',
                    '<list>'],
        correct: '<ul>',
        selected: null,
        isCorrect:false
    },
    {
        id: 3,
        question:"What does CSS stand for?",
        variants: ["Computer Style Sheets",
                    "Creative Style Sheets",
                    "Cascading Style Sheets",
                    "Colorful Style Sheets"],
        correct: "Cascading Style Sheets",
        selected: null,
        isCorrect:false
    },
    {
        id: 4,
        question:"Which CSS property is used to change the text color of an element?",
        variants: ['text-color',
                    'color',
                    'font-color',
                    'text-style'],
        correct: 'color',
        selected: null,
        isCorrect:false
    },
    {
        id: 5,
        question:'What is the correct HTML element for inserting a line break?',
        variants: ['<br>',
                    '<break>',
                    '<lb>',
                    '<line>'],
        correct: '<br>',
        selected: null,
        isCorrect:false
    },
    {
        id: 6,
        question:'Which CSS property controls the spacing between elements?',
        variants: ['margin',
                    'padding',
                    'space',
                    'gap'],
        correct: 'gap',
        selected: null,
        isCorrect:false
    },
    {
        id: 7,
        question:'What is the purpose of the HTML <head> tag?',
        variants: ['It defines the main content of the document.',
                    'It contains metadata about the document.',
                    'It specifies a header for a document or section.',
                    "It defines a footer for a document or section."],
        correct: "It contains metadata about the document.",
        selected: null,
        isCorrect:false
    },
    {
        id: 8,
        question:"How can you make a text appear bold in HTML?",
        variants: ['<strong>',
                    '<bold>',
                    '<b>',
                    '<big>'],
        correct: '<strong>',
        selected: null,
        isCorrect:false
    },
    {
        id: 9,
        question:'Which CSS property is used to set the background color of an element?',
        variants: ['color',
                    'background-color',
                    'background',
                    'bgcolor'],
        correct: 'background-color',
        selected: null,
        isCorrect:false
    },
    {
        id: 10,
        question:'What is the correct HTML for creating a hyperlink?',
        variants: ['<a href="https://example.com">Click here</a>',
                    '<link href="https://example.com">',
                    '<hyperlink>https://example.com\</hyperlink>',
                    '<href="https://example.com">Click here</href>'],
        correct: '<a href="https://example.com">Click here</a>',
        selected: null,
        isCorrect:false
    },
]

export const pyQuestions:quizTypes[] = [
    {
        id: 1,
        question:"What is the purpose of the lambda function in Python?",
        variants: ['To create anonymous functions',
                    'To define class methods',
                    'To perform mathematical operations only',
                    'To declare global variables'],
        correct: 'To create anonymous functions',
        selected: null,
        isCorrect:false
    },
    {
        id: 2,
        question:' What does the zip() function do in Python?',
        variants: ['Combines two dictionaries into one',
                    'Matches elements of iterables based on index',
                    'Sorts elements in ascending order',
                    'Reverses the order of elements in a list'],
        correct: 'Matches elements of iterables based on index',
        selected: null,
        isCorrect:false
    },
    {
        id: 3,
        question:"What is the difference between append() and extend() methods in Python lists?",
        variants: ["append() adds an element to the end of a list, while extend() adds multiple elements to the end of a list.",
                    "append() adds multiple elements to a list, while extend() adds an element to the end of a list.",
                    "Both append() and extend() add elements to the beginning of a list.",
                    "append() and extend() are used interchangeably in Python."],
        correct: "append() adds an element to the end of a list, while extend() adds multiple elements to the end of a list.",
        selected: null,
        isCorrect:false
    },
    {
        id: 4,
        question:"What is the output of 2 ** 3 ** 2 in Python?",
        variants: ['64',
                    '512',
                    '12',
                    '144'],
        correct: '512',
        selected: null,
        isCorrect:false
    },
    {
        id: 5,
        question:'How do you open a file named "data.txt" in read mode in Python?',
        variants: ['file = open("data.txt", mode="r")',
                    'file = open("data.txt", "read")',
                    'file = open("data.txt")',
                    'file = open("data.txt", mode="read")'],
        correct: 'file = open("data.txt")',
        selected: null,
        isCorrect:false
    },
    {
        id: 6,
        question:'What is the purpose of the __init__ method in Python classes?',
        variants: ['To initialize class variables',
                    'To define private methods',
                    'To create instances of the class',
                    'To define class attributes'],
        correct: 'To initialize class variables',
        selected: null,
        isCorrect:false
    },
    {
        id: 7,
        question:'What does the super() function do in Python?',
        variants: ['Calls the superclass constructor',
                    'Returns a list of all superclass methods',
                    'Accesses private variables of the superclass',
                    "Terminates the program execution"],
        correct: "Calls the superclass constructor",
        selected: null,
        isCorrect:false
    },
    {
        id: 8,
        question:" What is the difference between a shallow copy and a deep copy in Python?",
        variants: ['A shallow copy creates a new object with references to the original nested objects, while a deep copy creates a completely independent copy of nested objects.',
                    'A shallow copy creates a completely independent copy of nested objects, while a deep copy creates a new object with references to the original nested objects',
                    'Both shallow copy and deep copy create new objects with references to the original nested objects.',
                    'Shallow copy and deep copy are synonymous in Python.'],
        correct: 'A shallow copy creates a new object with references to the original nested objects, while a deep copy creates a completely independent copy of nested objects.',
        selected: null,
        isCorrect:false
    },
    {
        id: 9,
        question:'How do you remove an element from a set in Python?',
        variants: ['Using remove(element) method',
                    'Using pop() method',
                    'Using discard(element) method',
                    'All of the above'],
        correct: 'All of the above',
        selected: null,
        isCorrect:false
    },
    {
        id: 10,
        question:'What is the purpose of the __str__ method in Python classes?',
        variants: ['To convert an object to a string representation',
                    'To compare two objects for equality',
                    'To check if an object exists',
                    'To raise exceptions'],
        correct: 'To convert an object to a string representation',
        selected: null,
        isCorrect:false
    },
]