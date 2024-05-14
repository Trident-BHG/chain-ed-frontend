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
} from "@chakra-ui/react";

import HeroSection from "@/app/components/HeroSection";
import CourseListing from "@/app/components/CourseListing";

export default function Home() {
  return (
    <Container as="main" maxW={"7xl"}>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <HeroSection />
      <CourseListing />
      {/* </main> */}
    </Container>
  );
}
