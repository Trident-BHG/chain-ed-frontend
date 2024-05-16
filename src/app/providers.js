"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/app/theme";
import { MoralisProvider } from "react-moralis";

export function Providers({ children }) {
  return <MoralisProvider initializeOnMount={false}><ChakraProvider theme={theme}>{children}</ChakraProvider></MoralisProvider>;
}
