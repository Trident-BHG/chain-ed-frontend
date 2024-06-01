"use client";

import { useState } from "react";

import {
  Input,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  VStack,
  Center,
  Image,
  Link,
  Select,
  Option,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import styles from "./styles.module.css";
import Modal from "@/app/components/Modal";
import ArrowRight from "@/app/components/icons/ArrowRight";

import { ethers } from "ethers";
import sourceMinterABI from "@/constants/abi/source-minter.json";
import certificateSepoliaABI from "@/constants/abi/certificate-sepolia.json";
import { Providers } from "@/app/providers";
import { useMoralis } from "react-moralis";

export default function CertificateModal({
  isOpen,
  onClose,
  onOpen,
  children: modalBody,
  modalAction,
  userName,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [ipfsTokenURI, setIpfsTokenURI] = useState(null);
  const receiverStudentAddress = "0x0B8c649b4aceE00fbC1f4834B0b2ab9d528e6048";

  const [chainId, setChainId] = useState(process.env.SEPOLIA_CHAIN_ID);

  const onSubmit = async () => {
    setIsLoading(true);
    const response = await modalAction({ userName, chainId });
    console.log(response);
    setIpfsTokenURI(response);

    const signer = new ethers.Wallet(
      process.env.SEPOLIA_PRIVATE_KEY,
      new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL),
    );

    const options = { gasLimit: 600000 };
    if (chainId == process.env.SEPOLIA_CHAIN_ID) {
      const certificateSepolia = new ethers.Contract(
        process.env.CERTIFICATE_SEPOLIA_ADDRESS,
        certificateSepoliaABI,
        signer,
      );
      let transactionResponse = await certificateSepolia.mint(
        receiverStudentAddress,
        ipfsTokenURI,
        options,
      );
      const receipt = await transactionResponse.wait(1);
      console.log(receipt);
      if (receipt.status == 1) {
        console.log("NFT creation successful on Sepolia");
      }
    } else if (chainId == process.env.ARBITRUM_CHAIN_ID) {
      console.log(process.env.SOURCE_MINTER_ADDRESS);
      const sourceMinter = new ethers.Contract(
        process.env.SOURCE_MINTER_ADDRESS,
        sourceMinterABI,
        signer,
      );
      let transactionResponse = await sourceMinter.mint(
        process.env.ARBITRUM_DESTINATION_CHAIN_SELECTOR,
        process.env.ARBITRUM_DESTINATION_CHAIN_CONTRACT,
        receiverStudentAddress,
        response,
        options,
      );
      console.log(transactionResponse);
      const receipt = await transactionResponse.wait(1);
      console.log(receipt);
      if (receipt.status == 1) {
        console.log("NFT creation successful on Arbitrum");
      }
    } else {
      console.log("Please select a valid destination chain for NFT");
    }
    setIsLoading(false);
  };

  return (
    <Modal modalCloseButton onClose={onClose} isOpen={isOpen}>
      <Center mt={8}>
        <VStack>
          <Image width="80px" src="/congrats.png" alt="congrats icon" />
          <Text fontWeight="600">Wooowww!</Text>
          <Text>
            Congratulations{" "}
            <Text as="span" fontWeight="600">
              {userName}
            </Text>
            ,<br /> you just completed a course
          </Text>

          <FormControl mt={4}>
            <FormLabel>Select Chain for your NFT certificate</FormLabel>
            <Select
              size="sm"
              mt={2}
              onChange={(e) => setChainId(e.target.value)}
            >
              <option value={process.env.SEPOLIA_CHAIN_ID}>Sepolia</option>
              <option value={process.env.ARBITRUM_CHAIN_ID}>Arbitrum</option>
            </Select>
          </FormControl>

          {isLoading ? (
            <Text
              mt={2}
              className={styles.loading}
              fontSize="sm"
              color="brand.500"
            >
              Uploading your certificate to IPFS and Generating NFT ...
            </Text>
          ) : null}
        </VStack>
      </Center>
      <Center mt={8} mb={8}>
        {!ipfsTokenURI ? (
          <Button
            isLoading={isLoading}
            rightIcon={<ArrowRight color={"white"} />}
            onClick={onSubmit}
          >
            Get Certificate
          </Button>
        ) : (
          <Button
            as={Link}
            isExternal
            href={ipfsTokenURI}
            _hover={{ textDecoration: "none" }}
          >
            View Certicicate <ExternalLinkIcon mx={2} />
          </Button>
        )}
      </Center>
    </Modal>
  );
}
