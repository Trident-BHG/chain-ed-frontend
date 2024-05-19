"use client";

import Image from "next/image";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ArrowRight from "@/app/components/icons/ArrowRight";
import { ConnectButton } from "@web3uikit/web3";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = (props) => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    enableWeb3,
    isWeb3EnableLoading,
    account,
    isWeb3Enabled,
    Moralis,
    deactivateWeb3,
    provider,
  } = useMoralis();

  var [accountBalance, setAccountBalance] = useState(0);

  useEffect(() => {
    if (isWeb3Enabled) {
      console.log(`Connected Account ${account}`);
      updateAccountBalance();
      return;
    }
    if (
      typeof window != undefined &&
      window.localStorage.getItem("Connected")
    ) {
      enableWeb3();
    }
  }, [isWeb3Enabled]);

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      if (account == null) {
        window.localStorage.removeItem("Connected");
        deactivateWeb3();
        console.log("Account Disconnected");
      }
    });
  }, []);

  async function updateAccountBalance() {
    accountBalance = await window.ethereum.request({
      method: "eth_getBalance",
      params: [account.toString()],
    });
    const accountBalanceInt = parseInt(accountBalance);
    console.log(accountBalanceInt);
    setAccountBalance(
      ethers.utils.formatEther(accountBalanceInt.toString()).slice(0, 6),
    );
  }

  return (
    <>
      <Box px={4} borderBottom="1px" borderColor="gray.100">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box color="red">
              <Image
                className="relative"
                src="/logo.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
              />
            </Box>
          </HStack>
          <Flex alignItems={"center"}>
            {/* <Button mr={4} rightIcon={<ArrowRight color={"white"} />}>
              Explore Courses
            </Button> */}

            {account || isWeb3Enabled ? (
              <div>
                <Button variant="outline">
                  {accountBalance} ETH |{" "}
                  {account.slice(0, 4) + "..." + account.slice(-4)}
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                rightIcon={<ArrowRight />}
                onClick={async () => {
                  console.log(await enableWeb3());
                  console.log(isWeb3Enabled);
                  if (typeof window !== "undefined") {
                    window.localStorage.setItem("Connected", "Injected");
                  }
                }}
                disabled={isWeb3EnableLoading}
              >
                Connect Wallet
              </Button>
            )}

            {/* <div >
            <ConnectButton moralisAuth={false} class="connect-wallet-button"/>
           </div> */}

            {/* <Menu> */}
            {/*   <MenuButton */}
            {/*     as={Button} */}
            {/*     rounded={"full"} */}
            {/*     variant={"link"} */}
            {/*     cursor={"pointer"} */}
            {/*     minW={0} */}
            {/*   > */}
            {/*     <Avatar */}
            {/*       size={"sm"} */}
            {/*       src={ */}
            {/*         "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9" */}
            {/*       } */}
            {/*     /> */}
            {/*   </MenuButton> */}
            {/*   <MenuList> */}
            {/*     <MenuItem>Link 1</MenuItem> */}
            {/*     <MenuItem>Link 2</MenuItem> */}
            {/*     <MenuDivider /> */}
            {/*     <MenuItem>Link 3</MenuItem> */}
            {/*   </MenuList> */}
            {/* </Menu> */}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
