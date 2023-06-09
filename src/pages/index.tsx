import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Link } from "@chakra-ui/next-js";
import { Container, Flex, VStack } from "@chakra-ui/react";
import Cart from "@/components/section/cart";
import Details from "@/components/section/Details";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Charka UI with nextjs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="container.xl" p={0}>
        <Flex
          height={{ base: "auto", md: "100vh" }}
          py={[0, 0, 20]}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Details />
          <Cart />
        </Flex>
      </Container>
    </>
  );
}
