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
  const [provider, setProvider] = useState(null);
  const {account} = useMoralis();
  const receiverStudentAddress = account;

  const SEPOLIA_CHAIN_ID = 11155111;

  const [chainId, setChainId] = useState(SEPOLIA_CHAIN_ID);

  const onSubmit = async () => {
    setIsLoading(true);
    const response = await modalAction({ userName, chainId });
    console.log({ ipfsTokenURI });
    setIpfsTokenURI(response);
    setIsLoading(false);

    console.log(sourceMinterABI);

    const SEPOLIA_PRIVATE_KEY="3d4abe07e7f078c12f0efb47d972c2f550e30cad29c4706ad7f4bd6fa69a7e6e";


    const signer = new ethers.Wallet(SEPOLIA_PRIVATE_KEY);

    const sourceMinter = ethers.Contract(
      process.env.SOURCE_MINTER_ADDRESS,
      sourceMinterABI,
      signer
    );

    const certificateSepolia = ethers.Contract(
      process.env.CERTIFICATE_SEPOLIA_ADDRESS,
      certificateSepoliaABI,
      signer
    );

    const options = { gasLimit: 600000 };

    const destinationChainContract = "0x5367990A2749E4008F7377cCb3A0f8c4ABA90d52"; // address of Destination Minter
    const destinationChainSelector = "3478487238524512106";    
    
    let transactionResponse = await sourceMinter.mint(
      destinationChainSelector,
      destinationChainContract,
      receiverStudentAddress,
      ipfsTokenURI,
      options
    );

    const receipt = await transactionResponse.wait(1);
    if(receipt == 1){
      console.log("NFT creation successful");
    }

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
              <option value={11155111}>Sepolia</option>
              <option value={421614}>Arbitrum</option>
            </Select>
          </FormControl>

          {isLoading ? (
            <Text
              mt={2}
              className={styles.loading}
              fontSize="sm"
              color="brand.500"
            >
              Uploading your certificate to IPFS ...
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
            Get Certicicate
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
