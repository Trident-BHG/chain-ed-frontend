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
import Dashboard from "@/app/dashboard/Dashboard";

export default function Home() {
  return (
    <Container as="main" maxW={"7xl"}>
      <Dashboard />
    </Container>
  );
}
