import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Box,
  Text,
  StackDivider,
  Container,
  HStack,
  VStack,
  Button,
  Flex,
} from "@chakra-ui/react";

import ArrowRight from "@/app/components/icons/ArrowRight";
import StarRatings from "@/app/components/StarRatings";

export default function HeroSection({ course, ...rest }) {
  const { duration, author, details } = course || {};
  const { noOfEnrolledStudents } = details || {};

  const rating = 5;

  return (
    <HStack
      maxW="100%"
      p={8}
      borderRadius="md"
      mb={2}
      bgColor="gray.50"
      alignItems="flex-start"
      {...rest}
    >
      <Box width="25%" mr={4}>
        <img
          alt="Hero Image"
          align="center"
          width="100%"
          src="/course_details.jpg"
        />
      </Box>
      <VStack mr={40} alignItems="flex-start">
        <Box>
          <Heading mb={2}>Javascript for Beginners</Heading>
          <Text fontWeight="500" color="gray.500">
            Get on the fast track to a career in JavaScript. In this certificate
            program, you'll learn and earn in-demand skills at your own pace, no
            degree or experience required.
          </Text>
        </Box>
        <HStack gap="16" mt={4}>
          <Text>
            Duration:{" "}
            <Text as="span" color="black" fontWeight="500" ml={4}>
              16 weeks
            </Text>
          </Text>
          <Text>
            By:
            <Text as="span" color="black" fontWeight="500" ml={4}>
              Wisdom Umanah
            </Text>
          </Text>
          <Text display="inline-flex" alignItems="center">
            Rating:
            <HStack display="inline-flex" spacing="1" ml={4}>
              {typeof rating === "number" && (
                <>
                  <Flex display="inline-flex" gap={1}>
                    <StarRatings rating={rating} color="yellow.500" />
                    <StarRatings rating={5 - rating} color="gray.500" />
                  </Flex>
                </>
              )}
            </HStack>
          </Text>
        </HStack>
        <HStack mt={4}>
          <Button
            variant="solid"
            rightIcon={<ArrowRight color={"white"} />}
            width="xs"
          >
            Enroll Now
          </Button>
          <Text ml={4}>218,934 enrolled and earn already</Text>
        </HStack>
      </VStack>
    </HStack>
  );
}
