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
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";

import ArrowRight from "@/app/components/icons/ArrowRight";
import StarRatings from "@/app/components/StarRatings";

import erc20json from "@/constants/erc20.json";
import paymentAbi from "@/constants/paymentabi.json";

export default function HeroSection({ course, ...rest }) {
  const { duration, author, details, rating } = course || {};
  const { noOfEnrolledStudents } = details || {};

  const [provider, setProvider] = useState(null);
  const [isUserEnrolled, setIsUserEnrolled] = useState(false);

  const rotuer = useRouter();

  function gotoLearningPage() {
    rotuer.push(
      "/course/become-a-certified-web-developer-html-css-js/lecture/introduction-to-html-css-javascript/overview",
    );
  }

  async function supplyTokensOffline() {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.LOCAL_RPC_ENDPOINT,
    );

    const signer = new ethers.Wallet(
      process.env.TEST_USER_PRIVATE_KEY,
      provider,
    );

    const LendingContract = new ethers.Contract(
      process.env.PAYMENT_CONTRACT_ADDRESS,
      paymentAbi,
      signer,
    );

    const tx = await LendingContract.supplyTokens(
      process.env.USDC_ETH_MAINNET_ADDRESS,
      ethers.utils.parseUnits("50", 6),
    );

    const receipt = await provider.getTransactionReceipt(tx.hash);
    console.log(receipt);
  }

  async function enrollTheUser() {
    const Contract = new ethers.Contract(
      process.env.PAYMENT_CONTRACT_ADDRESS,
      paymentAbi,
      provider.getSigner(),
    );

    const ERC20Contract = new ethers.Contract(
      process.env.USDC_ETH_MAINNET_ADDRESS,
      erc20json,
      provider.getSigner(),
    );

    let tx = await ERC20Contract.approve(
      process.env.PAYMENT_CONTRACT_ADDRESS,
      ethers.utils.parseUnits("50", 6),
    );

    console.log(tx);

    let receipt = await provider.getTransactionReceipt(tx.hash);
    console.log(receipt);

    tx = await Contract.buyCourse(
      process.env.TEST_USER_ADDRESS,
      process.env.TEST_COURSE_ID,
      ethers.utils.parseUnits("50", 6),
      process.env.USDC_ETH_MAINNET_ADDRESS,
    );

    receipt = await provider.getTransactionReceipt(tx.hash);
    console.log(receipt);

    // change the status of the button if receipt.status == 1
    if (receipt.status == 1) {
      await supplyTokensOffline();
      setIsUserEnrolled(true);
    }
  }

  useEffect(() => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
    } catch (e) {}
  }, []);

  return (
    <HStack
      maxW="100%"
      p={8}
      borderRadius="md"
      mb={2}
      bgColor="gray.50"
      alignItems="flex-start"
      position="relative"
      {...rest}
    >
      <VStack
        bgColor="yellow.500"
        position="absolute"
        right="10px"
        top="0"
        justifyContent="space-between"
        px={2}
        pb={1}
        borderBottomRadius="md"
      >
        <Flex
          px={4}
          py={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontWeight="500" fontSize="sm">
            Enroll for
          </Text>
          <Text as="span" lineHeight={1} fontWeight="600" fontSize="2xl">
            $ {course.fees}
          </Text>
        </Flex>
        <Flex
          px={2}
          py={2}
          bgColor="white"
          direction="column"
          alignItems="center"
          justifyContent="center"
          borderBottomRadius="md"
        >
          <Text fontWeight="500" fontSize="sm">
            Cashback
          </Text>
          <Text as="span" lineHeight={1} fontWeight="600" fontSize="2xl">
            $ {course.cashback}
          </Text>
        </Flex>
      </VStack>

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
          <Heading mb={2}>Introduction to HTML, CSS and Javascript</Heading>
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
              {duration}
            </Text>
          </Text>
          <Text>
            By:
            <Text as="span" color="black" fontWeight="500" ml={4}>
              {author}
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
          {isUserEnrolled ? (
            <Button
              variant="solid"
              rightIcon={<ArrowRight color={"white"} />}
              width="xs"
              onClick={() => gotoLearningPage()}
            >
              Start Learning
            </Button>
          ) : (
            <Button
              variant="solid"
              rightIcon={<ArrowRight color={"white"} />}
              width="xs"
              onClick={async () => enrollTheUser()}
            >
              Enroll Now
            </Button>
          )}
          <Text ml={4}>
            {details.noOfEnrolledStudents} students enrolled and earn already
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
}
