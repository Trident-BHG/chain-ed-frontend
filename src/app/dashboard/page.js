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
      <div>Dashboard page will be here</div>
    </Container>
  );
}
