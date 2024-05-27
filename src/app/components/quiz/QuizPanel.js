import { Box, Flex, Button } from "@chakra-ui/react";

import QuizQuestionPanel from "@/app/components/quiz/QuizQuestionPanel";
import QuizAnswerPanel from "@/app/components/quiz/QuizAnswerPanel";

import ArrowRight from "@/app/components/icons/ArrowRight";
import {useState } from "react";


export default function QuizPanel({ quiz }) {
  // const { question, answerOptions, selectedAnswerIdx } = quiz || quizSample;
  const quizSample = quiz || quizSampleM;
  const totalQuestions = quizSample.length;
  let [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  let [selectedAnswerIdx, setSelectedAnswerIdx] = useState(-1);
  let [question, setQuestion] = useState(quizSample[0].question);
  const changeSelectedAnswer = (i)=>{
    attemptedQuestionIndices.push(currentQuestionIdx);
    quizSample[currentQuestionIdx].selectedAnswerIdx = i;
    setSelectedAnswerIdx(i);
  };
  let answerOptions = quizSample[0].answerOptions;
  return (
    <Box p={4}>
      <QuizQuestionPanel
        currentQuestionIdx={currentQuestionIdx}
        question={question}
        attemptedQuestionIndices={attemptedQuestionIndices}
        totalQuestions={totalQuestions}
       />
      <QuizAnswerPanel
        answerOptions={answerOptions}
        selectedAnswerIdx={selectedAnswerIdx}
        changeSelectedAnswer={changeSelectedAnswer}
      />
      <Flex justifyContent="space-between" mt={4}>
        <Button
          variant="outline"
          border="none"
          leftIcon={
            <ArrowRight color="Blue" sx={{ transform: "rotate(180deg)" }} />
          }
          minWidth="30%"
          onClick={async ()=>{previousQuestion()}}
          isDisabled={currentQuestionIdx == 0 ? true: false}
        >
          Previous
        </Button>
        <Button minWidth="30%" rightIcon={<ArrowRight color="white" />} onClick={async ()=>{nextQuestion()}}>
          {currentQuestionIdx==totalQuestions-1 ? "Submit" :"Next"}
        </Button>
      </Flex>
    </Box>
  );


  function previousQuestion(){
    currentQuestionIdx = currentQuestionIdx - 1;
    setCurrentQuestionIdx(currentQuestionIdx);
    setQuestion(quizSample[currentQuestionIdx].question);
    setSelectedAnswerIdx(quizSample[currentQuestionIdx].selectedAnswerIdx);
  }

  function nextQuestion(){
    
    // click on submit button
    if(currentQuestionIdx == totalQuestions-1){
      //generate Quiz Report
      let marks = 0;
      let distinctQues = [];
      distinctQues = attemptedQuestionIndices.filter(function (v, i, self) {
        return i == self.indexOf(v);
    })
      for(let i=0;i<distinctQues.length;i++){
        marks = marks + (quizSample[distinctQues[i]].selectedAnswerIdx == quizSample[distinctQues[i]].answer ? 1 : 0)
      }
      console.log(marks);
      return;
    }
    if(selectedAnswerIdx == -1){
      currentQuestionIdx = currentQuestionIdx + 1;
      setCurrentQuestionIdx(currentQuestionIdx);
      setQuestion(quizSample[currentQuestionIdx].question);
      setSelectedAnswerIdx(quizSample[currentQuestionIdx].selectedAnswerIdx);
    }else{
      attemptedQuestionIndices.push(currentQuestionIdx);
      quizSample[currentQuestionIdx].selectedAnswerIdx = selectedAnswerIdx;
      currentQuestionIdx = currentQuestionIdx + 1;
      setCurrentQuestionIdx(currentQuestionIdx);
      setQuestion(quizSample[currentQuestionIdx].question);
      setSelectedAnswerIdx(quizSample[currentQuestionIdx].selectedAnswerIdx);
      
    }
  }
}

const quizSampleM =
  [{
    question: {
      idx: 0,
      questionText:
        "Which JavaScript operator is used to assign a value to a variable?",
    },
    answerOptions: [{ text: "=" }, { text: "+" }, { text: "*" }, { text: "/" }],
    selectedAnswerIdx: -1,
    answer: 0
  },
  {
    question: {
      idx: 1,
      questionText:
        "Which Python operator is used to assign a value to a variable?",
    },
    answerOptions: [{ text: "=" }, { text: "+" }, { text: "*" }, { text: "/" }],
    selectedAnswerIdx: -1,
    answer: 0
  },
  {
    question: {
      idx: 2,
      questionText:
        "Which Java operator is used to assign a value to a variable?",
    },
    answerOptions: [{ text: "=" }, { text: "+" }, { text: "*" }, { text: "/" }],
    selectedAnswerIdx: -1,
    answer: 0
  }];
const attemptedQuestionIndices = []; // array of the indices of the attempted questions

