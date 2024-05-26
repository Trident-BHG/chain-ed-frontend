"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/app/theme";
import { MoralisProvider } from "react-moralis";
import { UserContextProvider } from "@/store/user-context";

export function Providers({ children }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <UserContextProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </UserContextProvider>
    </MoralisProvider>
  );
}
