"use client";

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
  HStack,
  VStack,
  Button,
  Flex,
} from "@chakra-ui/react";

import ArrowRight from "@/app/components/icons/ArrowRight";
import StarRatings from "@/app/components/StarRatings";
import { useContext, useEffect, useState } from "react";
import UserContext from "@/store/user-context";
import { ethers } from "ethers";
import erc20json from "@/constants/erc20.json";
import paymentAbi from "@/constants/paymentabi.json";

export default function HeroSection({ course, ...rest }) {
  const { duration, author, details } = course || {};
  const { noOfEnrolledStudents } = details || {};

  const [provider, setProvider] = useState(null);

  async function checkUserStatus() {
    const Contract = new ethers.Contract(
      process.env.PAYMENT_CONTRACT_ADDRESS,
      paymentAbi,
      provider.getSigner(),
    );

    console.log(
      await Contract.getCourseAmountPaidByUser(
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        0,
      ),
    );
  }

  async function enrollTheUser() {
    const Contract = new ethers.Contract(
      process.env.PAYMENT_CONTRACT_ADDRESS,
      paymentAbi,
      provider.getSigner(),
    );

    const ERC20Contract = new ethers.Contract(
      "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      erc20json,
      provider.getSigner(),
    );

    let tx = await ERC20Contract.approve(
      process.env.PAYMENT_CONTRACT_ADDRESS,
      ethers.utils.parseUnits("200", 6),
    );

    console.log(tx);

    let receipt = await provider.getTransactionReceipt(tx.hash);
    console.log(receipt);

    tx = await Contract.buyCourse(
      "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      0,
      ethers.utils.parseUnits("50", 6),
      "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    );

    receipt = await provider.getTransactionReceipt(tx.hash);
    console.log(receipt);

    // change the status of the button if receipt.status == 1
  }

  async function getBalance() {
    const Contract = new ethers.Contract(
      "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      erc20json,
      provider.getSigner(),
    );

    console.log(Contract);

    console.log(
      await Contract.balanceOf("0x4b16c5de96eb2117bbe5fd171e4d203624b014aa"),
    );
  }

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
  }, []);

  const rating = 5;

  return (
    <HStack
      maxW="100%"
      p={8}
      borderRadius="md"
      mb={2}
      bgColor="gray.50"
      alignItems="flex-start"
      {...rest}
    >
      <Box width="25%" mr={4}>
        <img
          alt="Hero Image"
          align="center"
          width="100%"
          src="/course_details.jpg"
        />
      </Box>
      <VStack mr={40} alignItems="flex-start">
        <Box>
          <Heading mb={2}>Javascript for Beginners</Heading>
          <Text fontWeight="500" color="gray.500">
            Get on the fast track to a career in JavaScript. In this certificate
            program, you'll learn and earn in-demand skills at your own pace, no
            degree or experience required.
          </Text>
        </Box>
        <HStack gap="16" mt={4}>
          <Text>
            Duration:{" "}
            <Text as="span" color="black" fontWeight="500" ml={4}>
              16 weeks
            </Text>
          </Text>
          <Text>
            By:
            <Text as="span" color="black" fontWeight="500" ml={4}>
              Wisdom Umanah
            </Text>
          </Text>
          <Text display="inline-flex" alignItems="center">
            Rating:
            <HStack display="inline-flex" spacing="1" ml={4}>
              {typeof rating === "number" && (
                <>
                  <Flex display="inline-flex" gap={1}>
                    <StarRatings rating={rating} color="yellow.500" />
                    <StarRatings rating={5 - rating} color="gray.500" />
                  </Flex>
                </>
              )}
            </HStack>
          </Text>
        </HStack>
        <HStack mt={4}>
          <Button
            variant="solid"
            rightIcon={<ArrowRight color={"white"} />}
            width="xs"
            onClick={async () => enrollTheUser()}
          >
            Enroll Now
          </Button>
          <div className="cursor-pointer" onClick={() => checkUserStatus()}>
            check user status
          </div>
          <Text ml={4}>218,934 enrolled and earn already</Text>
        </HStack>
      </VStack>
    </HStack>
  );
}
