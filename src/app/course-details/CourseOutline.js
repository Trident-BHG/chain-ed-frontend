"use client";

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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Center,
  Spacer,
  List,
  ListItem,
  ListIcon,
  Icon,
} from "@chakra-ui/react";

import CourseQuiz from "@/app/components/icons/CourseQuiz";
import CourseText from "@/app/components/icons/CourseText";
import CourseVideo from "@/app/components/icons/CourseVideo";
import CircleIcon from "@/app/components/icons/CircleIcon";

export default function CourseOutline(props) {
  const { course, ...rest } = props || {};
  const { details } = course || {};
  const { sections } = details || {};

  return (
    <Box borderTop="1px" borderColor="gray.50" p={4} pl="0" {...rest}>
      <Heading as="h2" size="md">
        Course outline and earnings
      </Heading>
      <List
        fontSize="sm"
        color="gray.500"
        display="inline-flex"
        alignContent="center"
        mt={4}
      >
        <ListItem display="inline-flex" alignItems="center">
          14 sections
        </ListItem>
        <ListItem display="inline-flex" alignItems="center">
          <ListIcon as={CircleIcon} boxSize={2} ml={2} />
          72 lectures
        </ListItem>
        <ListItem display="inline-flex" alignItems="center">
          <ListIcon as={CircleIcon} boxSize={2} ml={2} />
          7h 49m total length{" "}
        </ListItem>
        <ListItem display="inline-flex" alignItems="center">
          <ListIcon as={CircleIcon} boxSize={2} ml={2} />
          $20 cashback
        </ListItem>
      </List>

      <Accordion
        defaultIndex={[0]}
        allowMultiple
        borderRight="1px"
        borderLeft="1px"
        borderColor="gray.50"
        mt={2}
      >
        {sections.map(({ name, subSections }, i) => {
          return (
            <AccordionItem
              key={i}
              borderTop="none"
              borderBottom="1px"
              borderColor="gray.100"
            >
              <AccordionButton bg="gray.50">
                <Center flex="1" textAlign="left" fontWeight="500">
                  <Heading as="h6" fontSize="sm">
                    {name}
                  </Heading>
                  <Spacer />

                  <Box fontSize="xs" mr={2} textAlign="right">
                    <Text as="span">1 lectures</Text>
                    <Icon as={CircleIcon} boxSize={2} mx={2} />
                    <Text as="span">49m total length</Text>
                    <Icon as={CircleIcon} boxSize={2} mx={2} />
                    <Text as="span">$0.5 cashback</Text>
                  </Box>
                </Center>
                <AccordionIcon />
              </AccordionButton>
              <CourseSubSections subSections={subSections} />
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
}

const IconElement = ({ type }) => {
  if (type === "video") return <CourseVideo />;
  if (type === "quiz") return <CourseQuiz />;
  return <CourseText />;
};

const CourseSubSections = ({ subSections }) => {
  if (!subSections) return null;
  return (
    <AccordionPanel pb={4} color="gray.500">
      {subSections.map(({ name, content }, i) => (
        <Flex
          key={`course-subsection-${name}-${i}`}
          justify="space-between"
          mb={2}
          fontsize="xs"
        >
          <Center>
            <IconElement type={content.type} />
            <Text ml={4}>{name}</Text>
          </Center>
          <Text fontSize="xs">{content.duration}</Text>
        </Flex>
      ))}
    </AccordionPanel>
  );
};
