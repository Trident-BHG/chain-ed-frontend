"use client";

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
  Flex,
  List,
  ListItem,
  VStack,
  Icon,
  ListIcon,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import ArrowRight from "@/app/components/icons/ArrowRight";

export default function CourseInfo(props) {
  return (
    <VStack
      border="1px"
      alignItems="flex-start"
      borderBottom="0px"
      borderColor="gray.50"
      maxWidth="500px"
      {...props}
    >
      <Box
        direction="column"
        fontSize="sm"
        borderBottom="1px"
        borderColor="gray.50"
        p={4}
      >
        <Heading as="h3" fontSize="lg" fontWeight="500">
          How to earn cashback
        </Heading>
        <List spacing={3} my={4}>
          <ListItem>
            <ListIcon as={CheckIcon} color="gray.500" />
            Extensive, informative and interesting video lecture
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="gray.500" />
            Co, UnorderedListmplete Code demonstrated in lecture
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="gray.500" />
            Extensive, informative and interesting video lecture
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="gray.500" />
            Extensive, informative and interesting video lecture
          </ListItem>
        </List>
      </Box>
      <Box fontSize="sm" borderBottom="1px" borderColor="gray.50" p={4}>
        <Heading as="h3" fontSize="lg" fontWeight="500">
          Course requirement
        </Heading>
        <UnorderedList spacing={3} my={4}>
          <ListItem>
            There are no skill prerequisites for this course although it's
            helpful if you are familiar with operating your computer and using
            the internet.
          </ListItem>
          <ListItem>
            You can take this course using a Mac, PC or LInux machine.
          </ListItem>
          <ListItem>
            It is recommended that you download the free Komodo text editor.
          </ListItem>
          <ListItem>
            You will need to create a wallet so you can withdraw your earnings
          </ListItem>
        </UnorderedList>
        <Button
          size={"lg"}
          fontWeight={"normal"}
          width="100%"
          px={6}
          rightIcon={<ArrowRight />}
        >
          Enroll Now
        </Button>
      </Box>
    </VStack>
  );
}
