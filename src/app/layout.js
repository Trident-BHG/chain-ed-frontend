import { Inter } from "next/font/google";
import { Providers } from "@/app/providers";
import NavBar from "@/app/components/NavBar";
import localFont from "next/font/local";
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
          {children}
        </Providers>
      </body>
    </html>
  );
}
