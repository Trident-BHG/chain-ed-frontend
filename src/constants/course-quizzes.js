// const chapter_task_1 = [
//   {
//     question: {
//       idx: 0,
//       questionText:
//         "Which JavaScript operator is used to assign a value to a variable?",
//     },
//     answerOptions: [{ text: "=" }, { text: "+" }, { text: "*" }, { text: "/" }],
//     selectedAnswerIdx: -1,
//     answer: 0,
//   },
//   {
//     question: {
//       idx: 1,
//       questionText:
//         "Which Python operator is used to assign a value to a variable?",
//     },
//     answerOptions: [{ text: "=" }, { text: "+" }, { text: "*" }, { text: "/" }],
//     selectedAnswerIdx: -1,
//     answer: 0,
//   },
//   {
//     question: {
//       idx: 2,
//       questionText:
//         "Which Java operator is used to assign a value to a variable?",
//     },
//     answerOptions: [{ text: "=" }, { text: "+" }, { text: "*" }, { text: "/" }],
//     selectedAnswerIdx: -1,
//     answer: 0,
//   },
// ];

const chapter_task_1 = [
  {
    question: {
      idx: 0,
      questionText: "Which language is used for styling web pages?",
    },
    answerOptions: [
      { text: "HTML" },
      { text: "CSS" },
      { text: "JavaScript" },
      { text: "Python" },
    ],
    selectedAnswerIdx: -1,
    answer: 1,
  },
  {
    question: {
      idx: 1,
      questionText: "What does HTML stand for?",
    },
    answerOptions: [
      { text: "Hyper Text Markup Language" },
      { text: "Hyperlinks and Text Markup Language" },
      { text: "Home Tool Markup Language" },
      { text: "Hyper Tool Markup Language" },
    ],
    selectedAnswerIdx: -1,
    answer: 0,
  },
  {
    question: {
      idx: 2,
      questionText: "Which HTML tag is used to define an internal style sheet?",
    },
    answerOptions: [
      { text: "<style>" },
      { text: "<css>" },
      { text: "<script>" },
      { text: "<link>" },
    ],
    selectedAnswerIdx: -1,
    answer: 0,
  },
  {
    question: {
      idx: 3,
      questionText:
        "Which CSS property is used to change the text color of an element?",
    },
    answerOptions: [
      { text: "font-color" },
      { text: "color" },
      { text: "text-color" },
      { text: "fg-color" },
    ],
    selectedAnswerIdx: -1,
    answer: 1,
  },
];

const chapter_task_2 = [
  {
    question: {
      idx: 4,
      questionText: "Which HTML tag is used to define JavaScript?",
    },
    answerOptions: [
      { text: "<js>" },
      { text: "<javascript>" },
      { text: "<script>" },
      { text: "<style>" },
    ],
    selectedAnswerIdx: -1,
    answer: 2,
  },
  {
    question: {
      idx: 5,
      questionText: "Inside which HTML element do we put the JavaScript?",
    },
    answerOptions: [
      { text: "<javascript>" },
      { text: "<scripting>" },
      { text: "<js>" },
      { text: "<script>" },
    ],
    selectedAnswerIdx: -1,
    answer: 3,
  },
  {
    question: {
      idx: 6,
      questionText:
        "What is the correct HTML for referring to an external style sheet?",
    },
    answerOptions: [
      { text: "<link rel='stylesheet' type='text/css' href='mystyle.css'>" },
      { text: "<style src='mystyle.css'>" },
      { text: "<stylesheet>mystyle.css</stylesheet>" },
      { text: "<style href='mystyle.css'>" },
    ],
    selectedAnswerIdx: -1,
    answer: 0,
  },
  {
    question: {
      idx: 7,
      questionText: "Which CSS property controls the text size?",
    },
    answerOptions: [
      { text: "font-size" },
      { text: "text-style" },
      { text: "font-style" },
      { text: "text-size" },
    ],
    selectedAnswerIdx: -1,
    answer: 0,
  },
];

const chapter_task_3 = [
  {
    question: {
      idx: 0,
      questionText:
        "Which attribute is used to specify that an input field must be filled out before submitting the form?",
    },
    answerOptions: [
      { text: "validate" },
      { text: "required" },
      { text: "placeholder" },
      { text: "fill" },
    ],
    selectedAnswerIdx: -1,
    answer: 1,
  },
  {
    question: {
      idx: 1,
      questionText:
        "How do you write 'Hello World' in an alert box using JavaScript?",
    },
    answerOptions: [
      { text: "msgBox('Hello World');" },
      { text: "alertBox('Hello World');" },
      { text: "alert('Hello World');" },
      { text: "msg('Hello World');" },
    ],
    selectedAnswerIdx: -1,
    answer: 2,
  },
  {
    question: {
      idx: 2,
      questionText: "How do you create a function in JavaScript?",
    },
    answerOptions: [
      { text: "function:myFunction()" },
      { text: "function = myFunction()" },
      { text: "function myFunction()" },
      { text: "def myFunction()" },
    ],
    selectedAnswerIdx: -1,
    answer: 2,
  },
  {
    question: {
      idx: 3,
      questionText: "How do you call a function named 'myFunction'?",
    },
    answerOptions: [
      { text: "call function myFunction()" },
      { text: "call myFunction()" },
      { text: "myFunction()" },
      { text: "run myFunction()" },
    ],
    selectedAnswerIdx: -1,
    answer: 2,
  },
];

export const quizData = {
  "chapter-task-1": chapter_task_1,
  "chapter-task-2": chapter_task_2,
  "chapter-task-3": chapter_task_3,
};
