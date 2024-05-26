import { Box, Flex, Button } from "@chakra-ui/react";

import QuizQuestionPanel from "@/app/components/quiz/QuizQuestionPanel";
import QuizAnswerPanel from "@/app/components/quiz/QuizAnswerPanel";

import ArrowRight from "@/app/components/icons/ArrowRight";

export default function QuizPanel({ quiz }) {
  const { question, answerOptions, selectedAnswerIdx } = quiz || quizSample;
  return (
    <Box p={4}>
      <QuizQuestionPanel
        currentQuestionIdx={2}
        question={question}
        attemptedQuestionIndices={attemptedQuestionIndices}
      />
      <QuizAnswerPanel
        answerOptions={answerOptions}
        selectedAnswerIdx={selectedAnswerIdx}
      />
      <Flex justifyContent="space-between" mt={4}>
        <Button
          variant="outline"
          border="none"
          leftIcon={
            <ArrowRight color="Blue" sx={{ transform: "rotate(180deg)" }} />
          }
          minWidth="30%"
        >
          Previous
        </Button>
        <Button minWidth="30%" rightIcon={<ArrowRight color="white" />}>
          Next
        </Button>
      </Flex>
    </Box>
  );
}

const quizSample = {
  question: {
    questionText:
      "Which JavaScript operator is used to assign a value to a variable?",
  },
  answerOptions: [{ text: "=" }, { text: "+" }, { text: "*" }, { text: "/" }],
  selectedAnswerIdx: 2,
};
const attemptedQuestionIndices = [0, 1, 4, 10]; // array of the indices of the attempted questions
