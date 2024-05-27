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
  Grid,
  GridItem,
  Badge,
  HStack,
  Spacer,
  SimpleGrid,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { MdFilterList } from "react-icons/md";

import { SearchIcon, ArrowUpDownIcon } from "@chakra-ui/icons";

import ArrowRight from "@/app/components/icons/ArrowRight";
import { px } from "framer-motion";
import StudentProgress from "../components/StudentProgress";

export default function Dashboard() {
  return (
    <Container maxWidth="100%" borderTop="1px" borderColor="gray.100" pt="8">
      <VStack spacing={8}>
        <Stack
          py={{ base: 2, md: 8 }}
          direction={{ base: "column" }}
          w="100%"
          border="1px solid #225CF3"
          borderRadius="8px"
          bg="#ECF1FE"
          h="156px"
          overflow="hidden"
        >
          <Box marginLeft="40px" marginTop="10px">
            <Text lineHeight="26px" fontSize="20px" fontWeight="500">
              Welcome
            </Text>
            <Box color="#225CF3" fontWeight="semibold" fontSize="4xl">
              Mayank Chhipa
            </Box>
          </Box>

          <Image
            alt="Student Image"
            borderRadius="16px"
            w="241px"
            h="222px"
            src={"./student_img.png"}
            position="relative"
            top="-40px"
            left="780px"
          />
          <Image
            alt="Student Image"
            borderRadius="16px"
            w="241px"
            h="250px"
            src={"./student_img.png"}
            position="relative"
            top="-305px"
            left="885px"
            boxShadow="dark-lg"
          />
          <Image
            alt="Student Image"
            borderRadius="16px"
            w="241px"
            h="222px"
            src={"./student_img.png"}
            position="relative"
            top="-420px"
            left="1030px"
            boxShadow="dark-lg"
          />
        </Stack>

        <Grid templateColumns="repeat(4, 1fr)" gap={6} w="100%">
          <GridItem
            w="100%"
            h="140"
            bg="#FDF6DD"
            border="1px solid #F3C522"
            borderRadius="8px"
          >
            <HStack h="72px" p={15}>
              <Box w="50%">
                <img src="./courses.svg" />
              </Box>
              <Box w="50%" align={"right"}>
                <Text fontSize={"24px"} fontWeight={"600"}>
                  24
                </Text>
              </Box>
            </HStack>
            <HStack h="72px" p={15}>
              <Box w="50%">
                <Text fontSize={"14px"} fontWeight={"500"}>
                  TOTAL COURSES
                </Text>
              </Box>
              <Box w="50%" align={"right"}>
                <Box bg="white" p={2}>
                  <Text fontSize={"2xs"}>+24 over the past days</Text>
                </Box>
              </Box>
            </HStack>
          </GridItem>
          <GridItem
            w="100%"
            h="140"
            bg="#D8F2EE"
            border="1px solid #5CC7B6"
            borderRadius="8px"
          >
            <HStack h="72px" p={15}>
              <Box w="50%">
                <img src="./loading.svg" />
              </Box>
              <Box w="50%" align={"right"}>
                <Text fontSize={"24px"} fontWeight={"600"}>
                  24
                </Text>
              </Box>
            </HStack>
            <HStack h="72px" p={15}>
              <Box w="50%">
                <Text fontSize={"14px"} fontWeight={"500"}>
                  ONGOING COURSES
                </Text>
              </Box>
              <Box w="50%" align={"right"}>
                <Box bg="white" p={2}>
                  <Text fontSize={"2xs"}>+2 over the past days</Text>
                </Box>
              </Box>
            </HStack>
          </GridItem>
          <GridItem
            w="100%"
            h="140"
            bg="#FEE4CC"
            border="1px solid #FC8B28"
            borderRadius="8px"
          >
            <HStack h="72px" p={15}>
              <Box w="50%">
                <img src="./cashback.svg" />
              </Box>
              <Box w="50%" align={"right"}>
                <Text fontSize={"24px"} fontWeight={"600"}>
                  $46
                </Text>
              </Box>
            </HStack>
            <HStack h="72px" p={15}>
              <Box w="50%">
                <Text fontSize={"14px"} fontWeight={"500"}>
                  TOTAL CASHBACKS
                </Text>
              </Box>
              <Box w="50%" align={"right"}>
                <Box bg="white" p={2}>
                  <Text fontSize={"2xs"}>+24 over the past days</Text>
                </Box>
              </Box>
            </HStack>
          </GridItem>
          <GridItem
            w="100%"
            h="140"
            bg="#CCEBFF"
            border="1px solid #2CAAFF"
            borderRadius="8px"
          >
            <HStack h="72px" p={15}>
              <Box w="50%">
                <img src="./earnings.svg" />
              </Box>
              <Box w="50%" align={"right"}>
                <Text fontSize={"24px"} fontWeight={"600"}>
                  $16
                </Text>
              </Box>
            </HStack>
            <HStack h="72px" p={15}>
              <Box w="50%">
                <Text fontSize={"14px"} fontWeight={"500"}>
                  TOTAL EARNINGS CLAIMED
                </Text>
              </Box>
              <Box w="50%" align={"right"}>
                <Box bg="white" p={2}>
                  <Text fontSize={"2xs"}>+24 over the past days</Text>
                </Box>
              </Box>
            </HStack>
          </GridItem>
        </Grid>
        <Box w="100%">
          <Flex marginBottom={6}>
            <Text fontSize={20} fontWeight={500}>
              Let's Catch-up with our learning
            </Text>
            <Spacer />
            <Menu>
              <MenuButton
                as={Button}
                colorScheme="gray"
                fontWeight={500}
                variant="outline"
                size="sm"
                marginRight={"16px"}
                rightIcon={<Icon as={MdFilterList} />}
              >
                Development
              </MenuButton>
              <MenuList>
                <MenuItem>Development</MenuItem>
                <MenuItem>UI/UX</MenuItem>
                <MenuItem>Marketing</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                colorScheme="gray"
                fontWeight={500}
                variant="outline"
                size="sm"
                marginRight={"16px"}
                rightIcon={<ArrowUpDownIcon />}
              >
                Recently Viewed
              </MenuButton>
              <MenuList>
                <MenuItem>Recently Viewed</MenuItem>
                <MenuItem>Most Watched</MenuItem>
                <MenuItem>Least Watched</MenuItem>
              </MenuList>
            </Menu>
            <InputGroup width={335}>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                placeholder="Search"
                size="sm"
                variant="outline"
                borderRadius={4}
                colorScheme="gray"
              />
            </InputGroup>
          </Flex>
          <StudentProgress />
        </Box>
      </VStack>
    </Container>
  );
}

// https://v2.chakra-ui.com/docs/components/box
