"use client";

import { useRef } from "react";

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
} from "@chakra-ui/react";

import HeroSection from "@/app/components/HeroSection";
import CourseListing from "@/app/components/CourseListing";

export default function Home() {
  const courseListingRef = useRef(null);
  return (
    <Container as="main" maxW={"7xl"}>
      <HeroSection
        onClick={() =>
          window.scrollTo({
            top: courseListingRef.current.offsetTop,
            behavior: "smooth",
          })
        }
      />
      <CourseListing ref={courseListingRef} />
    </Container>
  );
}
