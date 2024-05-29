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

  let numberOfSections = sections.length;
  let lectures = 0;
  let totalDuration = 0;
  for (let i = 0; i < numberOfSections; i++) {
    let numberOfSubsections = sections[i].subSections.length;
    lectures = lectures + numberOfSubsections;
    for (let j = 0; j < numberOfSubsections; j++) {
      totalDuration =
        totalDuration + (sections[i].subSections[j].content.duration || 0);
    }
  }

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
          {sections.length} sections
        </ListItem>
        <ListItem display="inline-flex" alignItems="center">
          <ListIcon as={CircleIcon} boxSize={2} ml={2} />
          {lectures} lectures
        </ListItem>
        <ListItem display="inline-flex" alignItems="center">
          <ListIcon as={CircleIcon} boxSize={2} ml={2} />
          {parseInt(totalDuration / 60)}h {totalDuration % 60}m
        </ListItem>
        <ListItem display="inline-flex" alignItems="center">
          <ListIcon as={CircleIcon} boxSize={2} ml={2} />${course.cashback}{" "}
          cashback
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
          let sectionCashback = 0;
          let sectionDuration = 0;
          for (let j = 0; j < subSections.length; j++) {
            sectionCashback =
              sectionCashback + (subSections[j].content.cashback || 0);
          }
          for (let j = 0; j < subSections.length; j++) {
            sectionDuration =
              sectionDuration + (subSections[j].content.duration || 0);
          }

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
                    <Text as="span">{subSections.length} lectures</Text>
                    <Icon as={CircleIcon} boxSize={2} mx={2} />
                    <Text as="span">{sectionDuration}m total length</Text>
                    <Icon as={CircleIcon} boxSize={2} mx={2} />
                    <Text as="span">${sectionCashback} cashback</Text>
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
          fontSize="xs"
        >
          <Center>
            <IconElement type={content.type} />
            <Text ml={4}>{name}</Text>
          </Center>
          <Text fontSize="xs">
            {content.duration ? content.duration + "m" : "-"}
          </Text>
        </Flex>
      ))}
    </AccordionPanel>
  );
};
