"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/app/theme";
import { MoralisProvider } from "react-moralis";
import { AppContextProvider } from "@/store/app-context";

export function Providers({ children }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <ChakraProvider theme={theme}>
        <AppContextProvider>{children}</AppContextProvider>
      </ChakraProvider>
    </MoralisProvider>
  );
}
