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
} from "@chakra-ui/react";

import ArrowRight from "@/app/components/icons/ArrowRight";

export default function HeroSection() {
  return (
    <Container maxWidth="100%">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 2, md: 8 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 2, md: 4 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text>
              <Text as="span" color={"brand.400"}>
                Get paid
              </Text>{" "}
              for
            </Text>
            <Text>completing a course</Text>
          </Heading>
          <Text color={"gray.500"}>
            Revolutionize your future with a better way to learn and get paid,
            where every skill learned and every dollar earned brings you closer
            to achieving your dreams. With a cutting-edge approach that combines
            skill-building, knowledge sharing, and financial freedom
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              variant="outline"
              rightIcon={<ArrowRight />}
            >
              Connect Wallet
            </Button>
            <Button
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              rightIcon={<ArrowRight color={"white"} />}
            >
              Explore Course
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box position={"relative"} width={"full"} overflow={"hidden"}>
            <Image
              alt="Hero Image"
              fit="contain"
              align="center"
              w={"100%"}
              h={"100%"}
              src={"./hero_img.png"}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
