"use client";

import {
  Box,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BannerContinente } from "./components/BannerContinente";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import { Continentes } from "../../types/Continentes";
import { api } from "@/services/api";
import { InfoContinente } from "./components/InfoContinente";
import { CountryCard } from "./components/CountryCard";

type CategoriesParams = {
  params: { id: string };
};

export default function Categories({ params }: CategoriesParams) {
  const [continentes, setContinentes] = useState<Continentes | null>(null);

  const isMobile = useBreakpointValue(
    {
      base: true,
      sm: true,
      md: false,
      lg: false,
    },
    {
      ssr: false,
    }
  );

  useEffect(() => {
    api({
      method: "get",
      url: `/continentes/${params.id}`,
    }).then((response) => {
      setContinentes(response.data);
      console.log(isMobile);
    });
  }, [params.id, isMobile]);

  return (
    <Flex flexDir="column">
      <Header />
      {continentes && (
        <>
          <BannerContinente
            imgSrc={continentes.detail.banner_src}
            title={continentes.title}
          />
          {!isMobile ? (
            <>
              <Flex
                direction="row"
                justifyContent="spacec-between"
                align="center"
                py={10}
                px={32}
              >
                <Box flex="50%">
                  <Text fontSize="15px" as="article">
                    {continentes.detail.summary}
                  </Text>
                </Box>
                <Box flex="50%">
                  <InfoContinente
                    margin={5}
                    countries={continentes.detail.countries}
                    languages={continentes.detail.languages}
                    cities={continentes.detail.cities}
                  />
                </Box>
              </Flex>
              <Heading size="lg" m="6" fontWeight="semibold" mx={32}>
                Cidades +100
              </Heading>
              <Flex justify="space-between" mx={32} my={6}>
                <HStack gap={16} wrap="wrap">
                  {continentes.detail.top_cities?.map((item) => (
                    <CountryCard
                      key={item.id}
                      city={item.city}
                      country={item.country}
                      img={item.img}
                      flag={item.flag}
                    />
                  ))}
                </HStack>
              </Flex>
            </>
          ) : (
            <>
              <Text fontSize="15px" m="6" as="article">
                {continentes.detail.summary}
              </Text>
              <InfoContinente
                countries={continentes.detail.countries}
                languages={continentes.detail.languages}
                cities={continentes.detail.cities}
              />
              <Heading size="lg" m="6" fontWeight="semibold">
                Cidades +100
              </Heading>
              {continentes.detail.top_cities?.map((item) => (
                <CountryCard
                  key={item.id}
                  city={item.city}
                  country={item.country}
                  img={item.img}
                  flag={item.flag}
                />
              ))}
            </>
          )}
        </>
      )}
    </Flex>
  );
}
