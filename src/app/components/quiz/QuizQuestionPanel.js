import {
  VStack,
  Flex,
  Box,
  Text,
  Center,
  Circle,
  Icon,
  Image,
} from "@chakra-ui/react";
import ClockIcon from "@/app/components/icons/ClockIcon";
import { TimeIcon } from "@chakra-ui/icons";

export default function QuizQuestionPanel({
  question,
  currentQuestionIdx,
  attemptedQuestionIndices,
  totalQuestions,
}) {
  const { questionText } = question || {};
  return (
    <>
      <Flex flexDirection="column" width="100%">
        <QuestionTopBar
          questionCount={totalQuestions}
          currentQuestionIdx={currentQuestionIdx}
          attemptedQuestionIndices={attemptedQuestionIndices}
        />
        <Box py={8} px={4} bgColor="gray.50" borderRadius="2px">
          <Text fontWeight="500" color="gray.600">
            Question {currentQuestionIdx + 1}
          </Text>
          <Text fontSize="lg" fontWeight="700" mt={2}>
            {questionText}
          </Text>
        </Box>
      </Flex>
    </>
  );
}

function QuestionTopBar({
  questionCount = 0,
  currentQuestionIdx,
  attemptedQuestionIndices,
}) {
  const countArr = Array.from(Array(questionCount).keys());
  return (
    <Flex
      bgColor="brand.100"
      width="100%"
      p={2}
      borderRadius="2px"
      justifyContent="space-between"
    >
      <Box>
        {countArr.map((i) => {
          const isCurrent = i === currentQuestionIdx;
          const bgColor =
            !isCurrent && attemptedQuestionIndices.includes(i)
              ? "brand.600"
              : "white";
          const textColor =
            !isCurrent && attemptedQuestionIndices.includes(i)
              ? "white"
              : "brand.600";
          return (
            <Circle
              bgColor={bgColor}
              color={textColor}
              border="2px"
              borderColor={isCurrent ? "brand.600" : "transparent"}
              key={i}
              display="inline-flex"
              mr={4}
              px="2"
              py={i < 9 ? "initial" : 0}
            >
              <Text>{i + 1}</Text>
            </Circle>
          );
        })}
      </Box>
    </Flex>
  );
}
