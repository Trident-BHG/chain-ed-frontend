"use client";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  IconProps,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import ArrowRight from "@/app/components/icons/ArrowRight";

export default function () {
  return (
    <Container maxWidth="100%" borderTop="1px" borderColor="gray.100" pt="8">
      <Container>
        <VStack>
          <Heading as="div">
            <Text>Course Listing</Text>
          </Heading>
          <Text as="p" textAlign="center" lineHeight={1.3}>
            Our courses are tailored in be as easy and possible to digest and
            covers all the necessary knowledge to help your learning process
          </Text>
          <Text>Filters</Text>
          <Text>Courses</Text>
        </VStack>
      </Container>
    </Container>
  );
}
