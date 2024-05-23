import { Inter } from "next/font/google";
import { Providers } from "@/app/providers";
import localFont from "next/font/local";
import { Box } from "@chakra-ui/react";

import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

const gereralSans = localFont({
  // src: "@/app/font/generalSans_variable.woff2",
  src: "./fonts/generalSans_variable.woff2",
  display: "swap",
  variable: "--font-generalSans",
});

export const metadata = {
  title: "Chain.ed",
  description: "Chain.ed: Learn before you earn!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${gereralSans.variable} font-sans`}>
      <body>
        <Providers>
          <NavBar />
          <Box as="main" sx={{ minHeight: "calc(100vh - 64px - 248px)" }}>
            {children}
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
