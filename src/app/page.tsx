"use client";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import TravelTypes from "@/components/TravelTypes";
import { Metadata } from "next";
import { Divider } from "@chakra-ui/react";
import Slides from "@/components/Slides";
import Slogan from "@/components/Slogan";

export const metadata: Metadata = {
  title: "Home - WorldTrip",
};

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Divider w="4rem" my="30px" mx="auto" borderColor="#47585B" />
      <Slogan />
      <Slides />
    </>
  );
}
