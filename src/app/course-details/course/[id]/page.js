import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Box,
  Text,
  StackDivider,
  Container,
  Flex,
} from "@chakra-ui/react";

import HeroSection from "./HeroSection";
import CourseOutline from "./CourseOutline";
import CourseInfo from "./CourseInfo";
import {courseDetails} from "@/constants";

export default function CourseDetails({ params}) {
  // const course = courseDetails[0];

  const course = courseDetails.filter(({id}) => {
    return id == params.id;
  })[0];
  return (
    <Container as="main" maxW={"7xl"}>
      <HeroSection mt={12} />
      <Box display="flex" mt={4}>
        <CourseOutline sx={{ flexBasis: "75%" }} course={course} />
        <CourseInfo grow={1} />
      </Box>
    </Container>
  );
}