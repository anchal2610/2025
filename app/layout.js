import Header from "@/components/header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Nitrrsh World",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}</body>
    </html>
  );
}
