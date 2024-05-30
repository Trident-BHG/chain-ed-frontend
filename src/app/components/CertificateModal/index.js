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
  const [chainId, setChainId] = useState(11155111);

  const onSubmit = async () => {
    setIsLoading(true);
    const response = await modalAction({ userName, chainId });
    console.log({ ipfsTokenURI });
    setIpfsTokenURI(response);
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
