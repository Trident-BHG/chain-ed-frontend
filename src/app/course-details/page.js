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

export default function CourseDetails() {
  return (
    <Container as="main" maxW={"7xl"}>
      <HeroSection mt={12} />
      <Box display="flex" mt={4}>
        <CourseOutline sx={{ flexBasis: "75%" }} course={courseData} />
        <CourseInfo grow={1} />
      </Box>
    </Container>
  );
}

const courseData = {
  title: "Javascript for Beginners",
  type: "development",
  duration: "16",
  author: "Mayank",
  fees: "30",
  cashback: "10",
  rating: 5,
  thumbnail: "./course_thumbnails/course2.jpg",
  tags: ["popular", "new"],
  details: {
    noOfEnrolledStudents: 218934,
    sections: [
      {
        name: "Introduction to Javascript",
        subSections: [
          {
            name: "Course Intro",
            content: {
              type: "text",
              duration: "4 pages",
            },
          },
          {
            name: "Hello World in Javacript",
            content: {
              type: "video",
              duration: "02.00m",
            },
          },
          {
            name: "Where to put Javascipt",
            content: {
              type: "video",
              duration: "05.00m",
            },
          },
          {
            name: "Chapter task",
            content: {
              type: "quiz",
              cashback: "2.5",
            },
          },
        ],
      },
      {
        name: "Javascript 2023/2024 edition",
        subSections: [
          {
            name: "Course Intro",
            content: {
              type: "text",
              duration: "4 pages",
            },
          },
          {
            name: "Hello World in Javacript",
            content: {
              type: "video",
              duration: "2",
            },
          },
          {
            name: "Where to put Javascipt",
            content: {
              type: "video",
              duration: "5",
            },
          },
          {
            name: "Chapter task",
            content: {
              type: "quiz",
              cashback: "2.5",
            },
          },
        ],
      },
      {
        name: "Chapter 1: Hello Javascript",
        subSections: [
          {
            name: "Course Intro",
            content: {
              type: "text",
              duration: "4 pages",
            },
          },
          {
            name: "Hello World in Javacript",
            content: {
              type: "video",
              duration: "2",
            },
          },
          {
            name: "Where to put Javascipt",
            content: {
              type: "video",
              duration: "5",
            },
          },
          {
            name: "Chapter task",
            content: {
              type: "quiz",
              cashback: "2.5",
            },
          },
        ],
      },
    ],
  },
};
