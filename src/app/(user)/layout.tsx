import "@/app/styles/globals.css";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Bikram Tech Blogs",
  description: "Made by Bikramjeet Sarmah using NextJs and Sanity CMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`max-w-7xl mx-auto  ${roboto.className}`}>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
