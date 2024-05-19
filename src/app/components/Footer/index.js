"use client";

import {
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Flex,
  Box,
  Spacer,
  Icon,
  HStack,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

import ArrowRight from "@/app/components/icons/ArrowRight";

export default function Footer() {
  return (
    <Box as="footer" p="6" bgColor={"brand.500"}>
      <Container as="main" maxW={"7xl"} my={8}>
        <HStack>
          <Image
            color="white"
            className="relative"
            src="/footer_logo.svg"
            alt="Next.js Logo"
            width={170}
            /* height={37} */
            priority
          />
          <HStack
            spacing="10"
            flexDirection="row"
            color="white"
            flexGrow="1"
            justifyContent="center"
          >
            <Box>
              <Link as={NextLink} href="#/docs">
                Documentation
              </Link>
            </Box>
            <Box>
              <Link as={NextLink} href="#/team">
                The Team
              </Link>
            </Box>
            <Box>
              <Link as={NextLink} href="#/chainlink">
                Chainlink
              </Link>
            </Box>
          </HStack>

          <Box>
            <Button
              variant="outline"
              size={"lg"}
              fontWeight={"regular"}
              px={6}
              rightIcon={<ArrowRight />}
              color={"white"}
              mr="10"
              sx={{
                "svg path": { fill: "white" },
              }}
              _hover={{
                backgroundColor: "brand.600",
                borderColor: "gray.400",
              }}
            >
              Connect wallet
            </Button>

            <Button
              variant="solid"
              bgColor="white"
              size={"lg"}
              fontWeight={"regular"}
              px={6}
              rightIcon={<ArrowRight />}
              color="brand.500"
              sx={{
                "svg path": { fill: "brand.500" },
              }}
              _hover={{
                /* color: "gray.100", */
                backgroundColor: "gray.100",
              }}
            >
              Explore Course
            </Button>
          </Box>
        </HStack>
        <Divider my={6} />
        <HStack>
          <Text color="white">@copyright {new Date().getFullYear()}</Text>
        </HStack>
      </Container>
    </Box>
  );
}
