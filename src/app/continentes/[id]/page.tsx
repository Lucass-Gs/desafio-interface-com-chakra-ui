"use client";

import { Flex, Text } from "@chakra-ui/react";
import { BannerContinente } from "./components/BannerContinente";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import { Continentes } from "../../types/Continentes";
import { api } from "@/services/api";

type CategoriesParams = {
  params: { id: string };
};

export default function Categories({ params }: CategoriesParams) {
  const [continentes, setContinentes] = useState<Continentes | null>(null);

  useEffect(() => {
    api({
      method: "get",
      url: `/continentes/${params.id}`,
    }).then((response) => {
      setContinentes(response.data);
      console.log(response.data);
    });
  }, [params.id]);

  return (
    <Flex flexDir="column">
      <Header />
      {continentes && (
        <>
          <BannerContinente
            imgSrc={continentes.detail.banner_src}
            title={continentes.title}
          />
          <Text fontSize="15px" m="6" as="article">
            {continentes.detail.summary}
          </Text>
        </>
      )}
    </Flex>
  );
}
