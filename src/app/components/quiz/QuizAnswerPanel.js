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

const answerOptionNo = ["A", "B", "C", "D"];

export default function QuizAnswerPanel({ answerOptions, selectedAnswerIdx }) {
  return (
    <Box
      borderRadius="2px"
      border="1px"
      borderColor="gray.200"
      px={2}
      py={8}
      mt={8}
    >
      {answerOptions.map(({ text }, i) => {
        const isSelected = selectedAnswerIdx === i;
        return (
          <Center
            as="Button"
            display="flex"
            key={`ans-key-${i}`}
            minWidth="60%"
            bgColor={isSelected ? "brand.500" : "white"}
            mb="4"
            color={isSelected ? "white" : "gray.500"}
            p={2}
            justifyContent="flex-start"
            border="1px"
            borderRadius="6px"
            borderColor={isSelected ? "brand.500" : "gray.200"}
            fontWeight="600"
          >
            <Circle
              bgColor="white"
              mr="4"
              px="3"
              py="1.5"
              border="1px"
              borderColor={isSelected ? "brand.500" : "gray.200"}
              color={isSelected ? "brand.500" : "gray.500"}
            >
              {answerOptionNo[i]}
            </Circle>
            <Text as="span">{text}</Text>
          </Center>
        );
      })}
    </Box>
  );
}
